function commonElements(A, B, C) {
    // Map to mark the common elements
    let mp = new Map();

    // Mark all the elements in the first array with value=1
    A.forEach(ele => {
        mp.set(ele, 1);
    });

    // Mark all the elements which are common in first and
    // second array with value = 2
    B.forEach(ele => {
        if (mp.has(ele) && mp.get(ele) === 1) {
            mp.set(ele, 2);
        }
    });

    // Mark all the elements which are common in first,
    // second and third array with value = 3
    C.forEach(ele => {
        if (mp.has(ele) && mp.get(ele) === 2) {
            mp.set(ele, 3);
        }
    });

    // Store all the common elements
    let commonElements = [];
    mp.forEach((value, key) => {
        if (value === 3) {
            commonElements.push(key);
        }
    });

    // Return the common elements which are common in all
    // the three sorted arrays
    return commonElements;
}

// Sample Input
let A = [1, 5, 10, 20, 30];
let B = [5, 13, 15, 20];
let C = [5, 20];

let ans = commonElements(A, B, C);

console.log("Common elements:", ans.join(" "));