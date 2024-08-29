function printLeaders(arr, size) {
    let max_from_right = arr[size - 1];

    /* Rightmost element is always leader */
    console.log(max_from_right + " ");

    for (let i = size - 2; i >= 0; i--) {
        if (max_from_right < arr[i]) {
            max_from_right = arr[i];
            console.log(max_from_right + " ");
        }
    }
}


let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;
printLeaders(arr, n);