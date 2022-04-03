/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
let user =
{
    firstName: "Bob",
    lastName: "Done",
    age: 12
}

console.log(user)

/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

let allTypes =
    {
        name: "Students",
        number: 7,
        arr: ["Steve","Graig","Tim"],
        isclassRoom:true,
        a: aStudent = {name:"Yanick", age:16, grade:10},
        nameIt : function studentClass(){
           let location = "South Africa"
        }
    };


console.log(allTypes)




/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject(name,rating,ticketPrice)
{
    let movieObject={
        name: name,
        rating: rating,
        ticketPrice: ticketPrice
    }

    return movieObject
}

console.log(createMovieObject)