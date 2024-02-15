function palindrome(str) {
  let palindrome = [];
  for(let i = str.length - 1; i >= 0; i--) {
    palindrome.push(str[i]);
  }

  let result = palindrome.join("");

  if (result === str) {
    return true;
  }

  return false;
}

let message = "racecayr";

console.log(palindrome(message));
