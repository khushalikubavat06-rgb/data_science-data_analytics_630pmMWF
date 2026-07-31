# What is  SQL and database ?



# what is SQL ?

- A SQL Stands for standerd queary language 
- A SQL is used to create a database and table structured 
- A SQL is used to create a structured data 
- A SQL is case-insenstve language 
- insenstive language example: INSERT | insert | Insert 

# What is Data ?

- A database is used to stored an information i.e called database
- List out Five types of database

 1. Oracle
 2. Mysql
 3. Sqllight
 4. Sql server
 5. MongoDB


 # how to open Xampp

 xampp=>control panel=>start

localhost/phpmyadmin

![alt text](image.png)

![alt text](image-1.png)


# how to open mySQLworkbench8.0

https://dev.mysql.com/downloads/workbench/
open mysqlworkbench
create an database instance

![alt text](image-2-1.png)

# what is difference b/w SQL and MYSQL

 # SQL 

 1. sql is an structured query language
 2. sql is case insenstive language
 3. sql is create database and tables structured

# MySQL

 1. mysql is an database 
 2. mysql is case sensitive language 
 3. sql is create database and table structured

 # What is DBMS ?
 1. DBMS stands for database management system
 2. DBMS is used to manage database

    1. Oracle
    2. Mysql
    3. Sqllight
    4. Sql server
    5. MongoDB

 # What is RDBMS?
  1. RDBMS stands for relational database management system
  2. 

# Types of SQL command

 - DDL (Data Deffination Language)
 - DML (Data Manipulation Lnguage)
 - DQL (Data Queary Lnaguage)
 - TCL (Tansactional Control Language)



 # DDL (data defination language)

 - A DDL is used to create database and table defination
 - A DDL is used to create database name and table name and its structure
 - A DDL queary are ...

 1. Create
 2. alter
 3. rename
 4. change
 5. drop
 6. truncate


## how to create database ? 

**syntax**

```
create database databasename;
or
create database db_app; 
``` 

## how to create table  ?

**table datatype and size structures**

# SQL Table Structure

| Column Name | Data Type | Size | Description |
|-------------|-----------|------|-------------|
| ID | INT | 11 | Primary Key (auto_increment) |
| FirstName | VARCHAR | 0-255 | Employee first name |
| LastName | VARCHAR | 0-255 | Employee last name |
| Email | VARCHAR | 255 | Email address |
| Phone | VARCHAR | 20 | Contact number |
| DateOfBirth | DATE | - | Birth date |
| Salary | DECIMAL | 10,2 | Employee salary |
| IsActive | BIT | 1 | Active status |
| CreatedDate | DATETIME | - | Record creation date |
| UpdatedDate | DATETIME | - | Last update date |
| address     | text     |  for more text   |
| multiple choice | enum |  for multiple choices |
| mobile | bigInt | 20 | for bigInt   |
| photo  | blob   | bigsize           |


**syntax**

```
create table tablename(
id int auto_increment primary key,
name varchar(255),
password varchar(255),
mobile bigInt,
address text,
appointmentdate_time datetime
);
or

create table users(
id int auto_increment primary key,
name varchar(255),
password varchar(255),
mobile bigInt,
address text,
appointmentdate_time datetime
);

or

create table employee(
empid int AUTO_INCREMENT primary key,
name varchar(255),
password varchar(255),
gender varchar(255),
hobby varchar(255),
address text,
phone bigint    

)
``` 

## alter

1. alter is used to add new column in a table
2. alter is used to modify or add or update new column in tables
3. alter also create a unique key in column.
4. alter tables add column | modify column | update column in tables

**syntax**

```
alter table tablename add columnname datatype(size)
or
alter table employee add country varchar(255)
or
alter table employee add state varchar(255)
or
alter table employee add photo blob after name;
or
alter table employee change phone mobile bigint;
or
alter table employee add unique(`mobile`)

```

 