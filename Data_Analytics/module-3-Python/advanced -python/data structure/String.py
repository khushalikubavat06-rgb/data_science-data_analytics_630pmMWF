# A string is a set of characters.
# A String is enclosed in single or double quotes."or"'or'
# A string is a set of character
# A string is enclosed between '' or ""
# A string provides immutable elements (can not be changed) 
# A string can not provides a line break escape


# declaration of string 

# str1='THis is  brijesh'
# str2="This is a kavish"
# str3="This is a domino's pizza"

# print(str1 + "\n" + str2 + "\n" + str3)

# ok right way
# str1="domino's pizza"
# print( str1)

# str='''
# i am brijesh
# i have done m.tech(IT)
# i am 35 years of old
# '''
# print(str)
# print(type(str))



# str='''i am brijesh 
# i have done m.tech(IT) 
# i am 35 years of old'''
# print(str)  

# str='i am brijesh'
# slicing of string
# print(str[::1])
# print(str[::-1])
# print(str[0:1])
# print(str[0:3])
# print(str[0:-3])

# string inbuilt method
# res=str.capitalize()
# print(res)

# res=str.islower()
# print(res)

# list of string method 
# res=str.islower()
# res=str.casefold()
# res=str.center()
# res=str.count()
# res=str.encode()
# res=str.endswith()
# res=str.expandtabs()
# res=str.find()
# res=str.format()
# res=str.isalpha()
# res=str.isdigit()
# print(res)


# string formatter : string formatter is used to print any formate in string 
# string formatter are used to print string f'{}'

# fname='brijesh'
# age=35
# edu='IT'
# salary=111500
# print(f'{fname , age ,edu, salary}')

# name = "Aarav"
# score = 94.567

# Basic variable and expression evaluation
# print(f"Student: {name}, Next Goal: {score + 5:.1f}")

# fname='brijesh'
# age=35
# edu='IT'
# salary=111500
# print(f"Students Name is :{fname} Age is : {age} Educations is :{edu} Salary is : {salary}")

pname="sasung galaxy"
qty=100
price=115000
offerprice=105000
desc="good products"

print(f"Products Name is : {pname} \n Products qty is : {qty} \n OfferPrice is : { offerprice} \n Products descriptions is : {desc}")