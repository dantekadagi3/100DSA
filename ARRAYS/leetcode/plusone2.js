var plusOne = function(digits) {
    // Start from the last digit and work backward
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is less than 9, just add 1 and return the array
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        
        // If the current digit is 9, it becomes 0 (carry over to the next digit)
        digits[i] = 0;
    }

    // If all digits were 9, we need to add a 1 at the beginning of the array
    digits.unshift(1);

    return digits;
};
