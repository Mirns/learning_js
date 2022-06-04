const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */


//let results = {}


function sortedData(dataTypes)
{
  let results = {}

  for(let i=0;i<dataTypes.length;i++)
  {
    //1. strings,
    if(typeof dataTypes[i] === 'string')
    {
      if(results.strings)
      {
        results.strings.push(dataTypes[i])
      }
      else
      {
        results.strings = [dataTypes[i]]
      }
    }

    //2. integers,
    if(Number.isInteger(dataTypes[i]))
    {
      if(results.integers)
      {
        results.integers.push(dataTypes[i])
      }
      else
      {
        results.integers = [dataTypes[i]]
      }
    }


    // 3. floats,
    if(typeof dataTypes[i] === 'number' &&
        !Number.isNaN(dataTypes[i]) &&
        !Number.isInteger(dataTypes[i]))
    {
      if(results.floats)
      {
        results.floats.push(dataTypes[i])
      }
      else
      {
        results.floats = [dataTypes[i]]
      }
    }


    //4. arrays,
    if(Array.isArray(dataTypes[i]))
    {
      if(results.arrays)
      {
        results.arrays.push(dataTypes[i])
      }
      else
      {
        results.arrays = [dataTypes[i]]
      }
    }


    //5. objects
    if(typeof dataTypes[i] === 'object' &&
        dataTypes[i] !== null &&
        !Array.isArray(dataTypes[i]))
    {
      if(results.objects)
      {
        results.objects.push(dataTypes[i])
      }
      else
      {
        results.objects = [dataTypes[i]]
      }
    }

  }


  return results

}

console.log(sortedData(dataTypes))



/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */



function multipliedByNextNumber(myArr){
  let newArr = [];

  let lg = myArr.length

  // console.log(myArr[lg-1])

  for(let i=0;i<lg;i++)
  {
    if(i==lg-1)
    {
      let v = myArr[i] * 1
      newArr.push(v)
    }
    else
    {
      let v = myArr[i] * myArr[i+1]
      newArr.push(v)
    }
  }

  return newArr
}


console.log(multipliedByNextNumber([3,2,6]))





/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */


function multipliedEvenNumbers(arr)
{
  //Input: [4,3,6,8,5,7]
  // ANS:  [24, 3, 48, 16, 5, 7]

  let newArr = [];
  let ln = arr.length;

  for(let i=0; i<ln; i++)
  {
    let myi = arr[i];
    let num2 = 2;

    if(arr[i]%2===0)
    {

      let num1 = myi;

      for(let j=i+1;j<ln-1;j++)
      {
        let myj = arr[j];

        if(myj%2===0)
        {
          num2 = myj;
          break;
        }
        else
        {
          num2 = 2;
        }

      }

      let prod = num1*num2;
      newArr.push(prod);

    }

    else

    {
      newArr.push(arr[i]);
    }


  }

  return newArr;
}

console.log(multipliedEvenNumbers([4,3,6,8,5,7]))



/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */


function multipliedOddNumbers(arr)
{
  //Input: [4,3,6,8,5,7]
  // ANS:  [4, 15, 6, 8, 35, 7]

  let newArr = [];
  ln = arr.length;



  for(let i=0; i<ln; i++)
  {
    let myi = arr[i];
    let num2 = 1;

    //if its odd
    if(arr[i]%2!==0)
    {

      let num1 = myi;

      for(let j=i+1;j<ln;j++)
      {
        let myj = arr[j];
        num2 = myj;

        if(myj%2!==0)
        {
          num2 = arr[j];
          break;

        }


      }
      if(num2%2===0 || num2 === null)
      {
        num2 = 1;
      }

      let prod = num1*num2;
      newArr.push(prod);

    }

    else

    {
      newArr.push(arr[i]);
      //newArr.push("even");
    }

  }

  return newArr;
}

console.log(multipliedOddNumbers([4,3,6,8,5,7]))




/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */

function multipliedEvenOddNumbers(myArr, type)
{
  if(type === "even")
  {
    return multipliedEvenNumbers(myArr);
  }
  else if(type === "odd")
  {
    return multipliedOddNumbers(myArr);
  }
  else
  {
    return myArr;
  }
}

//console.log(multipliedEvenOddNumber(arr,"odd"));