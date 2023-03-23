-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
DATABASE 'fs-react-shopping'

CREATE TABLE shopping_list(
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80),
	"quantity" decimal,
	"unit" varchar (20)
);

INSERT INTO shopping_list ("name", "quantity", "unit")
VALUES ('apples', '5', 'bag'), ('bars', '8', 'box'), ('milk', '1', 'gallon');