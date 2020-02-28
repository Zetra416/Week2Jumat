function xo(str) {
  var charX = 0;
  var charO = 0;
  var res;

for (var i = 0; i < str.length; i++) {
  if (str[i] === "o") {
    charO++;
  }
  else {
    charX++;
  }
}

if (charO === charX) {
  return true;
}
else {
  return false;
}

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
