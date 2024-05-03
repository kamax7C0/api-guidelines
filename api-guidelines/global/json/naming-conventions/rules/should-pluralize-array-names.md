# SHOULD pluralize array names

Arrays should have pluralized names whereas objects should be named in singular.

DO

````json
{
    "imageData": {
        "imageBrand": "i.companyname.de/i/companyname/2212",
        "imageShop": "i.companyname.de/i/companyname/86"
    },
    "keys": ["ffe6372af30", "d8e6372af40"]
}
````

DON'T

````json
{
    "images": {
        "imageBrand": "i.companyname.de/i/companyname/2212",
        "imageShop": "i.companyname.de/i/companyname/86"
    },
    "keyCollection": ["ffe6372af30", "d8e6372af40"]
}
````
