'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  var calculatedSum = a + b;
  var textualStatement = 'The sum of ' + a + ' and ' + b + ' is ' + calculatedSum + '.';
  var arrayToReturn = [calculatedSum, textualStatement];

  // console.log(calculatedSum);
  // console.log(textualStatement);
  // console.log(textualStatement.length);
  // console.log('arrayToReturn:',arrayToReturn);
  // console.log(typeof calculatedSum);
  // console.log('The sum function is almost finished running.');

  return arrayToReturn;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var calculatedProduct = a * b;
  var textualStatement = 'The product of ' + a + ' and ' + b + ' is ' + calculatedProduct + '.';
  var arrayToReturn = [calculatedProduct, textualStatement];

  // console.log(calculatedProduct);
  // console.log(textualStatement);
  // console.log(textualStatement.length);
  // console.log('arrayToReturn:',arrayToReturn);
  // console.log(typeof calculatedProduct);
 
  return arrayToReturn;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var calculatedSum = sum(sum(a,b)[0],c)[0];
  var calculatedProduct = multiply(multiply(a,b)[0],c)[0];

  var textualSumStatement = a + ' and ' + b + ' and ' + c + ' sum to ' + calculatedSum + '.';
  var textualProductStatement = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + calculatedProduct + '.';

  var arrayToReturn = [calculatedSum, calculatedProduct, textualSumStatement, textualProductStatement];

  // console.log('*** The sumAndMultiply function console logs are below. ***');
  // console.log(calculatedSum);
  // console.log(calculatedProduct);
  // console.log(textualSumStatement);
  // console.log(textualProductStatement);
  // console.log('arrayToReturn:',arrayToReturn);
  // console.log(typeof calculatedSum);
  // console.log('*** End sumAndMultiply function logs. ***');

  return arrayToReturn;

}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  var calculatedSumOfSumArray = 0;
  var textualStatementOfSumArray = '';
  // console.log(sumArr);

  for (var i = 0; i < sumArr.length; i++) {
    // console.log('For loop pass',i,'calculated start value is:',calculatedSumOfSumArray);
    // console.log('Value to add is:',sumArr[i]);
    calculatedSumOfSumArray = sum(calculatedSumOfSumArray,sumArr[i])[0];
    textualStatementOfSumArray += sumArr[i] + ',';
    // console.log('For loop pass',i,'calculated end value is:',calculatedSumOfSumArray);
  }

  textualStatementOfSumArray = textualStatementOfSumArray.substring(0,textualStatementOfSumArray.length - 1);
  // I had errantly been adding a comma after the last array number listed in the textual statement because of the for loop.  To have the textual statment match the desired result, I needed to remove that last comma.  I considered adding an if statement internal to the for loop to see if it was the last pass of the for loop.  If it was, I could skip adding the comma.  However, that would've been a couple additional lines of code.  Instead, I assumed there had to be a function out there to subtract the end off of a string.  My googling revealed the .substring ?property? of strings that could be used to extract only the porition of the string I wanted.  I then reassigned that subsection to the string variable.  Thanks to TechieDelight for helping me figure out how to do this:  https://www.techiedelight.com/remove-last-character-string-javascript/

  textualStatementOfSumArray += ' was passed in as an array of numbers, and ' + calculatedSumOfSumArray + ' is their sum.';

  //*** Troubleshooting console logs:  ***
  // console.log('*** The sumArray function console logs are below. ***');
  // console.log(calculatedSumOfSumArray);
  // console.log(textualStatementOfSumArray);
  // console.log('arrayToReturn:',arrayToReturnOfSumArray);
  // // console.log(typeof calculatedSum);
  // console.log('*** End sumArray function logs. ***');
  
  var arrayToReturnOfSumArray = [calculatedSumOfSumArray, textualStatementOfSumArray];
  return arrayToReturnOfSumArray;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  var calculatedProductOfProductArray = 1;
  var textualStatementOfProductArray = 'The numbers ';
  // console.log(multArr);

  for (var i = 0; i < multArr.length; i++) {
    // console.log('For loop pass',i,'calculated start value is:',calculatedProductOfProductArray);
    // console.log('Value to multiply is:',multArr[i]);
    calculatedProductOfProductArray = multiply(calculatedProductOfProductArray,multArr[i])[0];
    textualStatementOfProductArray += multArr[i] + ',';
    // console.log('For loop pass',i,'calculated end value is:',calculatedProductOfProductArray);
  }

  textualStatementOfProductArray = textualStatementOfProductArray.substring(0,textualStatementOfProductArray.length - 1);
  // Used in previous function.  Same source: https://www.techiedelight.com/remove-last-character-string-javascript/

  textualStatementOfProductArray += ' have a product of ' + calculatedProductOfProductArray + '.';

  //*** Troubleshooting console logs:  ***
  // console.log('*** The ProductArray function console logs are below. ***');
  // console.log(calculatedProductOfProductArray);
  // console.log(textualStatementOfProductArray);
  // console.log('arrayToReturn:',arrayToReturnOfProductArray);
  // console.log(typeof calculatedProduct);
  // console.log('*** End ProductArray function logs. ***');
  
  var arrayToReturnOfProductArray = [calculatedProductOfProductArray, textualStatementOfProductArray];
  return arrayToReturnOfProductArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  var calculatedProductOfProductArray = 1;
  var textualStatementOfProductArray = 'The numbers ';
  // console.log(dynamicArray);

  for (var i = 0; i < dynamicArray.length; i++) {
    // console.log('For loop pass',i,'calculated start value is:',calculatedProductOfProductArray);
    // console.log('Value to multiply is:',dynamicArray[i]);
    calculatedProductOfProductArray = multiply(calculatedProductOfProductArray,dynamicArray[i])[0];
    textualStatementOfProductArray += dynamicArray[i] + ',';
    // console.log('For loop pass',i,'calculated end value is:',calculatedProductOfProductArray);
  }

  textualStatementOfProductArray = textualStatementOfProductArray.substring(0,textualStatementOfProductArray.length - 1);
  // Used in previous function.  Same source: https://www.techiedelight.com/remove-last-character-string-javascript/

  textualStatementOfProductArray += ' have a product of ' + calculatedProductOfProductArray + '.';

  //*** Troubleshooting console logs:  ***
  // console.log('*** The ProductArray function console logs are below. ***');
  // console.log(calculatedProductOfProductArray);
  // console.log(textualStatementOfProductArray);
  // console.log('arrayToReturn:',arrayToReturnOfProductArray);
  // console.log(typeof calculatedProduct);
  // console.log('*** End ProductArray function logs. ***');
  
  var arrayToReturnOfProductArray = [calculatedProductOfProductArray, textualStatementOfProductArray];
  return arrayToReturnOfProductArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
