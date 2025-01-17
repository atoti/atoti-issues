CREATE ROLE IF NOT EXISTS QUERIER COMMENT="Role to run queries"

-- https://docs.snowflake.com/en/sql-reference/sql/grant-privilege#examples
GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLE QUERIER;
GRANT USAGE ON DATABASE ATOTI_DQ TO ROLE QUERIER;
GRANT USAGE ON SCHEMA VAR TO ROLE QUERIER;
GRANT SELECT ON ALL TABLES IN SCHEMA ATOTI_DQ.VAR to ROLE QUERIER;
