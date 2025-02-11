//Reverse a string function
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to find the second-largest number in an array
function secondLargest(arr) {
    if (arr.length < 2) return null; 

    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second; 
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example usage:
console.log(reverseString("hello")); 
console.log(secondLargest([10, 20, 4, 45, 99])); 
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
