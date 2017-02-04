/*String Methods allow you to work with strings.  */  

/*Let's practice some string methods. Don't forget to console.log your results and run node REPL in the terminal.*/


/*The string.length property returns the number of characters in the string.
*/

/*1. Find the number of letters in the string below. Declare a variable named `howManyLetters and assign it to the string property. Console.log your result.*/

var longestPlaceName = "Taumatawhakatangihangakoauauotamateaturipukakapiki- maungahoronukupokaiwhenuakitanatahu";  //Located in Porangahau, Central Hawke's Bay

var howManyLetters = longestPlaceName.length;
console.log(howManyLetters);

/*Concatenate and console.log the following phrase:
x is the longest place in the world and has y letters in its name."
where x represents the value at `longestPlaceName` and y represents the value at `howManyLetters`*/

console.log(longestPlaceName + " is the longest place in the world and has " + howManyLetters + " letters in its name.");


/*The string.charAt() methods returns the character at the specified index. Declare a variable named `fifthLetter` and assign is the charAt method.*/

/*2. Return the letter at the 5th position of the string below:*/

var iDidntKnow = "The national animal of Scotland is the Unicorn";
var fifthLetter = iDidntKnow.charAt(5);
console.log(fifthLetter);




    /*  charAt()
        concat()
        contains()
        indexOf()
        length()
        search()
        slice()
        split()
        sub()
        substr()
        toLowerCase()
        toUpperCase()*/

