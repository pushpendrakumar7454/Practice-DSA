let arr = [2, 0, 1, 0, 2, 1, 0, 1, 2];

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let i = 0, j = 0, k = arr.length - 1;

while (j <= k) {

    if (arr[j] == 0) {
        swap(arr, i, j);
        i++;
        j++;

    } else if (arr[j] == 2) {
        swap(arr, j, k);
        k--;

    } else {
        j++;
    }
}

console.log(arr);