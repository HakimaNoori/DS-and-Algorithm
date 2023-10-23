function magic() {
    return function calc(x) {
      return x * 212;
    };
  }
  const answer = magic();
  console.log(answer(1337));