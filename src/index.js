module.exports = function check(str, bracketsConfig) {
    var array = str.split('');
    if (array.length % 2 !==0) {
      return false;
    } else {
      return true;
    }

}
