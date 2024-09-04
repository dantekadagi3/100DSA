function distinctAbsoluteValues(nums) {
    
    const distinctAbsValues = new Set()
    nums.forEach(num => {
        
        distinctAbsValues.add(Math.abs(num));
    });

    
    return distinctAbsValues;
}


const nums = [-3, -2, 0, 2, 3, 4];
const result = distinctAbsoluteValues(nums);
console.log(result);  
