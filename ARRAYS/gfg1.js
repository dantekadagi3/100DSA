/**
 * Given an array arr[] containing integers,  your task is to print the array in the order – smallest number, largest number, 2nd smallest number, 2nd largest number, 3rd smallest number, 3rd largest number and so on.

Examples:

Input: arr[] = [1, 9, 2, 8, 3, 7, 4, 6, 5]
Output: [1, 9, 2, 8, 3, 7, 4, 6, 5]
Explanation: Smallest number is 1. Largest number is 9. 2nd smallest number is 2. Then 2nd largest number is 8. And so on.
Input: arr[] = [1, 2, 3, 4]
Output: [1, 4, 2, 3]
Expected Time Complexity: O(n*logn)
Expected Auxiliary Space: O(n)
 */
    function rearrangeArray(arr) {
        arr.sort((a,b)=a-b)//sorting the array in  ascending order

      let left=0;
      let right=arr.length-1
      let result=[];

      while(left<=right){
        if(left==right){
            result.push(arr[left])
        }else{
            result.pusharr(arr[left])
            result.push(arr[right])
        }
        left++;
        right--;
      }
      return result;
    }