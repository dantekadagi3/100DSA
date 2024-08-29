var plusOne = function(digits) {
     let numstr=digits.join('')
     let num=parseInt(numstr)
     num+=1
     let newNumStr = num.toString();
     let newArr = Array.from(newNumStr).map(Number);
     return newArr;
};