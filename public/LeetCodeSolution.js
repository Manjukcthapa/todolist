import React from "react"

export default () => (
<div>
  <div>
    <h1>Subtract the Product and Sum of Digits of an Integer</h1>
    <p>Given an integer number n, return the difference between the product of its digits and the sum of its digits.</p>
    <p>
    var subtractProductAndSum = function(n) {
  let numArr = String(n).split('');
  let product = 1;
  let sum = 0;
    
  for (let j = 0; j < numArr.length; j++){
        let cv = Number(numArr[j]);
        product *= cv;
        sum += cv
    }
    
  return product-sum;
};
 </p>
 </div>
 <div>
   <h1> Find Numbers with Even Number of Digits</h1>
   <p>Given an array nums of integers, return how many of them contain an even number of digits.</p>
   <p>
   var findNumbers = function(nums) {
  let result = 0;
    
    for (let i = 0; i<nums.length; i++){
        let cv = String(nums[i]);
        if(cv.length % 2 === 0){
            result++
        }
    }
    
    return result;
};
   </p>
 </div>

</div>
)