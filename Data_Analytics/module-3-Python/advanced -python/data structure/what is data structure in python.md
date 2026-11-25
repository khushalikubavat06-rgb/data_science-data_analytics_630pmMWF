
# Data Structures in Python

## 1. What is Data Structure?

A **Data Structure** is a way of organizing, storing, and managing data in a computer so that data can be accessed, modified, and processed efficiently.

In simple words, a data structure helps us store and arrange data in an organized way.

### Example: (Advantages of data structure)
- Storing student names.
- Managing student marks.
- Storing employee details.
- Managing customer information.

---

## 2. Types of Data Structures

Data Structures are mainly divided into two categories:

1. Primitive Data Structures
2. Non-Primitive Data Structures

### A. Primitive Data Structures

Primitive data structures are the basic data types used to store single values.

Types:

1. Integer (`int`)
2. Float (`float`)
3. String (`str`)
4. Boolean (`bool`)
5. Complex (`complex`)

### Examples:

```python
age = 20
price = 99.50
name = "Rahul"
is_student = True
number = 2 + 3j
```

### B. Non-Primitive Data Structures

Non-primitive data structures are used to store collections of data or multiple values.

They are divided into two types:

1. Linear Data Structures
2. Non-Linear Data Structures

---

## 3. Linear Data Structures

Linear data structures arrange data elements in a sequence, one after another.

Types:

1. List : provide immutable element 
2. Tuple 
3. Stack
4. Queue
5. Linked List
6. Array

### 1. List

A List stores multiple items in a single variable.

- Ordered
- Mutable (Changeable)
- Allows duplicate values
- Uses square brackets `[ ]`

Example:

```python
fruits = ["Apple", "Banana", "Mango"]
print(fruits)
```

### 2. Tuple

A Tuple stores multiple items in a single variable.

- Ordered
- Immutable (Unchangeable)
- Allows duplicate values
- Uses round brackets `( )`

Example:

```python
colors = ("Red", "Green", "Blue")
print(colors)
```

### 3. Stack

A Stack follows the LIFO principle.

LIFO = Last In, First Out.

Example: A stack of plates.

### 4. Queue

A Queue follows the FIFO principle.

FIFO = First In, First Out.

Example: People standing in a ticket line.

### 5. Linked List

A Linked List stores data in nodes. Each node contains data and a link to the next node.

Example: A music playlist.

### 6. Array

An Array stores multiple elements of the same data type in an organized way.

Example:

```python
import array

numbers = array.array('i', [10, 20, 30, 40])
print(numbers)
```

---

## 4. Non-Linear Data Structures

Non-linear data structures do not arrange data in a simple sequence. Data is organized in hierarchical or connected ways.

Types:

1. Tree
2. Graph
3. Set
4. Dictionary

### 1. Tree

A Tree stores data in a hierarchical structure with parent and child nodes.

Example: Computer folders and files.

### 2. Graph

A Graph consists of vertices (nodes) and edges (connections).

Example: Social media connections and road maps.

### 3. Set

A Set stores unique elements.

- Unordered
- Mutable
- Does not allow duplicate values
- Uses curly brackets `{ }`

Example:

```python
numbers = {10, 20, 30, 40}
print(numbers)
```

### 4. Dictionary

A Dictionary stores data in key-value pairs.

- Ordered
- Mutable
- Keys must be unique
- Uses curly brackets `{ }`

Example:

```python
student = {
    "name": "Rahul",
    "age": 20,
    "marks": 85
}

print(student)
```

---

## 5. Classification of Data Structures

| Main Category | Types |
|---|---|
| Primitive | Integer, Float, String, Boolean, Complex |
| Linear | Array, List, Tuple, Stack, Queue, Linked List |
| Non-Linear | Tree, Graph |
| Other Python Collections | Set, Dictionary |

---

## 6. Real-Life Examples of Data Structures

| Data Structure | Real-Life Example |
|---|---|
| List | Shopping list |
| Tuple | Fixed coordinates |
| Stack | Stack of plates |
| Queue | Ticket counter line |
| Linked List | Music playlist |
| Array | Collection of marks |
| Tree | Family tree |
| Graph | Social media network |
| Set | Unique phone numbers |
| Dictionary | Student information |

---

## 7. Conclusion

Data Structures are important in Python because they help us store, organize, and manage data efficiently.

There are two main categories of data structures:

1. Primitive Data Structures
2. Non-Primitive Data Structures

Non-Primitive Data Structures are further divided into Linear and Non-Linear Data Structures.
