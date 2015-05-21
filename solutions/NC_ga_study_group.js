// Problem 1: write a function that returns true if 2 words are anagrams of one another
var ana = function(str1, str2){
  var word1 = str1.split("").sort().join(""),
      word2 = str2.split("").sort().join("");

  if (word1 === word2){
    console.log(str1 + " and " + str2 + " are anagrams")
  } else {
    console.log(str1 + " and " + str2 + " are not anagrams")
  }

}

ana("now", "own");
ana("ron", "bat");

// Problem 2: Write a function that will do all basic math ops using only '+'
var masterAdd = function(){

}

// Problem 3: Write a function that will count all the '2s' between 0 and n
var twoCounter = function(){

}

// Problem 4: Caesar Cipher