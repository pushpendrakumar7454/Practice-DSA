const arr = [2, 0, 3, 0, 5, 0, 4, 0];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count++;
    }
}

let i = arr.length - 1;
let j = arr.length - 1 + count;

while (i >= 0) {

    if (arr[i] == 0) {
        if (j < arr.length) {
            arr[j] = 0;
        }
        j--;

        if (j < arr.length) {
            arr[j] = 0;
        }
        j--;
    }
    else {
        if (j < arr.length) {
            arr[j] = arr[i];
        }
        j--;
    }

    i--;
}

console.log(arr);