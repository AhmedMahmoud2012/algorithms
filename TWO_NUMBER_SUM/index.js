/*
Find the two numbers in array, the summation equals target number (n)
*/

const arr = [-1, 3, 1, -4, 5, 8, 6, 8, 11];
const target = 10;




// Using hash time O(n) space O(n) ... more space
function twoNumberSum(arr, target) {
    let map = new Map();
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        let y = target - item;
        if (map.has(y)) {
            return [item, y]
        }
        map.set(item, true)
    }
}

// Space O(1) time O(nlog(n)) Quick Sort or Merge Sort....
function twoNumberSumWithSort(arr, target) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [arr[left], arr[right]]
        } else if (currentSum > target) {
            right--;
        } else {
            left++;
        }
    }
}
console.log(twoNumberSum(arr, target));
console.log(twoNumberSumWithSort(arr, target));
