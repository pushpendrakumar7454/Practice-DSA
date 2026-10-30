
var subarraySum = function(nums, k) {
    let fre = {};
    let sum = 0;
    let count = 0;

    fre[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

        let diff = sum - k;

        if (fre[diff]) {
            count = count + fre[diff];
        }

        if (fre[sum]) {
            fre[sum]++;
        } else {
            fre[sum] = 1;
        }
    }

    return count;
};

console.log(subarraySum([1, 1, 1], 2));
