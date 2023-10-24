//  Case Insensitive Comparison
function match(str1, str2){
    if(str1.toLowerCase() === str2.toLowerCase()){
      return true
    }else return false;
  }
  console.log(match("hello", "HELLO"));
  console.log(match("motive", "emotive"))
  console.log(match("venom", "VENOM"))
  console.log(match("mask", "mAskinG"));