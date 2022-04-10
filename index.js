function myEach(collection, callback) {
    let arr = Object.values(collection) //returns an array containing values
    arr.forEach(elem => callback(elem))   
    // for(let i = 0; i < arr.length; i++){
    //     alert(arr[i])
    // })  
        return collection;
}

function myMap (collection, callbackFn) {
    let arr = Object.values(collection);
    let newArr = [];
     for(let elem of arr) {
       newArr.push(callbackFn(elem))
    }
    // arr.map(num => newArr.push(callbackFn(num))) //this works also
    return newArr;
}

function myReduce(collection, callback, acc) {
let arr = Object.values(collection);
   if(!acc) {
    acc = arr[0]; //acc starts at the value that's passed in
    arr = arr.slice(1)
   }
   const newLength = arr.length
   for(let i = 0; i < newLength; i++) {
       acc = callback(acc, arr[i], arr) // 3 arguments per read me
   }
    return acc;
}
// the if stmt is for the case when no start value is passed into the accumulator
// if acc is null, then thats the first value of the arr
// the arr copies everything after that first value

function myFind(collection, predicate) {
    let arr = Object.values(collection);
    for(let i = 0; i < arr.length; i++){
        if(predicate(arr[i])) 
        return arr[i]; 
     } 
    return undefined
}
//predicate is callback function that returns true or false

function myFilter(collection, predicate) {
    let arr = Object.values(collection);
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(predicate(arr[i]))
        newArr.push(arr[i]);
    }
    return newArr;
}

function mySize(collection) {
    let arr = Object.values(collection);
        return arr.length;
    
}

function myFirst(array, stopIndex) {
   return (stopIndex) ? array.slice(0, stopIndex) : array[0];
  }

  function myLast(array, index) {
      return (index) ? array.slice(array.length - index, array.length) : array[array.length - 1];
      //return (index) ? array.slice(index - 1, array.length) : array[array.length - 1];
  }

//   myLast([5, 4, 3, 2, 1], 3);
// => [3, 2, 1]
// arr.slice(arr.length-start, arr.length) 
// arr.slice(5 - 3 = 2, 5)
// arr.slice(2, 5)

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}