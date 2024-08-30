/**
 * Given an array, arr of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
 */
// this is using linear search
function find1(arr,x){
    for(i=0;i<arr.length;i++){
        if(arr[i]==x){
         
         return i
        }
    }
    return -1
}
const arr=[1,2,3,4,5]
const x =5

console.log(find1(arr,x));