-- CREATE database wellness; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname text,
    email text,
    user_key text
);


CREATE TABLE wellness (
    id SERIAL PRIMARY KEY,
    emotiontext text,
    emotiontransactionid text,
    emotionval text,
    timestamp timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    userkey text
);
