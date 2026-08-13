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

 ## Drop

 1. drop is used to delete or drop a database or data structures
 2. drop is delete structure of database and table 
 3. after drop we never rollback

 *Syntax*
 ``
 drop database databasename
or 
drop database db_app;

drop table tablename
or
drop table employe
or
drop table users

```
 ## Truncate :

1. truncate is used to delete or remove all data from the table
2. truncate is used to empty all data from table
3. after truncate we never rollback data

*Syntax*
``
tuncate table tablename
or
truncate table employe
``

## Rename

 1. Rename is used to change any table name

 *Syntax*

 ``

## revised...

*Create a table tble_reviews with following column name *

tble_employe
rid
name
email
phone
rating
comment

## DML : Data manipulation Language 

1. DML is used to manipulate data in table 
2. DML is used to insert | delete | Update 
3. DML used for manipulating language 

* Queary used for DML *
1. Insert
2. Update
3. Delete

## How to insert 




## How to delete data 

 1. all data delete from table

 ```

 delete from tablename 
 or
 delete from tble_employe

 2. delete one row 





 6. delete data or row using limit
 ```
 delete from tbl_country where cid > 0 limit 4 ;

 ```

 ## Upadte a data or rows
 
 1. 

 ## DQL 
 1. data query language
 2. DQL is used to select data or fetch data

 ## DQL Query

 1. Select

 ** Fetach data or select data **
 - Select all data from table 

 ```
 - Select particular ulter data from table 

 ```
 select * from tbl_employe where emid in (5,6,9);
 
 