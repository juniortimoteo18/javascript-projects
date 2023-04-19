function palindrome(str) {
  let newStr = str.replace(/\W|_/g, "").toLowerCase();
  let reverse = newStr.split("").reverse().join("");
  if (reverse === newStr) {
    return true;
  } else {
    return false;
  }
}