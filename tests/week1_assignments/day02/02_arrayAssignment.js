/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

console.log("1) Move Zeroes : Example 1 and Example 2")
let nums=[0,1,0,12,3]
//let nums=[0]
//console.log(nums)
let nums2=[]
let nums3=[]
function arrSort(nums){
for (let i = 0; i <nums.length; i++) {
    if (nums[i]!=0) {
        nums2.push(nums[i])
    } 
    else {
     nums3.push(nums[i])
    }
}
console.log(nums2.sort(function (a,b){return a-b})) // This returns the array by sorting numbers in ascending order
console.log(nums3)

}

arrSort(nums)
console.log("Given Array : " + nums)
let newArr=nums2.concat(nums3) // This concatenate two different arrays
console.log("After moving zeroes to the end - New Array : "+ newArr)
console.log(newArr)


console.log("\n2) Array Intersection: Example 1 and Example 2")
//let nums4 = [1,2,2,1]
//let nums5 = [2,2]
//Output: [2]
let nums4 = [4,9,5]
let nums5 = [9,4,9,8,4]
//Output: [9,4]
function arrInter(nums4, nums5){
    a = nums4.length
    b = nums5.length
    for (let i= 0; i < a; i++) {
        for (let j= 0; j < b; j++) {
            if (nums4[i]==nums5[j]) {
               console.log(nums4[i])
            }
            
        }
        
    }
}
arrInter(nums4,nums5)


console.log("\n3) Find the maximum and minimum : ")

const nums6 = [34, 7, 21, 89, 54, 10, 91, 67]
console.log("Given Array :")
console.log(nums6)
//Output: Maximum Element: 91, Index: 6
//Minimum Element: 7, Index: 1
function maxNum(){
    let max = nums6[0]
    for (let i =0;i < nums6.length;i++) {
            if(nums6[i]>max){
                max = nums6[i]
            }
        }
    return max
}
    function maxIndex(){
        let max = nums6[0]
        let maxIndex=0
        for (let i =0;i < nums6.length;i++) {
                if(nums6[i]>max){
                    max= nums6[i]
                    maxIndex = i
                }
            }
        return maxIndex
        }
function minNum(){
    let min = nums6[0]
    for (let i =0;i < nums6.length;i++) {
            if(nums6[i]<min){
                min = nums6[i]
            }
        }
    return min
}
    function minIndex(){
        let min = nums6[0]
        let minIndex=0
        for (let i =0;i < nums6.length;i++) {
                if(nums6[i]<min){
                    min = nums6[i]
                    minIndex = i
                }
            }
        return minIndex
        }
    console.log("Minimum number in an array : "+ minNum(nums6))
    console.log("Index of the minimum number in an array : "+ minIndex(nums6))
    console.log("Minimum number in an array : "+ maxNum(nums6))
    console.log("Index of the minimum number in an array : "+ maxIndex(nums6))


console.log("\n4) Removing Duplicates : ")
//Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
//Output: resultArray = [1, 2, 3, 4, 5, 6]

let inputArr = [1, 2, 3, 4, 2, 5, 6, 1, 6]

function removeDuplicate(){
    let resultArr=[]
    console.log("Results Array : " + resultArr.indexOf(1))
    
    for (i=0;i<inputArr.length;i++)
    {
        if(resultArr.indexOf(inputArr[i])===-1)
        {
            resultArr.push(inputArr[i])
        }
    }
    return resultArr
    
}
console.log(removeDuplicate(inputArr))