/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

function greet(name){
    return "Hello " + name+"!"
}


/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

function loginValidation(age)
{
    if(age<18)
    {
        return "Sorry, not allowed."
    }
    else if(age>=18)
    {
        return "Welcome!"
    }
}


/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */


function minNumber(num1,num2)
{
    if(num1>num2)
    {
        return num2
    }
    else if(num2>num1)
    {
        return num1
    }
}


/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

function randomNumber(){
    let num = Math.floor(Math.random() * 10) + 1;
    return num
}

/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

function getOppositeNumber(num)
{
    if(num<0)
    {
        return Math.abs(num)
    }
    else if(num>0)
    {
        ans = num - (num*2)
        return ans
    }
}