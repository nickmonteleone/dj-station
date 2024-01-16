\echo 'Delete and recreate dj db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE dj;
CREATE DATABASE dj;
\connect dj

\i dj-schema.sql
-- \i dj-seed.sql

\echo 'Delete and recreate dj_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE dj_test;
CREATE DATABASE dj_test;
\connect dj_test

\i dj-schema.sql
