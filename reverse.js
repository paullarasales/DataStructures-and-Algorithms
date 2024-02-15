function reverse(str) {
  let message = [];
  for(let i = str.length - 1; i >= 0; i--){
    message.push(str[i]);
  }

  const result = message.join("");

  return result;
}

let message = "hello";
console.log(reverse(message));
