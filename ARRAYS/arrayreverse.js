//given the array reverse it using the two pointer method

function reverseArray(arr,left,right){
   
    while(left<right){

        var temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp;
        left++;
        right--;

    }
    return arr;

}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr, 1, 3)); // Output: [1, 4, 3, 2, 5]
