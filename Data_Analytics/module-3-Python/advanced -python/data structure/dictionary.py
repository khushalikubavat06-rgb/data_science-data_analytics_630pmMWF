# A dict is stored data in {key:value} paired
# A dict is provides mutable elements can be changed
# A dict can be repeated the dublicate values  
# A dict defined as constructor sam name of dict()
# stored any data types values in dict()

# employee={
#     "name":["twinkle","kavish","noorie","jay"],
#     "age":[22,23,24,25]
# }
# print(employee)
# print(type(employee))
# print(employee["name"])
# print(employee["age"])


# employee={
#     id:1, "name":"brijesh","age":35,"edu":"IT"
# }
# print(employee)
# print(type(employee))
# print(employee["name"])


# dictionary as constructor 
# employee=dict({id:1, "name":"brijesh","age":35,"edu":"IT"})
# print(employee)
# print(type(employee))


# employee=dict({id:1, "name":"brijesh","age":35,"edu":"IT"})
# print(employee)
# print(type(employee))

# iterate a dictionary 
# for emp in employee:
#     print(emp)
#     print(type(emp))



employee={
    id:1, 
    "name":"brijesh",
    "age":35,
    "edu":"IT"
}

# dictionary method 
# res=dict(reversed(list(employee.items())))
# print(res)

# res=employee.keys()
# print(res)


# res=employee.values()
# print(res)

# removed 
# res=employee.pop("edu")
# print(res)
# print(employee)

# res=employee.clear()
# print(employee)

# update data in dict
# employee.update({"name": "rajesh"})
# print(employee)

# employee["country"]="india"
# print(employee)


employee["country"]="india"
employee["state"]="gujrat"
print(employee)
print(type(employee))

# iterate a dictionary only key
# for i in employee:
#     print(i)

# iterate with values 
for i in employee.values():
    print(i)
    print(type(i))

# iterate key and values used items()

for i in employee.items():
    print(i)
    #print(type(i))