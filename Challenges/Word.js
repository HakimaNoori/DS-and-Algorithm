function Word(str) {
    let digits = {
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'zero': 0,
    }
    let lowercaseStr = str.toLowerCase();
    return digits[lowercaseStr] || NaN;
  }
  console.log(Word("one"))
  console.log(Word("two"))
  console.log(Word("nine"))