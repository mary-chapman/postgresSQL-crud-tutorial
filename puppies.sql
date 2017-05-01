DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO pups (name, breed, age, sex)
  VALUES ('Ruff', 'Golden Retriever', 3, 'M');
INSERT INTO pups (name, breed, age, sex)
    VALUES ('Willow', 'Poodle', 2, 'F');
INSERT INTO pups (name, breed, age, sex)
    VALUES ('Bo', 'Lab', 5, 'M');
/*
psql -f puppies.sql

postgres -D /usr/local/var/postgres
*/
