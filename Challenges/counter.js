function counter() {
    for (let count = 1; ; count++) {
      console.log(`${count}A`);
      if (count === 5) return;
      console.log(`${count}B`);
    }
    console.log(`${count}C`);
  }
  counter();
  console.log(counter());