// Given an array of integers,
//     return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
//     Given nums = [2, 7, 11, 15], target = 9,
//     Because nums[0] + nums[1] = 2 + 7 = 9,
//     return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     var res = [];
//     try {
//         if (!nums || !target) {
//             throw new Error('not enough args ...')
//         }
//         nums.forEach((i, n) => {
//             nums.forEach((x, y) => {
//                 if ((i + x) === target && n < y) {
//                     res.push(n, y);
//                 }
//             })
//         })
//         return res.length > 0 ? res : "no matches found ...";
//     } catch (e) {
//         return (`Something went wrong -> ${e.message}`)
//     }
// };


// console.log(twoSum([2, 7, 11, 15], 9));

// var twoSumImproved = function (nums, target) {
//     let res = []
//     let numsMap = { ...nums
//     };
//     nums.forEach((i, n) => {
//         (Object.values(numsMap).includes((target - nums[n]))) ? res.push(n): null
//     })
//     return res;
// }
// console.log(twoSumImproved([2, 7, 11, 15], 9));


var twoSumReduce = function (nums, target) {
    nums.reduce((acc, val, index, arr) => {
        let oneOfPair = target - val;
        console.log(`${acc} \n ${val} \n ${index} \n ${arr}`)
        return [index, oneOfPair];
    });
}
console.log(twoSumReduce([2, 7, 11, 15], 9));

// var twoSumHash = function (nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         let z = nums.indexOf(target - nums[i]);
//         if (z !== -1 && (i !== z)) {
//             return [i, z]
//         }
//     }

// };
// console.log(twoSumHash([2, 4, 7, 11, 15], 9));