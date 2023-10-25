// Amazing Edabit!
function amazingEdabit(str) {
    if (str.includes("edabit")) {
      return str;
    }
    else {
      return str.replace(/amazing/ig, "not amazing");
    }
  }
  console.log(amazingEdabit("edabit is amazing."))
  console.log(amazingEdabit("Mubashir is amazing."))
  console.log(amazingEdabit("Infinity is amazing."))
  console.log(amazingEdabit("Edabit is amazing."))