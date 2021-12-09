function fakeSlice(text, start = 0, end) {
  if (typeof text !== 'string') {
    return text;
  }
  let str = '';
  let endOfLoop = end > 0 ? end : text.length + end;
  for (let i = start; i < endOfLoop; i++) {
    str += text[i];
  }
  return str;
}

//? TEsting for some strings
console.log(fakeSlice('0123456789', 0, 3));
console.log(fakeSlice('0123456789', 0, -3));
