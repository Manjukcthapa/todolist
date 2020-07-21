import React from "react"

export default () => (
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
)