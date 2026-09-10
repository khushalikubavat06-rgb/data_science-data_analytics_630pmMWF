# Session - 10

# Que - 1
Create two tables: Influencers (id, name) and Collaborations (id, influencer1_id, influencer2_id, collab_date). Write a SQL FULL JOIN query to list all influencers and show their collaboration partner names if any, including influencers with no collaborations.

```
SELECT 
    i1.name AS influencer,
    i2.name AS collaboration_partner,
    c.collab_date
FROM Influencers i1
LEFT JOIN Collaborations c
    ON i1.id = c.influencer1_id
LEFT JOIN Influencers i2
    ON c.influencer2_id = i2.id

UNION

SELECT 
    i2.name AS influencer,
    i1.name AS collaboration_partner,
    c.collab_date
FROM Influencers i2
RIGHT JOIN Collaborations c
    ON i2.id = c.influencer2_id
LEFT JOIN Influencers i1
    ON c.influencer1_id = i1.id;

```

# Que - 2
Using a SELF JOIN, write a query on a table called Playlists (id, user_id, playlist_name, parent_playlist_id) to display each playlist alongside its parent playlist name, similar to how Spotify shows nested playlists

```
SELECT 
    p.playlist_name AS playlist,
    parent.playlist_name AS parent_playlist
FROM Playlists p
LEFT JOIN Playlists parent
    ON p.parent_playlist_id = parent.id;

```

# Que - 3
Given three tables: Users (id, username), Orders (id, user_id, order_date), and Payments (id, order_id, amount), write a SQL query using multiple JOINs to display each username, their order date, and payment amount, showing all users even if they have no orders or payments.

```
SELECT 
    u.username,
    o.order_date,
    p.amount AS payment_amount
FROM Users u
LEFT JOIN Orders o
    ON u.id = o.user_id
LEFT JOIN Payments p
    ON o.id = p.order_id;

```

# Que - 4
You notice that your JOIN query between Zomato's Restaurants and Reviews tables is returning duplicate rows for some restaurants. Modify your query to eliminate duplicates and explain in one line why the duplicates were happening.
```
SELECT r.name, r.city
FROM Restaurants r
JOIN Reviews rv
    ON r.id = rv.restaurant_id;


SELECT DISTINCT
    r.name,
    r.city
FROM Restaurants r
JOIN Reviews rv
    ON r.id = rv.restaurant_id;

```

# Que - 5
Write two different JOIN queries on a Products and Categories table (like Flipkart) to list all products with their category names, but use different join conditions in each. Briefly explain which join condition is more efficient and why.

1st join
```
SELECT 
    p.name AS product_name,
    c.category_name
FROM Products p
JOIN Categories c
    ON p.category_id = c.id;

2nd join

```
SELECT 
    p.name AS product_name,
    c.category_name
FROM Products p
JOIN Categories c
    ON p.category_name = c.category_name;

```