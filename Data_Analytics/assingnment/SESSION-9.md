# Session - 9

# Que - 1
Create two tables in your database: 'restaurants' (id, name, city) and 'dishes' (id, restaurant_id, dish_name, price). Insert at least 3 restaurants and 2-3 dishes for each restaurant.

```
CREATE TABLE restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100),


    
    city VARCHAR(50)
);

INSERT INTO app_restaurants (id, name, city) VALUES
(1, 'Swagat Restaurant', 'Ahmedabad'),
(2, 'Food Junction', 'Surat'),
(3, 'Spice Hub', 'Rajkot');

```
```
CREATE TABLE dishes (
    id INT PRIMARY KEY,
    restaurant_id INT,
    dish_name VARCHAR(100),
    price DECIMAL(10,2)
);

INSERT INTO dishes (id, restaurant_id, dish_name, price) VALUES
(1, 1, 'Paneer Tikka', 250.00),
(2, 1, 'Veg Biryani', 200.00),
(3, 2, 'Pizza', 350.00),
(4, 2, 'Pasta', 300.00),
(5, 3, 'Masala Dosa', 150.00),
(6, 3, 'Pav Bhaji', 180.00);

```
# Que - 2
Write an SQL INNER JOIN query to display each dish along with its restaurant name and city, similar to how Zomato shows dish details with the restaurant info.

```
SELECT 
    dishes.dish_name,
    dishes.price,
    restaurants.name AS restaurant_name,
    restaurants.city
FROM dishes
INNER JOIN restaurants
ON dishes.restaurant_id = restaurants.id;

```

# Que - 3
Write an SQL LEFT JOIN query to list all restaurants and their dishes, showing restaurants even if they currently have no dishes on the menu.

```
SELECT 
    restaurants.name AS restaurant_name,
    restaurants.city,
    dishes.dish_name,
    dishes.price
FROM restaurants
LEFT JOIN dishes
ON restaurants.id = dishes.restaurant_id;
```

# Que - 4
Write an SQL RIGHT JOIN query to display all dishes and their restaurant names, including any dishes that might not be linked to a restaurant (simulate a data error where a dish has a restaurant_id that doesn't match any restaurant)

```
INSERT INTO dishes (id, restaurant_id, dish_name, price) VALUES
(7, 99, 'Special Thali', 400.00);

SELECT 
    dishes.dish_name,
    dishes.price,
    restaurants.name AS restaurant_name,
    restaurants.city
FROM restaurants
RIGHT JOIN dishes
ON restaurants.id = dishes.restaurant_id;
```

# Que - 5
Given this scenario: You want to show a list of all playlists and the songs inside them, like Spotify. Explain which JOIN type (INNER, LEFT, or RIGHT) you would use to show all playlists, even if some are empty, and write the SQL query for it.

```
CREATE TABLE playlists (
    playlist_id INT PRIMARY KEY,
    playlist_name VARCHAR(100)
);

SELECT 
    playlists.playlist_name,
    playlist_songs.song_id
FROM playlists
LEFT JOIN playlist_songs
ON playlists.playlist_id = playlist_songs.playlist_id;
```