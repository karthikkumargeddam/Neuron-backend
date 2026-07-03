import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

# Disable TensorFlow imports in transformers to avoid heavy TF dependency
os.environ.setdefault("TRANSFORMERS_NO_TF", "1")
# Use pure Python protobuf implementation to avoid version mismatch
os.environ.setdefault("PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION", "python")

import logging
import shutil
import torch
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer, logging as transformers_logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
transformers_logging.set_verbosity_error()

class GenerateRequest(BaseModel):
    prompt: str
    max_tokens: int = 256

app = FastAPI()

MODEL_NAME = os.getenv("LLM_MODEL", "openlm-research/open_llama_13b")
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def _model_cache_path(model_name: str) -> str:
    # Use default HuggingFace cache directory
    cache_root = os.path.expanduser("~/.cache/huggingface/hub")
    os.makedirs(cache_root, exist_ok=True)
    return os.path.join(cache_root, "models", model_name.replace('/', '--'))

def load_model(retries: int = 2):
    for attempt in range(1, retries + 1):
        try:
            logger.info("Loading model %s on %s (attempt %d)...", MODEL_NAME, DEVICE, attempt)
            tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
            quantize = os.getenv("QUANTIZE_4BIT", "false").lower() == "true"
            model_kwargs = {
                "torch_dtype": torch.float16,
                "device_map": "auto",
                "low_cpu_mem_usage": True,
            }
            if quantize:
                model_kwargs["load_in_4bit"] = True
            # On final attempt, force download to ensure clean fetch
            if attempt == retries:
                model_kwargs["force_download"] = True
            model = AutoModelForCausalLM.from_pretrained(MODEL_NAME, **model_kwargs)
            logger.info("Model loaded successfully on %s", DEVICE)
            return tokenizer, model
        except Exception as e:
            logger.error("Attempt %d to load model failed: %s", attempt, e)
            if attempt < retries:
                cache_path = _model_cache_path(MODEL_NAME)
                if os.path.isdir(cache_path):
                    try:
                        shutil.rmtree(cache_path)
                        logger.info("Deleted corrupted cache at %s", cache_path)
                    except Exception as rm_err:
                        logger.warning("Failed to delete cache: %s", rm_err)
                logger.info("Retrying model download (attempt %d)", attempt + 1)
            else:
                raise RuntimeError(f"Failed to load model {MODEL_NAME} after {retries} attempts: {e}")

# Load model at startup
tokenizer, model = load_model()

@app.post("/generate")
async def generate(req: GenerateRequest):
    inputs = tokenizer(req.prompt, return_tensors="pt").to(DEVICE)
    try:
        output = model.generate(
            **inputs,
            max_new_tokens=req.max_tokens,
            do_sample=True,
            temperature=0.7,
            top_p=0.9,
        )
        text = tokenizer.decode(output[0], skip_special_tokens=True)
        generated = text[len(req.prompt):].strip()
        if not generated:
            raise HTTPException(status_code=500, detail="Model generated empty response")
        return {"generated_text": generated}
    except Exception as e:
        logger.exception("Generation error")
        raise HTTPException(status_code=500, detail=str(e))
