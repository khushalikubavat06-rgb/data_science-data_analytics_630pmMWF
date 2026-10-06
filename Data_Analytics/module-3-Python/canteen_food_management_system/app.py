import pandas as pd 

''' used for making chart'''

import matplotlib.pyplot as plt
#canteen food wastage managent system 

data ={
    "food_menu":["piza","burger","chinese","gujarati","panjabi","litti chokha"],
    "wastage_items":[10,78,20,25,45,100]
}

#create a tablur layout
df=pd.DataFrame(data)
print(df)
#total items in kg are wastage 
print("-----------------------")
total_wastage_items=df["wastage_items"].sum()
print("Total wastage items in kg:",total_wastage_items)
#max which item are wastage
print("-----------------------")
max_wastage_item=df["wastage_items"].max()
print("Max wastage item in kg:",max_wastage_item)
#craete a chart 
plt.title("Find max wastage item")
plt.pie(
    df["wastage_items"],
    labels=df["food_menu"],
    autopct="%1.1f%%",
    startangle=90,
    colors=["red","blue","green","yellow","orange","pink"]
)
plt.show()