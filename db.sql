CREATE DATABASE calc;

CREATE TABLE History (
    id SERIAL PRIMARY KEY,
    Expression varchar(100) NOT NULL
);

INSERT INTO History VALUES (DEFAULT, '2 + 2');