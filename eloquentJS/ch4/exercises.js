function range(start, end, step = 1, arr = []){

  let under = (start < end) && (step < 0);
  let over = (start > end) && (step > 0);

  if(under || over){
      return arr;
  }

  arr.push(start);

  return range(start + step, end, step, arr);
}

function sum(arr){

  return acc;
}

let arr = range(5, 6, 2);

console.log(arr);