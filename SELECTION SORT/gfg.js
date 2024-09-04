//Given an unsorted array of size N, use selection sort to sort arr[] in increasing order.

function swap(arr,x,y){
    var temp=arr[x]
    arr[x]=arr[y]
    arr[y]=temp
}

function selectionSort(arr,n){
    let i,j,min;
    for(i=0;i<n-1;i++){
        min=i

        for(j=i+1;j<n;j++){
            if(arr[j]<arr[min])
                min=j

            swap(arr,min,i)
        }
    }
    return arr;
}
var arr = [64, 25, 12, 22, 11];
    var n = arr.length;
    let sort=selectionSort(arr, n);
    console.log(sort);
    

