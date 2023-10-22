function isPlural(word){
    if(word.endsWith("s"))return true;
    return false;
  }
  console.log(isPlural("frouts"))
  console.log(isPlural("frout"))
  console.log(isPlural("changes"))
  console.log(isPlural("change"))
  console.log(isPlural("dudes"))
  console.log(isPlural("magic"))