CREATE TABLE public.users (
  "_id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "username" varchar UNIQUE NOT NULL,
  "google_id" varchar UNIQUE NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.scores (
  "_id" serial PRIMARY KEY,
  "user_id" varchar UNIQUE NOT NULL,
  "score" varchar NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(_id)
) WITH (
  OIDS=FALSE
);