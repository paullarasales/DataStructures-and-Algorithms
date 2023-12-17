// reverse a string
function reverseString(string) {
    const reversedString = [];

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString.push(string[i]);
    }

    const result = reversedString.join("");
    return result;
}

let message = "Hello";
console.log(message);

console.log(reverseString(message));

// palindrome checker

function isPalindrome(string) {
    const reversedString = [];

    for (let i = string.length; i >= 0; i--) {
        reversedString.push(string[i]);
    }

    const result = reversedString.join("")

    if (result === string ) {
        return true;
    } else {
        return false;
    }
}

let check = "racecar";
console.log(isPalindrome(check));

//finds the longest word

function findTheLongest(sentence) {
    const wordsArray = sentence.split(' ');

    let longestWord = '';

    for (const word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const sentence = "Find the longest word in this sentence";
const longestWord = findTheLongest(sentence);
console.log(longestWord);

// arranged the order

function arrangeBySize(arr) {

    const n = arr.length;

    for (let i = 0; i < n - 1; i++ ) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        } 
    }

    return arr;
}

let arrayNums = [5, 7, 9, 2, 6];
let sortedNums = arrangeBySize(arrayNums);
console.log(sortedNums);