# students based database

# Que 1
create a database named "school".
```
create database school

```
# Que 2
create a table named "students" with the following columns: id (primary key), name, age, grade, and country_id (foreign key referencing the country table).
```
create table country(
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255)
)

create table students(
    id int PRIMARY key,
    name varchar(255),
    age int,
    grade ENUM ('a','b','c','d'),
    country_id int, 
    FOREIGN KEY(country_id)REFERENCES country(id)
);
```
# Que 3
insert at least 5 records into the students table.
```
insert into students(id,name,age,grade) values(1,'khushi',18,'a'),(2,'riya',17,'b'),(3,'priya',20,'c'),(4,'vaidehi',20,'a'),(5,'noori',20,'a');
```
# Que 4
create a table named "country" with the following columns: country_id (primary key) and country_name.

```
create table country(
    country_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255)
)
```
# Que 5
insert at least 3 records into the country table.

```
insert into country(name) VALUES ('India'),('Canada'),('Japan')

```
# Que 6
write a query to select all students along with their country names.

```
SELECT s.id,s.name,s.age,s.grade,c.name FROM students s INNER JOIN country c on s.id=c.id;

```
# Que 7
write a query to find the average age of students in each grade.

```
SELECT avg(age),grade as average_grade from students GROUP by grade ;
```
# Que 8
write a query to find the total number of students in each country.
```
SELECT COUNT(name),country_id FROM students GROUP BY country_id;

```
# Que 9
write a query to find the student with the highest grade.
```
SELECT name,grade FROM students order by grade ASC LIMIT 3;

```
# Que 10
write a query to update the grade of a student with a specific id.
```
UPDATE students SET grade = 'b' WHERE id = 2;

```
# Que 11
write a query to delete a student with a specific id.
```
delete from students where id = 1;
```
## add to cart based database

# Que 1
create a database named "ecommerce_app"
```
Create database ecommerce_app;
```
# Que 2 
create a table named "products" with the following columns:
product_id (primary key), product_name, price, and stock.
```
create table products(
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    price int,
    stock bigint
)

```
# Que 3
insert at least 5 records into the products table.
```
insert into products(name,price,stock) VALUES('lipstick',199,500),('eyeliner',200,400),('kajal',199,200),('facecream',300,500),('compack',200,300); 
```
# Que 4
create a table named "customers" with the following columns:
customer_id (primary key), customer_name, email, and country_id (foreign key referencing the country table).
```
create table customers(
    customers_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    country_id int,
    FOREIGN KEY (customers_id) REFERENCES country(id)
    )
```
# Que 5
insert at least 3 records into the customers table.
```
insert into customers(name,email) VALUES ('khushali','khushali@gmail.com'),('vaidehi','vaidehi@gmail.com'),('noori','noori@gmail.com');
```
# Que 6
create a table named "orders" with the following columns:
order_id (primary key), customer_id (foreign key referencing the customers table), product_id (foreign key referencing the products table), quantity, and order_date.

```
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

```

# Que 7
insert at least 5 records into the orders table.
```
INSERT INTO orders(order_id, customer_id, product_id, quantity, order_date)VALUES(4, 1, 1, 2, '2026-09-20'),(5, 2, 2, 1, '2026-09-21'),
(6, 3, 3, 4, '2026-09-22');

```
# Que 8
write a query to select all orders along with customer names and product names.
```

```
# Que 9
write a query to find the total revenue generated from all orders.
# Que 10
write a query to find the most popular product based on the quantity ordered.
# Que 11
write a query to update the stock of a product after an order is placed.
# Que 12
write a query to delete an order with a specific order_id.