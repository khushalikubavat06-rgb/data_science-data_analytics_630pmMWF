# 1.What is a List in Python?

# A list in Python is a data structure used to store multiple values in a single variable.
# Instead of creating different variables for every value, we can store all values together in one list.
# Each value in a list is called an item, and each item can be of any data type, including numbers, strings, and even other lists.
# **Example:**
# fruits = ["Apple", "Banana", "Mango", "Orange"]
# print(fruits)

# Explanation:
# - fruits is the name of the list.
# -Apple, Banana, Mango, and Orange are list elements.
# -Each value is separated by a comma.
# -Square brackets [] are used to create a list.

# 2. Features of a List

# Python lists have the following features:

# Ordered: List elements maintain their insertion order.
# Mutable: We can change, add, or remove elements.
# Allows Duplicates: A list can contain the same value multiple times.
# Different Data Types: A list can store integers, strings, floats, and Boolean values together.
# Indexed: Every element has an index number starting from 0.
# Dynamic: We can increase or decrease the size of a list.
# **Example:**
# my_list = [10, "Hello", 20.5, True, 10]
# print(my_list)

# 3. List Operations in Python

# 1. Creating a List

# Creating a list means storing multiple elements inside square brackets [].
# Syntax:
# list_name = [element1, element2, element3]
# Example:
# numbers = [10, 20, 30, 40, 50]
# print(numbers)

# 2. Accessing List Elements

# We can access individual elements from a list using their index numbers.
# Indexing starts from 0.

# Example:
# fruits = ["Apple", "Banana", "Mango", "Orange"]
# print(fruits[0])
# print(fruits[1])
# print(fruits[2])

# 3. Negative Indexing

# Negative indexing allows us to access list elements from the end of the list.
# The last element has index -1.

# Example:
# fruits = ["Apple", "Banana", "Mango", "Orange"]
# print(fruits[-1])
# print(fruits[-2])

# 4. Slicing a List

# Slicing means accessing a particular range of elements from a list.
# It returns a new list without changing the original list.

# Syntax:
# list_name[start:end]

# Explanation:
# start = Starting index.
# end = Ending index (not included).
# Example:
# numbers = [10, 20, 30, 40, 50]
# print(numbers[1:4])

# 5. Changing List Elements

# A list is mutable, which means we can change its elements after creating it.

# Example:
# fruits = ["Apple", "Banana", "Mango"]
# fruits[1] = "Orange"
# print(fruits)

# 4. Adding Elements to a List

# Python provides three important methods to add elements.

# 1. append()

# The append() method adds one element at the end of the list.

# Syntax:
# list_name.append(value)

# Example:
# numbers = [10, 20, 30]
# numbers.append(40)
# print(numbers)

# 2. insert()

# The insert() method adds an element at a specific index position.

# Syntax:
# list_name.insert(index, value)

# Example:
# numbers = [10, 20, 30]
# numbers.insert(1, 15)
# print(numbers)

# 3. extend()

# The extend() method adds multiple elements from another iterable, such as a list, to the end of the existing list.

# Example:
# numbers = [10, 20, 30]
# numbers.extend([40, 50, 60])
# print(numbers)

# append()

# Adds one element at the end

# insert()

# Adds an element at a specific position

# extend()

# Adds multiple elements

# 5. Removing Elements from a List

# Python provides different methods to remove elements.

# 1. remove()

# The remove() method removes the first matching value from the list.

# Example
# numbers = [10, 20, 30, 40]
# numbers.remove(20)
# print(numbers)

# 2. pop()

# The pop() method removes an element using its index and returns the removed element.
# If we don't provide an index, it removes the last element.

# Example:
# numbers = [10, 20, 30, 40]
# numbers.pop()
# print(numbers)
# Example with Index:
# numbers = [10, 20, 30, 40]
# numbers.pop(1)
# print(numbers)

# 3. del Keyword

# The del keyword deletes an element or a range of elements using their index.

# Example:
# numbers = [10, 20, 30, 40]
# del numbers[1]
# print(numbers)

# 4. clear()

# The clear() method removes all elements from the list but keeps the list variable.

# Example:
# numbers = [10, 20, 30, 40]
# numbers.clear()
# print(numbers)

# remove()

# Removes a specific value

# pop()

# Removes an element by index

# del

# Deletes an element or range

# clear()

# Removes all elements

# 6. Finding the Length of a List

# The len() function returns the total number of elements present in a list.

# Example:
# numbers = [10, 20, 30, 40, 50]
# print(len(numbers))

# 7. Counting Elements in a List

# The count() method counts how many times a particular value appears in a list.

# Example:
# numbers = [10, 20, 10, 30, 10, 40]
# print(numbers.count(10))

# 8. Finding the Index of an Element

# The index() method returns the index position of the first occurrence of a particular element.

# Example:
# fruits = ["Apple", "Banana", "Mango", "Orange"]
# print(fruits.index("Mango"))

# 9. Sorting a List

# The sort() method arranges the list elements in ascending or descending order.

# Ascending Order:
# numbers = [50, 10, 40, 20, 30]
# numbers.sort()
# print(numbers)

# Descending Order:
# numbers = [50, 10, 40, 20, 30]
# numbers.sort(reverse=True)
# print(numbers)

# 10. Reversing a List

# The reverse() method reverses the original order of the list elements.

# Example:
# numbers = [10, 20, 30, 40, 50]
# numbers.reverse()
# print(numbers)

# 11. Copying a List

# The copy() method creates a shallow copy of an existing list.
# It creates a separate list containing the same elements.

# Example:
# numbers = [10, 20, 30, 40]
# new_numbers = numbers.copy()
# print(new_numbers)

# 12. Joining Two Lists

# We can join two lists using the + operator. It creates a new list containing elements from both lists.

# Example
# list1 = [10, 20, 30]
# list2 = [40, 50, 60]
# result = list1 + list2
# print(result)

# 13. Checking an Element in a List

# The in operator checks whether a particular element exists in a list. It returns True or False.

# Example:
# fruits = ["Apple", "Banana", "Mango"]
# print("Apple" in fruits)
# print("Orange" in fruits)

# 14. List Repetition

# The * operator repeats the elements of a list a specified number of times.

# Example:
# numbers = [10, 20]
# result = numbers * 3
# print(result)

# 15. Nested Lists

# A nested list is a list inside another list. It is used to store data in rows and columns.

# Example:
# students = [
#     ["Rahul", 20],
#     ["Amit", 21],
#     ["Priya", 19]
# ]
# print(students)
# print(students[0])
# print(students[0][0])

# append()

# Adds an element at the end

# insert()

# Adds an element at a specific position

# extend()

# Adds multiple elements

# remove()

# Removes a specific value

# pop()

# Removes an element by index

# clear()

# Removes all elements

# index()

# Returns the index of an element

# count()

# Counts occurrences of an element

# sort()

# Sorts the list

# reverse()

# Reverses the list

# copy()


#Accessing List
list1=[12,30,5,87,23,65,6]
list2=[1.2,31.5,8.7,9.7]
list3=["Virat","Rohit","Gill","Jasprit"]
print(list1[3])#print after 3 value number 
print(list3[2:5])#print brtween 2 to 5
print(list1[3:])#after 3
print(list1[:3])#before 3 
print(list1[-3])#from reverse(last)order

#reverse 
list1.reverse()
print(list1)
