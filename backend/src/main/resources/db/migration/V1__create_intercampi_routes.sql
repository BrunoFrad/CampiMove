create table routes(
    id SERIAL PRIMARY KEY,
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    schedule TIME NOT NULL UNIQUE
);