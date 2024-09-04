//using sentiel search to find the element
//in sential search we compare the values against the sential value
//how it is performed
//assign the last element of the  array to a variable
//replace the last element with the key element
//use a while loop to determine if the last element is present
//put the last element back

function find(arr,n,x){
    let end=arr[n-1] 

     arr[n-1]=x

     let i=0
     while(arr[i]!=x)
        i++

     arr[n-1]=end

     if ((i < n - 1) || (arr[n - 1] == x))
        console.log(x + " is present at index " + i);
    else
        console.log("Element Not found");
}
const arr=[1,2,3,4,5]
const x =4
const n=arr.length

console.log(find(arr,n,x));


