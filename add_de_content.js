const { createStrapi } = require('@strapi/strapi');

const DE_CONTENT = `# Complete Data Engineering Roadmap (End-to-End)

[Data Engineering](/definitions/data-engineering) is the discipline of designing, building, and maintaining systems that collect, store, process, and deliver data for analytics, reporting, machine learning, and business applications.

---

# 1. What is Data Engineering?

A Data Engineer builds data pipelines that move data from source systems to data consumers.

### Responsibilities

* [Data ingestion](/definitions/data-ingestion)
* Data transformation
* Data storage
* [Data quality](/definitions/data-quality)
* [Data security](/definitions/data-security)
* [Data governance](/definitions/data-governance)
* Data pipeline monitoring
* [Data warehouse](/definitions/data-warehouse) management

### Typical Flow

\`\`\`text
Applications
     ↓
Databases
     ↓
Data Ingestion
     ↓
Data Lake
     ↓
Data Processing
     ↓
Data Warehouse
     ↓
BI / Analytics / ML
\`\`\`

---

# 2. Data Engineering Architecture

\`\`\`text
Source Systems
      ↓
Ingestion Layer
      ↓
Data Lake
      ↓
Processing Layer
      ↓
Data Warehouse
      ↓
Analytics Layer
\`\`\`

---

# 3. Data Sources

## Structured Data

Stored in rows and columns.

Examples:

* MySQL
* PostgreSQL
* Oracle
* SQL Server

### Example

| EmpID | Name | Salary |
| ----- | ---- | ------ |
| 101   | John | 50000  |

---

## Semi-Structured Data

Examples:

* JSON
* XML
* Avro

\`\`\`json
{
 "id":101,
 "name":"John"
}
\`\`\`

---

## Unstructured Data

Examples:

* Images
* Videos
* PDFs
* Emails

---

# 4. Databases

## Relational Databases (RDBMS)

Examples:

* MySQL
* PostgreSQL
* Oracle Database

Concepts:

* Tables
* Rows
* Columns
* Primary Keys
* Foreign Keys
* Indexes

---

## NoSQL Databases

### Document Database

Examples:

* MongoDB

### Key-Value

Examples:

* Redis

### Column Family

Examples:

* Apache Cassandra

### Graph Database

Examples:

* Neo4j

---

# 5. SQL (Most Important)

## DDL

\`\`\`sql
CREATE TABLE employees(
 id INT,
 name VARCHAR(100)
);
\`\`\`

Commands:

* CREATE
* ALTER
* DROP
* TRUNCATE

---

## DML

\`\`\`sql
INSERT
UPDATE
DELETE
\`\`\`

---

## DQL

\`\`\`sql
SELECT
\`\`\`

---

## Joins

### Inner Join

\`\`\`sql
SELECT *
FROM A
INNER JOIN B
ON A.id=B.id;
\`\`\`

### Left Join

### Right Join

### Full Join

### Self Join

### Cross Join

---

## Window Functions

\`\`\`sql
ROW_NUMBER()

RANK()

DENSE_RANK()

LEAD()

LAG()
\`\`\`

Example:

\`\`\`sql
ROW_NUMBER() OVER(
PARTITION BY dept
ORDER BY salary DESC
)
\`\`\`

---

# 6. Data Warehousing

A centralized repository for analytics.

## Characteristics

* Subject-oriented
* Integrated
* Non-volatile
* Time-variant

---

## Popular Data Warehouses

* Snowflake
* Amazon Redshift
* Google BigQuery
* Azure Synapse Analytics

---

# 7. Data Warehouse Modeling

## [Fact Tables](/definitions/fact-tables)

Contain measurements.

\`\`\`text
Sales Fact
-----------
SaleID
ProductID
CustomerID
Amount
\`\`\`

---

## [Dimension Tables](/definitions/dimension-tables)

Contain descriptive information.

\`\`\`text
Customer Dimension
-------------------
CustomerID
Name
Location
\`\`\`

---

## [Star Schema](/definitions/star-schema)

\`\`\`text
      Customer
          |
Product -- Fact -- Time
          |
      Location
\`\`\`

---

## [Snowflake Schema](/definitions/snowflake-schema)

Normalized dimensions.

---

# 8. ETL and ELT

## [ETL](/definitions/etl)

Extract → Transform → Load

\`\`\`text
Source
  ↓
Transform
  ↓
Warehouse
\`\`\`

---

## [ELT](/definitions/elt)

Extract → Load → Transform

\`\`\`text
Source
  ↓
Warehouse
  ↓
Transform
\`\`\`

Common in cloud platforms.

---

# 9. [Data Lakes](/definitions/data-lake)

Stores raw data.

Popular:

* Amazon S3
* Azure Data Lake Storage
* Google Cloud Storage

---

# 10. [Data Lakehouse](/definitions/data-lakehouse)

Combines Data Lake + Warehouse.

Popular Technologies:

* Delta Lake
* Apache Iceberg
* Apache Hudi

---

# 11. Big Data Fundamentals

5 V's

### Volume

Huge data.

### Velocity

Fast data generation.

### Variety

Different formats.

### Veracity

Data quality.

### Value

Business value.

---

# 12. Hadoop Ecosystem

![Image](https://images.openai.com/static-rsc-4/YQP_POyeAN8Fnt-mrgn-4mh5V1QBZ6gKTp85lUGuCcYMhQXdHvZF-15Rx5POE9--woZ4XnvWfcX-v5_6gRGWXPRPocgLCHRj63owpbjjBQXBJWHfdU3DTCi-DVvC6emG5a073eV_sW8y4E8-RRmzYplZgaHJC7z3Urfdp6seXQpcqRQfc32OechQpEnPALOO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/tpK5hwi6bli97YgHa-ayhXZvPFhUtOaz-kS5xHtorzsFE5_xK-GH2tkzyFNwgYSQNfKHwPkLI0ot-HHA4FLO5H97djg_7PZwVGaSxK6nuLBxbWWheNzB1dhIJ4BBYtqYGODaAH-OcHYF23zb56lcIdTQfL_grrC2h4PrEfOHCli7zEP49GZ52IEReA13gQu6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Dq8ApaR9yXm75AiCKePnmbtwiq-BMP_teoumR6e4l2qoKdIIrsjWqVHGiarYBK0Ii3ZzsPUeutQZFssFdW5If5CSnTNjmIUmspea_8w2UUGeWhYbXXsRkP3QHqqXJ_mS8v3H2IyXU_vEQzPftGqbiJobdYTiQtPGCIIT19e20ednF2tLAzWXRJRe-kgfPTHm?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/WL7IUsNUc9tEvgS6xdGXNp-11K4CBJOdR24pclXZ9Ry3FpJvrfm6gSPeE5NmPNnJtku9aw9gHvGADpe_d331gr48pQTielxfUqDgxw_dozr1uo0pGH6BrcrcqNQ_u4jSmhIlU6iETaN-Z8ss2ph8-g0s6mqCzmMxqn0lf6Es4RlzGZQQPa6w-Gl9VPxCP2kX?purpose=fullsize)

Components:

### [HDFS](/definitions/hdfs)

Storage system.

### [MapReduce](/definitions/mapreduce)

Processing framework.

### [YARN](/definitions/yarn)

Resource management.

### [Hive](/definitions/hive)

SQL on Hadoop.

### [Pig](/definitions/pig)

Scripting.

### [Sqoop](/definitions/sqoop)

RDBMS transfer.

### [Flume](/definitions/flume)

Log ingestion.

---

# 13. [Apache Spark](/definitions/apache-spark)

Most important Big Data engine.

Features:

* In-memory processing
* Fast
* Scalable

Modules:

### Spark Core

### Spark SQL

### Spark Streaming

### MLlib

### GraphX

---

## Spark Transformations

\`\`\`python
map()
filter()
flatMap()
\`\`\`

---

## Actions

\`\`\`python
count()
collect()
save()
\`\`\`

---

# 14. [Batch Processing](/definitions/batch-processing)

Processes large datasets periodically.

Examples:

* Daily sales reports
* Monthly billing

Tools:

* Apache Spark
* Apache Hadoop

---

# 15. [Stream Processing](/definitions/stream-processing)

Real-time processing.

Examples:

* Stock prices
* Fraud detection
* IoT

Tools:

* Apache Kafka
* Apache Flink
* Spark Structured Streaming

---

# 16. [Apache Kafka](/definitions/apache-kafka)

\`\`\`text
Producer
   ↓
 Topic
   ↓
Consumer
\`\`\`

Concepts:

* Topics
* Partitions
* Brokers
* Replication
* Offsets
* Consumer Groups

---

# 17. [Data Pipeline Orchestration](/definitions/data-pipeline-orchestration)

Scheduling workflows.

Tools:

* Apache Airflow
* Prefect
* Dagster

---

# 18. Cloud Data Engineering

## AWS

Services:

* S3
* Glue
* Redshift
* EMR
* Athena

---

## Azure

Services:

* Data Factory
* Synapse
* Data Lake
* Databricks

---

## Google Cloud

Services:

* BigQuery
* Dataflow
* Pub/Sub
* Dataproc

---

# 19. [Databricks](/definitions/databricks)

Popular Lakehouse platform.

Features:

* Spark-based
* Delta Lake
* Notebooks
* ML support

Architecture:

\`\`\`text
Storage
   ↓
Delta Lake
   ↓
Databricks
   ↓
Analytics
\`\`\`

---

# 20. [Snowflake](/definitions/snowflake)

Architecture:

\`\`\`text
Storage Layer
      ↓
Compute Layer
      ↓
Cloud Services
\`\`\`

Concepts:

* Virtual Warehouses
* Micro-partitions
* Time Travel
* Fail-safe
* Cloning
* Streams
* Tasks
* Snowpipe
* Data Sharing

---

# 21. [Data Quality](/definitions/data-quality)

Checks:

* Completeness
* Accuracy
* Consistency
* Uniqueness
* Validity

Tools:

* Great Expectations
* Soda

---

# 22. [Data Governance](/definitions/data-governance)

Ensures data is managed properly.

Concepts:

* Data Ownership
* Data Stewardship
* Metadata
* Lineage
* Compliance

---

# 23. [Data Security](/definitions/data-security)

## Encryption

At Rest

In Transit

---

## Access Control

RBAC

ABAC

---

## Compliance

* GDPR
* HIPAA
* PCI DSS

---

# 24. Data Modeling

### Conceptual Model

Business view

### Logical Model

Relationships

### Physical Model

Implementation

---

# 25. [Data Catalog](/definitions/data-catalog)

Stores metadata.

Examples:

* Apache Atlas
* Alation
* Collibra

---

# 26. Monitoring

Metrics:

* Pipeline failures
* Latency
* Throughput
* Resource usage

Tools:

* Prometheus
* Grafana

---

# 27. Machine Learning Data Engineering

Pipeline:

\`\`\`text
Data Collection
      ↓
Cleaning
      ↓
Feature Engineering
      ↓
Training
      ↓
Serving
\`\`\`

---

# 28. Data Engineer Interview Topics

### SQL

* Joins
* Window Functions
* CTEs
* Optimization

### Python

* Pandas
* NumPy
* OOP

### Spark

* RDD
* DataFrame
* Catalyst Optimizer

### Snowflake

* Streams
* Tasks
* Warehouses

### Kafka

* Partitions
* Offsets

### Airflow

* DAGs
* Operators

---

# Modern Data Engineering Stack (2026)

\`\`\`text
Sources
   ↓
Kafka / CDC
   ↓
S3 / ADLS
   ↓
Spark / Databricks
   ↓
Delta Lake / Iceberg
   ↓
Snowflake / BigQuery
   ↓
Power BI / Tableau
   ↓
Business Users
\`\`\`

## Recommended Learning Order

1. SQL (Advanced)
2. Python
3. Databases
4. Data Warehousing
5. ETL/ELT
6. Snowflake
7. Apache Spark
8. Databricks
9. Kafka
10. Airflow
11. Cloud (AWS/Azure/GCP)
12. Data Modeling
13. Data Governance
14. Lakehouse Architecture
15. Real-Time Streaming

Mastering these topics will cover roughly 90–95% of what is expected from a modern Data Engineer in companies ranging from startups to large enterprises.
`;

createStrapi().load().then(async (strapi) => {
  console.log("Strapi loaded successfully. Updating Data Engineering course...");
  try {
    const existing = await strapi.entityService.findMany('api::course.course', {
      filters: { uuid: 'data-engineering-mastery' }
    });

    const newModule = {
      type: 'article',
      title: 'Complete Data Engineering Roadmap',
      explanation: DE_CONTENT
    };

    if (existing && existing.length > 0) {
      let course = existing[0];
      let modules = course.modules || [];
      // Set the 0th index to the new module
      modules[0] = newModule;

      await strapi.entityService.update('api::course.course', course.id, {
        data: {
          modules: modules
        }
      });
      console.log("✅ Updated Data Engineering course module 0 content.");
    } else {
      await strapi.entityService.create('api::course.course', {
        data: {
          title: 'Data Engineering Mastery',
          uuid: 'data-engineering-mastery',
          level: 'B.Tech',
          description: 'A complete roadmap to mastering Data Engineering.',
          modules: [newModule],
          publishedAt: new Date()
        }
      });
      console.log("✅ Created Data Engineering course and added module 0.");
    }
  } catch (err) {
    console.error("❌ Error updating course:", err.message);
  }
  process.exit(0);
}).catch(err => {
  console.error("Failed to load strapi", err);
  process.exit(1);
});
