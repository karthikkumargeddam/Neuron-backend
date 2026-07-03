fetch("https://optimistic-desire-51e32c6013.strapiapp.com/api/auth/local/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "testuser_" + Date.now(),
    email: "testuser_" + Date.now() + "@example.com",
    password: "Password123!"
  })
}).then(res => res.json()).then(console.log).catch(console.error);
