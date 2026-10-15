
let arr = [5, 6, 7, 8, 9];
let t = 11;
let map = new Map();
let ans = [];

for (let i = 0; i < arr.length; i++) {
    if (map.has(t - arr[i])) {
        ans.push(map.get(t - arr[i]));
        ans.push(i);
        break;
    } else {
        map.set(arr[i], i);
    }
}

console.log(ans);
