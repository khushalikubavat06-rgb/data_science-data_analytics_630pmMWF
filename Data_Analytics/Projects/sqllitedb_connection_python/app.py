#sqllite is a databse 
# sqlite is open source
# sqllite is defult module support in python
import sqlite3

# create a connection to the database file

conn = sqlite3.connect('app_db')
# print("Database created successfully")  # create a database file
# create a schema of tables 
cur = conn.cursor()
# create a table users
cur.execute(
    """
     create table if not exists users(
        uid integer primary key autoincrement,
        username text,
        password text,
        mobile text,
        gender text,
        hobbies text,
        pincode text,
        created_date text
        )
    """
)


# create a table country
cur.execute(
    """
     create table if not exists country(
        cid integer primary key autoincrement,
        cname text,
        created_date text
        )
    """
)

# create a table city
cur.execute(
    """
     create table if not exists city(
        ctid integer primary key autoincrement,
        ctname text,
        created_date text
        )
    """
)

# create a table state
cur.execute(
    """
     create table if not exists state(
        sid integer primary key autoincrement,
        sname text,
        created_date text
        )
    """
)

# create a normalization type of task based table of category | subcetegory | customers | color | size | product | cart | orders 
cur.execute(
    """
       create table if not exists category(
        catid integer primary key autoincrement,
        catname text,
        created_date text
        )
    """
)
cur.execute(
    """
       create table if not exists subcategory(
        subcatid integer  Primary key autoincrement,
        subcatname text,
        created_date text
        Foreign key (catid) references category(catid)
        )
    """
)
cur.execute(
    """
       create table if not exists customer(
        cuid integer Primary key autoincrement,
        cuname text,
        age integer,
        mobile text,
        address text,
        email text,
        Password text,
        created_date text
        )
    """
)
cur.execute(
    """
       create table if not exists color(
        colorid integer primary key autoincrement,
        colorname text,
        created_date text
        )
    """
)
cur.execute(
    """
       create table if not exists size(
        sizeid integer primary key autoincrement,
        sizename text,
        created_date text
        )
    """
)
cur.execute(
    """
       create table if not exists product(
        productid integer primary key autoincrement,
        productname text,
        price real,
        oldprice real,
        offerprice real,
        created_date text,
        foreign key (catid) references category(catid),
        foreign key (subcatid) references subcategory(subcatid),
        foreign key (colorid) references color(colorid),
        foreign key (sizeid) references size(sizeid)
        )
    """
)
cur.execute(
    """
       create table if not exists cart(
        cartid integer primary key autoincrement,
        cartname text,
        quantity integer,
        subtotal real,
        created_date text,
        foreign key (cuid) references customer(cuid),
        )
    """
)
cur.execute(
    """
       create table if not exists order(
        orderid integer primary key autoincrement,
        ordername text,
        quantity integer,
        ordercode text unique key,
        subtotal real,
        status text,
        created_date text,
        foreign key (cuid) references customer(cuid),
        )
    """
)

conn.commit()
conn.close()