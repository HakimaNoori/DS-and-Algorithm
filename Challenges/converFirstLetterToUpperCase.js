//  Conver first letter toUpperCase
function converFirstLetterToUpperCase(str){
    let words = str.split(" ");
    for(let  i = 0; i <words.length; i++){
      var word = words[i];
      var firstLetter = word.charAt(0);
      words[i] = firstLetter.toUpperCase() + word.slice(1);
    }
    var result = words.join(" ");
    return result;
  }
  console.log(converFirstLetterToUpperCase("this is a gread book"))