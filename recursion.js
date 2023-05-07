/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1)

}


/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, currMax = 0) {
  if (i === words.length) return currMax
  words[i].length > currMax ? currMax = words[i].length : currMax
  return longest(words, i + 1, currMax)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (str[i] === undefined) return ""
  return str[i] + everyOther(str, i + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not.*/

function isPalindrome(str, idx = 0) {

  // This will check the left end and right end and will work towards the center. 
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;

  // return true once we arrive at the middle of the string
  if (leftIdx >= rightIdx) return true;

  // return false if at any point (excluding the letter in the center) the letters in the string do no match
  if (str[leftIdx] !== str[rightIdx]) return false;

  // continue recursive loop
  return isPalindrome(str, idx + 1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {

  if (idx === arr.length) {
    return -1
  }
  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1)

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, revStr = "") {

  if (str.length === revStr.length) return revStr

  revStr += str[str.length - 1 - idx]

  return revString(str, idx + 1, revStr)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    // if value is a string, push value to the array
    if (typeof obj[key] === "string") stringArr.push(obj[key]);

    // if value is object, push recursive loop
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
