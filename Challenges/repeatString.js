// Repeat String
function repeatString(txt, n) {
    if (typeof txt !== 'string') {
      return 'Not A String !!';
    }

    return txt.repeat(n);
  }
  console.log(repeatString('hello', 3));
  console.log(repeatString('abc', 5));
  console.log(repeatString(123, 2));