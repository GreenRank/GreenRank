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


INSERT INTO scores(googleId, score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating)
VALUES (110466235164956177628, 1000, 1000, 1000, 1000, 1000, 1000, 1000)
INSERT INTO scores(googleId, score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating)
VALUES (104839810786696328275, 2000, 2000, 2000, 2000, 2000, 2000, 2000)
INSERT INTO scores(googleId, score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating)
VALUES (107255365807708839204, 5000, 5000, 5000, 5000, 5000, 5000, 5000)
INSERT INTO scores(googleId, score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating)
VALUES (101352106495401777171, 9000, 9000, 9000, 9000, 9000, 9000, 9000)

raubern 110466235164956177628
walker 104839810786696328275
nitin 107255365807708839204
ian 101352106495401777171