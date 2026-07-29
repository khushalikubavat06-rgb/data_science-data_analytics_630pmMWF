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

 # SQL 

 1. 


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
 5. 
 6. 


 # How to connect database ?

 create database databasename;

 or

 create database db_app;

 # How to connect database ?


  ** Syntax **

 create database databasename;

 or

 create database db_app;
 


** Syntax **

craete table employe{
   empid int AUTO_INCREMENT primary key,
   name varchar(255),
   password varchar(255),
   gender varchar(255),
   hobby varchar(255),
   address text,
   phone bigInt
}


** alter(modify) **

1. Alter is used to add new column in a table 
2. Alter is used to modify or add or update new column in table 
3. Alter also create a unique key column.
4. Alter table add column | Modify column | update column in table 

** Syntax **

``

 alter table tablename add column datatype(size)

or

alter table employe add country varchar(255)

or

alter table employe add sate varchar(255)

or

alter table add photo blob after name;

or

alter table employe change phone mobile bigint;

or 

alter table employe add unique(`mobile`)

``