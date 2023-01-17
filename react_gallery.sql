CREATE TABLE "images" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(80) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "likes" INTEGER
);

INSERT INTO "images"
  ("path", "description", "likes")
  VALUES
  ('images/IMG_5891.jpg', 'A tabby cat sitting in a sink, looking both shocked and confused. How did she get here? What is she doing? Impossible to know.', 0),
  ('images/IMG_5336.jpeg', 'A cat draped over the back of the couch, wearing a world-weary expression. She has seen so much.', 0),
  ('images/IMG_6285.jpg', 'A cat peeking out from behind a couch. She cannot tell time, but she is certain that dinner is well past due.', 0),
  ('images/IMG_5274.jpg', 'A cat looks out of the bathroom window and monitors the neighborhood. She is the local Karen.', 0),
  ('images/IMG_6177.jpg', 'A cat peeks up from the floor. She is hungry, her gaze ominous and threatening.', 0),
  ('images/IMG_6181.jpeg', 'A cat lays on the back of a couch cushion, having given up on life. Toys no longer bring her joy. Will dinner ever come? Doubtful.', 0),
  ('images/IMG_6186.jpeg', 'A cat lays on the back of a couch cushion. She silently judges, her displeasure evident.', 0),
  ('images/IMG_7273.jpeg', 'A cat sits squished against a couch cushion. Her resentment is palpable.', 0),
  ('images/IMG_7275.jpeg', 'A cat sits on a closet floor. She is a master of disguise. Here amongst the shoes, she watches and waits.', 0),
  ('images/IMG_7320.jpeg', 'Two cats lay on the couch. The tabby, Mischa, karate chops her sister. Her violence knows no bounds. She is merciless.', 0);