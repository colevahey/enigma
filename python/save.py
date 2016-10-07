import json
import letters as le
from os import system as sys

def save():
    with open('letters.js', 'w') as pfile:
        pfile.write('var Letters = ' + json.dumps({
            "a":le.Letter.a,
            "A":le.Letter.A,
            "b":le.Letter.b,
            "B":le.Letter.B,
            "c":le.Letter.c,
            "C":le.Letter.C,
            "d":le.Letter.d,
            "D":le.Letter.D,
            "e":le.Letter.e,
            "E":le.Letter.E,
            "f":le.Letter.f,
            "F":le.Letter.F,
            "g":le.Letter.g,
            "G":le.Letter.G,
            "h":le.Letter.h,
            "H":le.Letter.H,
            "i":le.Letter.i,
            "I":le.Letter.I,
            "j":le.Letter.j,
            "J":le.Letter.J,
            "k":le.Letter.k,
            "K":le.Letter.K,
            "l":le.Letter.l,
            "L":le.Letter.L,
            "m":le.Letter.m,
            "M":le.Letter.M,
            "n":le.Letter.n,
            "N":le.Letter.N,
            "o":le.Letter.o,
            "O":le.Letter.O,
            "p":le.Letter.p,
            "P":le.Letter.P,
            "q":le.Letter.q,
            "Q":le.Letter.Q,
            "r":le.Letter.r,
            "R":le.Letter.R,
            "s":le.Letter.s,
            "S":le.Letter.S,
            "t":le.Letter.t,
            "T":le.Letter.T,
            "u":le.Letter.u,
            "U":le.Letter.U,
            "v":le.Letter.v,
            "V":le.Letter.V,
            "w":le.Letter.w,
            "W":le.Letter.W,
            "x":le.Letter.x,
            "X":le.Letter.X,
            "y":le.Letter.y,
            "Y":le.Letter.Y,
            "z":le.Letter.z,
            "Z":le.Letter.Z,
            " ":le.Letter.space,
            "?":le.Letter.question,
            "!":le.Letter.exclamation,
            "@":le.Letter.atsign,
            "^":le.Letter.carat,
            "$":le.Letter.money,
            "#":le.Letter.hashtag,
            "*":le.Letter.aestric,
            "&":le.Letter.andsign,
            "%":le.Letter.percent,
            "(":le.Letter.parenthesisleft,
            ")":le.Letter.parenthesisright
            }))
        
if __name__=='__main__':
    save()
