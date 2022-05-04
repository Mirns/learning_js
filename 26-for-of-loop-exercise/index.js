/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

//let newArr = [];


function getIntegersOnly(arr)
{
    let newArr = [];
    for(let val of arr)
    {
        if(Number.isInteger(val) === true)
        {
            newArr.push(val);
        }
        else{
            newArr.push()
        }

    }
    return newArr;
}



/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */

//let newEven = [];

/**

function getEvenNumbers(evenArr)
{
    for(let val of evenArr)
    {
        //if(val%2===0)
        if(Number.isInteger(val) && val%2 === 0)
        {
            newEven.push(val)
        }
        else
        {
            newEven = []
        }

    }
    return newEven;
}

 **/



function getEvenNumbers(evenArr)
{
    let newArr = [];
    for(let val of evenArr)
    {
        if(val%2===0)
        {
            newArr.push(val);
        }
        else{
            newArr.push()
        }

    }
    return newArr;
}



/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */


/**

let newEvenMixed = [];

function getEvenNumbersFromMixedArray(evenMixed)
{
    for(let val of evenMixed)
    {
        if(Number.isInteger(val) === true && val%2===0)
        {
            newEvenMixed.push(val)
        }
        else {
            newEvenMixed.push()
        }

    }
    return newEvenMixed
}

 **/



function getEvenNumbersFromMixedArray(evenArr)
{
    let newArr = [];
    for(let val of evenArr)
    {
        if(Number.isInteger(val) === true && val%2===0)
        {
            newArr.push(val);
        }
        else{
            newArr.push()
        }

    }
    return newArr;
}


/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */

/**
let newOdd = [];

function getOddNumbers(oddArr)
{
    for(let val of oddArr)
    {
        if(val%2!==0)
        {
            newOdd.push(val)
        }
        else
        {
            newOdd.push()
        }
    }
    return newOdd
}

**/

function getOddNumbers(evenArr)
{
    let newArr = [];
    for(let val of evenArr)
    {
        if(val%2!==0)
        {
            newArr.push(val);
        }
        else{
            newArr.push()
        }

    }
    return newArr;
}



/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */

newArr = []

function evenOddTransform(arrInt)
{
    for(let val of arrInt)
    {
        let indexVal = arrInt.indexOf(val)
        if(val%2===0)
        {
           val -= 1
           arrInt[indexVal] = val
           newArr.push(val)
        }
        else if(val%2!==0)
        {
            val += 1
            arrInt[indexVal] = val
            newArr.push(val)
        }
    }
    return newArr
}