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
