# 
1. Write a program to print the total length of list
list1= [1, 2, 3, 4, 5]
print("Total length of list is :", len(list1))

2. Write a program to print max and min value from list
list1 = [1, 2, 3, 4, 5]
print("Max value from list is : ", max(list1))
print("Min value from list is : ", min(list1))

3. write a program to find odd and even from list 
list1 = [1, 2, 3, 4, 5]
even_num = []
odd_num = []
for num in list1:
    if num % 2 == 0:
        even_num.append(num)
    else:
        odd_num.append(num)
print("Even numbers from list are : ", even_num)
print("Odd numbers from list are : ", odd_num)

4. write a program a manipulate a list : insert, append, reverse, short, sort in desc from list
list1 = [1, 2, 3, 4, 5]
value = int(input("Enter a value to insert in list: "))
list1.append(value)
print("List after appending value is :", list1)
list1.reverse()
print("List after reversing is :", list1)
list1.sort(reverse=True)
print("List after sorting in descending order is :", list1)

5. write a program to find avg from list elements
list1 = [1, 2, 3, 4, 5]
average = sum(list1) / len(list1)
print("Average of list elements is :", average)

6. Write a program to marge two list
list1 = [1, 2, 3]
list2 = [4, 5, 6]
merged_list = list1 + list2
print("Merged list is :", merged_list)

7. Write a program to find element greater then the avg from list
list1 = [1, 2, 3, 4, 5]
average = sum(list1) / len(list1)
greater_than_avg = [num for num in list1 if num > average]
print("Elements greater than average are :", greater_than_avg)

