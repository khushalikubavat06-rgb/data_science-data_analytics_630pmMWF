# Solve all 20 tasks using Python functions. Write a separate function for each task and call it to display the output.

# 1. Addition Function: Write a function add(a, b) that takes two numbers and returns their sum.

# def add(a, b):
#     a=int(input("Enter the first number: "))
#     b=int(input("Enter the second number: "))
#     return a + b
# print("Sum =",add("a","b"))

# 2.Subtraction Function: Write a function subtract(a, b) that takes two numbers and returns their difference.

# def subtract(a, b):
#    a=int(input("Enter the first number: "))
#    b=int(input("Enter the second number: "))
#    return a - b
# print("Difference =", subtract("a","b"))

# 3.Multiplication Function: Write a function multiply(a, b) that takes two numbers and returns their product.

# def multiply(a, b):
#     a=int(input("Enter the first number: "))
#     b=int(input("Enter the second number: "))
#     return a * b
# print("multiplication =", multiply("a","b"))

# 4.Division Function: Wrte a function divide(a, b) that divides two numbers and handles division by zero.

# def divide(a, b):
#     a=int(input("Enter the first number: "))
#     b=int(input("Enter the second number: "))
#     if b == 0:
#         return "Error: Division by zero is not allowed."
#     return a / b
# print("Division =", divide("a","b"))

# 5.Even or Odd: Write a function check_even_odd(n) that checks whether a given number is even or odd.

# def even_odd(n):
#     n=int(input("Enter a number: "))
#     if n % 2 == 0:
#         return "Even"
#     else:
#         return "Odd"
# print("The number is", even_odd("n"))

# 6.Positive, Negative or Zero: Write a function check_number(n) that checks whether a number is positive, negative, or zero.
# def number(n):
#     n=int(input("Enter a number: "))
#     if n > 0:
#         return "Positive"
#     elif n < 0:
#         return "Negative"
#     else:
#         return "Zero"
# print("The number is", number("n"))

# 7.Square of a Number: Write a function square(n) that returns the square of a given number.
# def square(n):
#     n=int(input("Enter a number: "))
#     return n * n
# print("Square =", square("n"))

# 8.Cube of a Number: Write a function cube(n) that returns the cube of a given number.

# def cube(n):
#     n=int(input("Enter a number: "))
#     return n * n * n
# print("Cube =", cube("n"))

# 9.Find Maximum: Write a function find_max(a, b, c) that returns the largest among three numbers.
# def max(a, b, c):
#     if a > b and a > c:
#         return a
#     elif b > a and b > c:
#         return b
#     else:
#         return c

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))
# c = int(input("Enter third number: "))

# print("Maximum number =", max("a", "b", "c"))

# 10.Find Minimum: Write a function find_min(a, b, c) that returns the smallest among three numbers.
# def min(a, b, c):
#     if a < b and a < c:
#         return a
#     elif b < a and b < c:
#         return b
#     else:
#         return c

# a = int(input("Enter first number: "))
# b = int(input("Enter second number: "))
# c = int(input("Enter third number: "))

# print("Minimum number =", min("a", "b", "c"))
# 11.Factorial: Write a function factorial(n) that calculates the factorial of a given number.

# def factorial(n):
#     if n < 0:
#         return "Error: Factorial is not defined for negative numbers."
#     elif n == 0 or n == 1:
#         return 1
#     else:
#         result = 1
#         for i in range(2, n + 1):
#             result *= i
#         return result
# n=int(input("Enter a number: "))
# print("Factorial =", factorial("n"))

# 12.Prime Number: Write a function is_prime(n) that checks whether a given number is prime.

# def is_prime(n):
#     if n <= 1:
#         return "Not Prime"

#     for i in range(2, n):
#         if n % i == 0:
#             return "Not Prime"

#     return "Prime"

# n = int(input("Enter a number: "))
# print(is_prime(n))

# 13.Multiplication Table: Write a function table(n) that prints the multiplication table of a given number from 1 to 10.

# def table(n):
#     for i in range(1, 11):
#         print(n, "x", i, "=", n*i)

# n = int(input("Enter a number: "))
# table(n)

# 14.Sum of Natural Numbers: Write a function sum_natural(n) that returns the sum of natural numbers from 1 to n.

# def sum_natural(n):
#     total = 0
#     for i in range(1, n+1):
#         total = total + i
#     return total

# n = int(input("Enter a number: "))
# print("Sum =", sum_natural(n))

# 15.Reverse a String: Write a function reverse_string(s) that returns the reverse of a given string.

# def reverse_string(s):
#     return s[::-1]

# s = input("Enter a string: ")
# print("Reverse =", reverse_string(s))

# 16.Count Vowels: Write a function count_vowels(s) that counts the number of vowels in a given string.

# def count_vowels(s):
#     count = 0
#     for i in s:
#         if i in "aeiouAEIOU":
#             count = count + 1
#     return count

# s = input("Enter a string: ")
# print("Total vowels =", count_vowels(s))

# 17.Palindrome Check: Write a function is_palindrome(s) that checks whether a given string is a palindrome.

# def is_palindrome(s):
#     if s == s[::-1]:
#         return "Palindrome"
#     else:
#         return "Not Palindrome"

# s = input("Enter a string: ")
# print(is_palindrome(s))

# 18.Calculate Area of Rectangle: Write a function rectangle_area(length, width) that returns the area of a rectangle.

# def rectangle_area(length, width):
#     return length * width

# l = int(input("Enter length: "))
# w = int(input("Enter width: "))

# print("Area =", rectangle_area(l, w))

# 19. Celsius to Fahrenheit: Write a function celsius_to_fahrenheit(c) that converts Celsius temperature into Fahrenheit.

# def celsius_to_fahrenheit(c):
#     return (c * 9/5) + 32

# c = float(input("Enter Celsius: "))
# print("Fahrenheit =", celsius_to_fahrenheit(c))

# 20. Count Digits: Write a function count_digits(n) that counts the total number of digits in a given integer.
# def count_digits(n):
#     n = abs(n)
#     count = 0

#     if n == 0:
#         return 1

#     while n > 0:
#         count = count + 1
#         n = n // 10

#     return count

# n = int(input("Enter a number: "))
# print("Total digits =", count_digits(n))
