
function search(arr ,key){
for(let i=0;i<arr.length;i++){
    if(arr[i]==key){
        return 1
    }
}
return 0
}
let arr=[1,2,3,4,5]
console.log(search(arr,2));