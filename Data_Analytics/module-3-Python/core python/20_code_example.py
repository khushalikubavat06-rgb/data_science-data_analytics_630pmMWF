# 20 examples 
1. Addition of two numbers
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a+b
print("Addition of two numbers is :",c)

2. Subtraction of two numbers
a=int(input("Enter a values :")) 
b=int(input("Enter b values :"))
c = a-b
print("Subtraction of two numbers is :",c)

3. Multiplication of two numbers
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a*b
print("Multiplication of two numbers is :",c)

4. Division of two numbers
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a/b
print("Division of two numbers is :",c)

5. Modulus of two numbers
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a%b
print("Modulus of two numbers is :",c)

6. Floor division of two numbers
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a//b
print("Floor division of two numbers is :",c)

7. Exponentiation of two numbers
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a**b
print("Exponentiation of two numbers is :",c)

8. Swap two numbers without using third variable
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
# swap a numbers
a = a + b
b = a - b
a = a - b
print("After swapping:")
print("a values is :", a)

9. swap two number using third variable
a=int(input("Enter a values :"))
b=int(input("Enter b values :"))
c = a
a = b
b = c
print("After swapping:")
print("a values is :", a)
print("b values is :", b)

10. Area of rectangle
length = float(input("Enter length of rectangle: "))
width = float(input("Enter width of rectangle: "))
area = length * width
print("Area of rectangle is :", area)

11. Area of circle
radius = float(input("Enter radius of circle: "))
area = 3.14 * radius * radius
print("Area of circle is :", area)

12. Area of triangle
base = float(input("Enter base of triangle: "))
height = float(input("Enter height of triangle: "))
area = 0.5 * base * height
print("Area of triangle is :", area)

13. Perimeter of rectangle
length = float(input("Enter length of rectangle: "))
width = float(input("Enter width of rectangle: "))
perimeter = 2 * (length + width)
print("Perimeter of rectangle is :", perimeter)

14. Perimeter of square
side = float(input("Enter side of square: "))
perimeter = 4 * side
print("Perimeter of square is :", perimeter)

15. Perimeter of circle
radius = float(input("Enter radius of circle: "))
perimeter = 2 * 3.14 * radius
print("Perimeter of circle is :", perimeter)

16. Convert Celsius to Fahrenheit
celsius = float(input("Enter temperature in Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print("Temperature in Fahrenheit is :", fahrenheit)

17. Convert Fahrenheit to Celsius
fahrenheit = float(input("Enter temperature in Fahrenheit: "))
celsius = (fahrenheit - 32) * 5/9
print("Temperature in Celsius is :", celsius)

18. convert kilometers to miles
kilometers = float(input("Enter distance in kilometers: "))
miles = kilometers * 0.621371
print("Distance in miles is :", miles)

19. convert miles to kilometers
miles = float(input("Enter distance in miles: "))
kilometers = miles / 0.621371
print("Distance in kilometers is :", kilometers)

20. convert meters to feet
meters = float(input("Enter distance in meters: "))
feet = meters * 3.28084
print("Distance in feet is :", feet)