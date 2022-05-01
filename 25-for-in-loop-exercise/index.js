/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */


function logProperties(obj){
    for(let i = 0; i<Object.keys(obj).length; i++)
    {
        console.log("Property name" + ': ' + Object.keys(obj)[i]);
    }

}




/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

allValArr = [];

function getAllValues(obj)
{
    for(let ob in obj)
    {
        if (Object.prototype.hasOwnProperty.call(obj, ob))
        {
            allValArr.push(obj[ob])
        }
    }

    return allValArr
}


/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

/**
let strVla = "";

function getAllValuesAsString(obj)
{
    for(let ob in obj)
    {
        if (Object.prototype.hasOwnProperty.call(obj, ob))
        {
            strVla += obj[ob]
            strVla.split(" ");

        }
    }
    return strVla
}

**/

function getAllValuesAsString(obj)
{
    let strOb = Object.values(obj);
    return strOb.toString().replace(/,/g, ' ');
}


/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */


function propertyValueString(obj)
{
    for (let [key, value] of Object.entries(obj))
    {
        console.log(`${key}: ${value}`);
    }
}
