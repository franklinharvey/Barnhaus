import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('Barnhouse-9186aff3144b.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://barnhouse-78075.firebaseio.com/'
})

# As an admin, the app has access to read and write all data, regradless of Security Rules
ref = db.reference('Products')

userInput = True

while userInput!="quit":
    name = input("Name?")
    price = input("Price?")
    productType = input("Type?")
    imageURL = input("URL?")
    ref.push({
        'Name': name,
        'Price': price,
        'Type': productType,
        'Image': imageURL
    })
    userInput = input("Quit?")

print (ref.get())
