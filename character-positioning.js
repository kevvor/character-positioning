
function countLetters(string) {
  var result = {};
  var noSpaces = string.split(' ').join('');

  for (var i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];
    if (result[letter]) {
      // result[letter].push(i);
    } else {
      result[letter] = [];
      // result[letter].push(i);
    }
    result[letter].push(i);
  }
  return result;
}

console.log(countLetters('lighthouse in the house'));
console.log(countLetters('spiderman is my favourite superhero'));