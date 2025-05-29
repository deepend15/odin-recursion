// iterative solution

function fibs(x) {
  let array = [];

  for (let i = 0; i < x; i++) {
    if (i === 0) array.push(0);
    else if (i === 1) array.push(1);
    else array.push(array[i - 2] + array[i - 1]);
  }

  return array;
}

console.log(fibs(8));

// recursive solution

function fibsRec(x, array = []) {
  if (x === 0) return array;
  else if (x === 1) {
    array.push(0);
    return array;
  } else if (x === 2) {
    array.push(0, 1);
    return array;
  } else {
    let newArray = fibsRec(x - 1);
    newArray.push(newArray[x - 3] + newArray[x - 2]);
    return newArray;
  }
}

console.log(fibsRec(8));
