/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 */

// var plusOne = function(digits) {
//     n=digits.length
//     max_right=digits[n-1]

//     max_right+=1

//     return digits
// };
//
function addOneToArray(arr) {
    // Step 1: Convert the array to a string
    let numStr = arr.join('');

    // Step 2: Convert the string to an integer
    let num = parseInt(numStr);

    // Step 3: Add one to the integer
    num += 1;

    // Step 4: Convert the resulting integer back to a string
    let newNumStr = num.toString();

    // Step 5: Convert the string back to an array of digits
    let newArr = Array.from(newNumStr).map(Number);

    return newArr;
}

let arr = [4,3,2,1];
let result = addOneToArray(arr);
console.log(result); // Output: [1, 2, 4]
//the above solution would not work for large numbers since using parseint of Bigint causes a loss in precision