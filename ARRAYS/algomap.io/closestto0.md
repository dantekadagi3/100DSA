in this challenge i am supposed to find a number that is closest to zero by subtructing it from zero

//initial idea
my initial thoughts were to declare a variable largest
then loop through the array while subtracting each value from zero then updattig largest then checking if it is greater than the previous value of  the current largest
this was correct but it missed an important component of converting the numbers in the array to absolute values

///the solution
var findClosestNumber = function(nums) {
   var closest = 0; // Initialize closest to zero
   var difference = Math.abs(nums[0]); // Start with the absolute value of the first element

   for (var i = 0; i < nums.length; i++) {
       let currentDiff = Math.abs(nums[i] - 0); // Calculate the difference from zero

       // If the current number is closer to zero, update closest and difference
       if (currentDiff < difference) {
           difference = currentDiff;
           closest = nums[i];
       } 
       // If two numbers have the same difference from zero, choose the positive one
       else if (currentDiff === difference && nums[i] > closest) {
           closest = nums[i];
       }
   }

   return closest; // Return the closest number to zero
};

let arr = [-4, -2, 1, 4, 8];
let close = findClosestNumber(arr);
console.log(close); // Output: 1



