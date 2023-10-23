// Array.prototype.concat()
function stutter(str){
    return str.slice(0, 2) + "... " 
    + str.slice(0, 2) + "... " + str + "?";
  }
  console.log(stutter("incredible"))
  console.log(stutter("enthusiastic"))
  console.log(stutter("outstanding"))