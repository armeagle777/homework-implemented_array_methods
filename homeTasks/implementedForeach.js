function fakeForeach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i);
  }
}

//? Testing for ['apple', 'orange', 'cherry']
let text = '';
const fruits = ['apple', 'orange', 'cherry'];
function myFunction(item, index) {
  text += index + ': ' + item + '<br>';
}

fakeForeach(fruits, myFunction);
console.info(text);
