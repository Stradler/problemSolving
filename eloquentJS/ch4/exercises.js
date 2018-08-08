//EXERCISE 1

function range(start, end, step = 1, arr = []){
  let under = (start < end) && (step < 0);
  let over = (start > end) && (step > 0);

  if(under || over){
      return arr;
  }

  arr.push(start);

  return range(start + step, end, step, arr);
}

function sum(arr, acc = 0, index = 0){
  if (index === arr.length - 1){
      return acc + arr[index];
  }

  return acc + sum(arr, arr[index], index + 1);
}

//EXERCIES 2

function reverseArray(arr){
    const arrayCopy = Array.from(arr);
    for(let i = 0, n = arrayCopy.length; i < n / 2; i++){
        [arrayCopy[i], arrayCopy[n - 1 - i]] = [arrayCopy[n - 1 - i], arrayCopy[i]];
    }
    return arrayCopy;
}

function reverseArrayInPlace(arr){
    for(let i = 0, n = arr.length; i < n / 2; i++){
        [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    }
    return arr;
}


//EXERCISE 3

function arrayToList(arr){
    // debugger;
    let object = {};
    let cursor = object;

    for (let i = 0, n = arr.length; i < n; i++){
        cursor.value = arr[i];
        cursor.rest = (i === n - 1) ? null: {};
        cursor = cursor.rest;
    }

    return object;
}

function listToArray(list){

    let cursor = list;
    const array = [];

    while(cursor !== null){
        array.push(cursor.value);
        cursor = cursor.rest;
    }

    return array;

}

function prepend(element, list){
    return {
      value: element,
      rest: list
    }
}

function nth(list, number, counter = 0){
    if(number === counter){
        return list.value;
    }

    if(list.rest === null){
        return undefined;
    }

    return nth(list.rest, number, counter + 1);
}




















