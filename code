#!/usr/bin/env python3

"""Creates a random code that messages will be encoded to"""

import random
import string

def main():
    #Open the js file for writing
    jsonfile = open('currentcode.js', 'w')

    #Get the alphabet into a list of keys 
    keys = [ x for x in string.ascii_lowercase ]

    #Shuffle the keys so that the keys and values are not 'a,b,c,...'
    random.shuffle(keys)

    #Get the values from the shuffled keys
    values = [ y for y in keys ]

    #Create an empty dictionary to save for the json.
    code = {}

    for i in range(len(keys)):
        #Update the code with the key value pair of that iteration
        code.update({sorted(keys)[i]:values[i]})

        #Update with the capital characters of those same letters
        code.update({sorted(keys)[i].title():values[i].title()})

    print(values)
    jsonfile.write("var Letters = " + str(code))

if __name__ == '__main__':
    main()
