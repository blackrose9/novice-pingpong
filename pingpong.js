/* creates function, with condition statements for checking multiples of 3, 5 and both 3 & 5 */
function checkMultiples(number){
    // condition checks for pingpong first multiples of 3 and 5
    if (number%3 === 0 && number%5 === 0){
    return("pingpong");
    }
    // condition then checks for ping multiples of 3
    if (number%3 === 0){
    return ("ping");
    }
    //condition then checks for pong multiples of 5
    if (number%5 === 0){
    return ("pong");
    }
    //if none of the above conditions are met, then returns number
    else {
    return (number);
    }
}
//asks user for total number to be checked for multiples of 3 and 5
var stringInput = prompt("Enter the number of numbers that you want to be pingponged :)");
//parses string input to integer
var integerInput = parseInt(stringInput);

//loops until all the user's numbers have been checked for multiples and logged
for (var a=0; a<integerInput; a++){
console.log(checkMultiples(a));
}