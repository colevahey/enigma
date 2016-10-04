#!/usr/bin/env python3

import letters as le
import json
import sys
import skilstak.colors as c
from os import system

def run(message):
    with open('letters.json', 'r') as pfile:
        j=json.load(pfile)
        #le.Letter.a=j['a']
    inverse = {y:x for x,y in j.items()}
    n=1
    final = ""
    if message.startswith("#"):
        while n < len(message):
            final += inverse[message[n]]
            n += 1
    else:
        n = 0
        final += "#"
        while n < len(message):
            final += j[message[n]]
            n += 1
    return final

if __name__=='__main__':
    print(run(input(c.clear + c.red + "What is your message? >> " + c.orange)))
