let arr = [3, 4, 5, 6, 7, 100, 40];

let fm = arr[0];
let sm = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > fm) {
        sm = fm;
        fm = arr[i];
    } 
    else if (arr[i] > sm && arr[i] != fm) {
        sm = arr[i];
    }
}

console.log("First Maximum:", fm);
console.log("Second Maximum:", sm);