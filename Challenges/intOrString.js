function intOrString(word){
    if(typeof word === "number" && Number.isInteger(word)){
      return "int";
    }
    else if(typeof word === "string"){
      return "str";
    }
  }
