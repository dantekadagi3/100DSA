var findClosestNumber = function(nums) {
    var closest = nums[0]; 
 
    for (var i = 0; i < nums.length; i++) {
        
        if (Math.abs(nums[i]) < Math.abs(closest)) {
            closest = nums[i];
        } 
    
        else if (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest) {
            closest = nums[i];
        }
    }
 
    return closest; 
 };
 
 let arr = [-4, -2, 1, 4, 8];
 let close = findClosestNumber(arr);
 console.log(close); // Output: 1
 