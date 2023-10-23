// Front 3 - Slice Check Repeat Concatenate
function frontThree(str) {
    let front = str.slice(0, 3);
    let newString = front + front + front;
    return newString;
  }
  console.log(frontThree("Python"))
  console.log(frontThree("Cucumber"))
  console.log(frontThree("Hakima"))