function reverseWords(str) {
  return str.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}


let message = "The quick brown fox jumps over the lazy dog.";

console.log(reverseWords(message));
