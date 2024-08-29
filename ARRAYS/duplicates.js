function findDuplicates(A, B, C) {
    let mp = new Map();

    A.forEach(ele => {
        mp.set(ele, 1);
    });

    B.forEach(ele => {
        if (mp.has(ele) && mp.get(ele) == 1) {
            mp.set(ele, 2);
        }
    });

    C.forEach(ele => {
        if (mp.has(ele) && mp.get(ele) == 2) {
            mp.set(ele, 3);
        }
    });

    let commonElements = [];
    mp.forEach((value, key) => {
        if (value == 3) {
            commonElements.push(key);
        }
    });

    return commonElements;
}
let A = [1, 5, 10, 20, 30];
let B = [5, 13, 15, 20];
let C = [5, 20];

let ans = commonElements(A, B, C);

console.log("Common elements:", ans.join(" "));