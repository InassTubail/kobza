BEGIN;

DROP TABLE IF EXISTS users, products, orders, suggestions, notification CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone_number INTEGER NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL default 'user'
);
INSERT INTO users(name,phone_number,password,role)
VALUES('Hani',0597123456,'$2a$10$aYdb8VPiGwRGdJT2Qs8mN.fVuveprC9hnChFaHcHJeDDfNRVzXQsG','admin');

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    url VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR(250) NOT NULL

);
INSERT INTO products(name, url, price,description)
VALUES('CheeseSandwich' , '/image/1.jpg' ,4 , 'Cheese sandwich with olives and a little roasted and crispy sauce');
INSERT INTO products(name, url, price,description)
VALUES('HotdogSandwich' , '/image/2.jpg' , 4 , 'Hotdog sandwich with olives and a little roasted and crispy sauce');
INSERT INTO products(name, url, price,description)
VALUES('OrdinalCheeseSandwich' , '/image/3.jpg' , 5 , 'ordinal cheese sandwich with olives and a little roasted and crispy sauce');
INSERT INTO products(name, url, price,description)
VALUES('CheeseSandwich' , '/image/1.jpg' , 4 , 'Cheese sandwich with olives and a little roasted and crispy sauce');
INSERT INTO products(name, url, price,description)
VALUES('HotdogSandwich' , '/image/2.jpg' , 4 , 'Hotdog sandwich with olives and a little roasted and crispy sauce');
INSERT INTO products(name, url, price,description)
VALUES('OrdinalCheeseSandwich' , '/image/3.jpg' ,5 , 'ordinal cheese sandwich with olives and a little roasted and crispy sauce');

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  product_id INTEGER REFERENCES products (id),
  amount INTEGER DEFAULT 1,
  notes VARCHAR(250),
  data_time VARCHAR(250) NOT NULL,
  done BOOLEAN NOT NULL default false
);

CREATE TABLE notification (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  notes VARCHAR(250)
);

CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  suggestion VARCHAR(250) NOT NULL
);
COMMIT;
