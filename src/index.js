module.exports = function check(str, bracketsConfig) {
    var array = str.split('');
    var newArr = [];
    array.forEach(el=>{
        if (newArr[newArr.length-1] === "(" && el === ")") {
          newArr.pop();
        } else if (newArr[newArr.length-1] === "[" && el === "]") {
          newArr.pop();
        } else if (newArr[newArr.length-1] === "{" && el === "}") {
          newArr.pop();
        } else if (newArr[newArr.length-1] === "|" && el === "|") {
          newArr.pop();
        } else if (newArr[newArr.length-1] === "1" && el === "2") {
          newArr.pop();
        } else if (newArr[newArr.length-1] === "3" && el === "4") {
          newArr.pop();
        }else if (newArr[newArr.length-1] === "5" && el === "6") {
          newArr.pop();
        }else if (newArr[newArr.length-1] === "7" && el === "7") {
          newArr.pop();
        }else if (newArr[newArr.length-1] === "8" && el === "8") {
          newArr.pop();
        }else {
          newArr.push(el);
        }
      })
      console.log(newArr);
      if (newArr.length === 0) {
        return true;
      } else {
        return false;
      }
}
