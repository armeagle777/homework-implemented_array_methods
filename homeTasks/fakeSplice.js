const givenArray = [0, 1, 2, 3, 4, 5];
function fakeSplice(arr, start, count, ...newItems) {
  const arrInstance = [...arr];
  arr.length = 0;
  const removedElements = [];
  const loopVar = start > 0 ? start : arrInstance.length + start;
  for (let i = 0; i < arrInstance.length; i++) {
    if (i >= loopVar && i <= loopVar + count) {
      if (count === 0) {
        givenArray.push(arrInstance[i]);
      }
      removedElements.push(arrInstance[i]);
      if (i === loopVar) {
        for (let el of newItems) {
          givenArray.push(el);
        }
      }
    } else {
      givenArray.push(arrInstance[i]);
    }
  }
  return removedElements;
}

const removed = fakeSplice(givenArray, 2, 0, 'x', 'y');
console.info(removed);
console.info(givenArray);
