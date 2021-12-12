const array1 = [15.5, 2.3, 1.1, 4.7];

function fakeReduce(arr, callback, acc) {
  let result = acc;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}

function getSum(total, num) {
  return total + Math.round(num);
}

console.log(fakeReduce(array1, getSum, 0));
