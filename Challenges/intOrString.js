function intOrString(word){
    if(typeof word === "number" && Number.isInteger(word)){
      return "int";
    }
    else if(typeof word === "string"){
      return "str";
    }
  }
  console.log(intOrString(8));
  console.log(intOrString("Hello"));
  console.log(intOrString(9843532))