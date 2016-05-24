# asciiclock
The May Shokunin challenge:

In this challenge you must draw an analogue clock face.

The time is supplied on stdin in the format hh:mm, followed by a single newline. Both hh and mm are padded with a leading 0 (zero) if they are less than 10.
The analogue clock face representing that time, subject to the following rules, should be written on stdout.
Each hour mark should be drawn with 'o' (Lower-case O).
The hour mark representing the hour given in the input should be drawn with an 'h'.
The hour mark representing the minute given in the input should be drawn with an 'm'.
If the hour and the minute both fall on the same mark, then you should draw it with an 'x'.
You should round down the minutes past the hour to the nearest 5 for the purposes of marking it on the clock (so 23 becomes 20, 39 becomes 35).
Examples:

21:35
<pre>
        o
    o       o

 o             o

h               o

 o             o

    m       o
        o
</pre>        
04:59
<pre>
        o
    m       o

 o             o

o               o

 o             h

    o       o
        o
</pre>
        
#Pre-requisites
Runs on a mac machine. Assumes you have a javascript interpreter present in this location - 
 __/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Resources/jsc__
 
Thats the default location of jsc in a mac.

#To run

Type 

**sh go.sh**

 
