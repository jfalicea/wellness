-- CREATE database wellness; 
CREATE TABLE wellness (
    id SERIAL PRIMARY KEY,
    text text,
    rid text,
    date text,
    val text,
    timestamp timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
