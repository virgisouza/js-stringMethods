/*String Methods allow you to work with strings.  */  

/*Let's practice some string methods. Don't forget to console.log your results and run node REPL in the terminal.*/

/*The string.length property returns the number of characters in the string.
*/

/*1. Find the number of letters in the string below. Declare a variable named `howManyLetters and assign it to the string property. Console.log your result.*/

var longestPlaceName = "Taumatawhakatangihangakoauauotamateaturipukakapiki- maungahoronukupokaiwhenuakitanatahu";  //Located in Porangahau, Central Hawke's Bay

var howManyLetters = longestPlaceName.length;
console.log(howManyLetters);

/*Concatenate and console.log the following phrase:
"x is the longest place in the world and has y letters in its name."
where x represents the value at `longestPlaceName` and y represents the value at `howManyLetters`*/

console.log(longestPlaceName + " is the longest place in the world and has " + howManyLetters + " letters in its name.");


/*The string.charAt() methods returns the character at the specified index. Declare a variable named `fifthLetter` and assign it the charAt method.*/

/*2. Return the letter at the 5th position of the string below:*/

var iDidntKnow = "The national animal of Scotland is the Unicorn";
var fifthLetter = iDidntKnow.charAt(5);
console.log(fifthLetter);

/*The indexOf() method returns the index (the position of) the first occurence of a specified text in a string.*/

/*3. Find the position of the word "world" in the string below. Declare a variable named `worldLocator` and assign it the indexOf method. Console.log your result.*/

var randomFact = "All pandas in the world are on loan from China.";
var worldLocator = randomFact.indexOf("world");
console.log(worldLocator);


/*The slice() method extracts a part of a string and returns the extracted part into a new string. This method takes 2 parameters: the starting index (position) and the ending index (position)*/

/*4. Declare a new variable named `scissorHand` that will generate a new string "are afraid" from the existing variable below. Console.log your result.*/

var edward = "People are afraid of me because I am different";
var scissorHand = edward.slice(6, 17);
console.log(scissorHand);


/*The replace() method replaces a specified value with another value in a string.*/

/*5. Declare a new variable named `theSifu` that will change the current string from "In order to taste my cup of water you must first fill your cup." to "In order to taste my cup of water you must first empty your cup."; Console.log your result.*/

var grasshopper = "In order to taste my cup of water you must first empty your cup.";

var theSifu = grasshopper.replace("fill", "empty");
console.log(theSifu);



 // substr()

 // 
 //  toLowerCase()
//toUpperCase()
 // 

/*
    charAt()
        concat()
        contains()
        indexOf()
        length()
        search()
       
        split()
        sub()*/
       
       

