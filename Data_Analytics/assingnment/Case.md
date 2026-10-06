# Case 

# Que - 1
Write an SQL query to find the top 5 highest-rated restaurants in Koramangala that serve North Indian cuisine, using the Zomato Bangalore dataset.
```
SELECT
    name,
    cuisines,
    location,
    rate
FROM zomato
WHERE location LIKE '%Koramangala%'
  AND cuisines LIKE '%North Indian%'
  AND rate IS NOT NULL
  AND rate <> 'NEW'
  AND rate <> '-'
ORDER BY CAST(SUBSTRING_INDEX(rate, '/', 1) AS DECIMAL(3,1)) DESC
LIMIT 5;
```
![alt text](image-78.png)

# Que - 2
Using SQL, calculate the average cost for two people for each cuisine type and list the 3 most expensive cuisines to eat in Bangalore.
```
SELECT
    cuisines,
    ROUND(
        AVG(
            CAST(REPLACE(`approx_cost(for two people)`, ',', '') AS DECIMAL(10,2))
        ),
        2
    ) AS average_cost_for_two
FROM zomato
WHERE `approx_cost(for two people)` IS NOT NULL
  AND `approx_cost(for two people)` <> ''
GROUP BY cuisines
ORDER BY average_cost_for_two DESC
LIMIT 3;
```
![alt text](image-79.png)

# Que - 3
Find all restaurants that offer online delivery but have a rating below 3.0, and suggest a marketing strategy to improve their ratings based on your findings.
```
SELECT
    name,
    location,
    cuisines,
    rate,
    `approx_cost(for two people)` AS cost_for_two
FROM zomato
WHERE online_order = 'Yes'
  AND rate IS NOT NULL
  AND rate <> 'NEW'
  AND rate <> '-'
  AND CAST(SUBSTRING_INDEX(rate, '/', 1) AS DECIMAL(3,1)) < 3.0
ORDER BY CAST(SUBSTRING_INDEX(rate, '/', 1) AS DECIMAL(3,1)) ASC;
```
![alt text](image-80.png)

# Que - 4
Write an SQL query to segment restaurants into three market segments based on average cost for two: budget (below 400), mid-range (400-800), and premium (above 800). Count how many restaurants fall into each segment.
```
SELECT
    CASE
        WHEN CAST(REPLACE(`approx_cost(for two people)`, ',', '') AS DECIMAL(10,2)) < 400
            THEN 'Budget'
        WHEN CAST(REPLACE(`approx_cost(for two people)`, ',', '') AS DECIMAL(10,2)) BETWEEN 400 AND 800
            THEN 'Mid-range'
        ELSE 'Premium'
    END AS market_segment,
    COUNT(*) AS restaurant_count
FROM zomato
WHERE `approx_cost(for two people)` IS NOT NULL
  AND `approx_cost(for two people)` <> ''
GROUP BY market_segment
ORDER BY restaurant_count DESC;
```
![alt text](image-81.png)
# Que - 5

Use ChatGPT or Copilot to help you write an SQL query that lists the top 10 most popular restaurant chains (by number of outlets) in the dataset, then run and validate the query yourself
```
SELECT
    name AS restaurant_chain,
    COUNT(*) AS number_of_outlets
FROM zomato
WHERE name IS NOT NULL
  AND name <> ''
GROUP BY name
ORDER BY number_of_outlets DESC
LIMIT 10;
```
![alt text](image-82.png)