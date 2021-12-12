function fakeSlice(arr, start, end = arr.length) {
  let resultArr = [];
  let startOfLoop = start > 0 ? start : arr.length + start;
  let endOfLoop = end > 0 ? end : arr.length + end;
  for (let i = startOfLoop; i < endOfLoop; i++) {
    resultArr.push(arr[i]);
  }
  return resultArr;
}

//? Testing for some strings
console.log(fakeSlice([1, 2, 3, 4, 5], -3, -2));
// console.log(fakeSlice([1, 2, 3, 4], 0, -3));
