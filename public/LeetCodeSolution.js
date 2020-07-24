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
 <div>
   <h1>Factorialize a Number</h1>
   <h1>Return the factorial of the provided integer.</h1>
   <h1>function factorialize(num) {
  //create  the total variable
  let total = 1
  // Start the for loop at 1.
  // Run the loop as long as i is less than or equal to num.
  // (So when num = 0, i is never less or equal to num, and the
  //  loop never runs).
  // Increment i by one each time the loop runs.
  for (let i = 1; i <= num; i++) {
    // Multiply the total by i until we reach num.
    // Save the product as the variable total each time.
    // This can also be written: total = total * i.
    total *= i
    //                  total      i
    // 1st run: total =   1     *  1         total = 1
    // 2nd run: total =   1     *  2         total = 2
    // 3rd run: total =   2     *  3         total = 6
    // 4th run: total =   6     *  4         total = 24
    // 5th run: total =   24    *  5         total = 120
  }
  // return total as our answer
  return total;
}

factorialize(5);</h1>
 </div>

 <div>
   <p>Find the Longest Word in a String</p>
   <p>

   </p>
 </div>
function findLongestWordLength(str) {
var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
<div>
  <p>Return Largest Numbers in Arrays</p>
  <p>
  function largestOfFour(arr) {
   // Create an empty array that will eventually hold all
  // of the largest numbers
  let answer = []
  // Go through each array using bracket notation to access them:
  // arr[i]. Use Math.max() to pick out the largest number in each
  // array. The spread operator "..." will make the elements
  // of arr[i] be the arguments of Math.max().
  // We are pushing each highest number to our answer array.
  for (let i = 0; i < arr.length; i++) {
    answer.push(Math.max(...arr[i]))
  }
  // Return answer, the array of the largest numbers.
  return answer
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  </p>
  </div>
  <div>
    <p></p>
    <p> // Step 1. Create an empty string that will host the repeated string
  var repeatedString = "";

  // Step 2. Set the While loop with (times > 0) as the condition to check
  while (times > 0) { // As long as times is greater than 0, the statement is executed
    // The statement
    repeatedString += string; // Same as repeatedString = repeatedString + string;
    times--; // Same as times = times - 1;</p>
    // Step 3. Return the repeated string
  return repeatedString; // "abcabcabc"
}
  </div>
  <div>
    <p>Find the Symmetric Difference</p>
    <p>function sym() {
  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  var summary = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  var unique = summary.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  return unique;
}

// test here
sym([1, 2, 3], [5, 2, 1, 4]);</p>
  </div>
  <div>
    <p>. Reverse String</p>
    <p>var reverseString = function(s) {
return s.reverse();
};</p>
  </div>
</div>
)