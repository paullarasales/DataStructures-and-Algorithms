function areAnagrams(str1, str2) {
    // Step 1: Normalize the strings
    const normalize = str => str.toLowerCase().replace(/ /g, '');

    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);

    // Step 2: Check length
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Step 3: Count characters
    const charCount1 = {};
    const charCount2 = {};

    // Step 4: Iterate through strings
    for (let char of normalizedStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of normalizedStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Step 5: Compare character counts
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    // Step 6: Return result
    return true;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("Hello", "World"));   // Output: false
console.log(areAnagrams("Astronomer", "Moon starer")); // Output: true

