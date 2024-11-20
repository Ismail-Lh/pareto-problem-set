// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]

// Output: [[""]]

// Example 3:
// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagramsBrute(strs) {
  if (strs.length === 1) return [strs[0]];

  const sortedStrs = [];

  // O(n * k *  log(k))
  for (const str of strs) {
    // O(k * log(k))
    sortedStrs.push(str.split('').sort().join(''));
  }

  const res = {};

  for (let i = 0; i < sortedStrs.length; i++) {
    if (!res[sortedStrs[i]]) res[sortedStrs[i]] = [strs[i]];
    else res[sortedStrs[i]].push(strs[i]);
  }

  return Object.values(res);
}

function groupAnagramsOptimized(strs) {
  //  1. If there's only one string, return it as a single group.
  if (strs.length === 1) return [strs[0]];
  // 2. For each string, generate a frequency string using the `getFrequencyString` function.
  function getFrequencyString(str) {
    const frequencyArr = Array(26).fill(0);
    let frequencyString = '';

    for (const char of str) {
      const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
      frequencyArr[charIndex]++;
    }

    for (let i = 0; i < frequencyArr.length; i++) {
      const letter = String.fromCharCode(i + 'a'.charCodeAt(0));
      const letterFrequency = frequencyArr[i];

      frequencyString += letterFrequency;
      frequencyString += letter;
    }

    return frequencyString;
  }

  // 3. Use the frequency strings as keys in a hash map to group anagrams.
  const res = {};
  for (const str of strs) {
    const frequencyString = getFrequencyString(str);
    if (!res[frequencyString]) res[frequencyString] = [str];
    else res[frequencyString].push(str);
  }
  // 4. Return the grouped anagrams as an array of arrays.
  return Object.values(res);
}

console.log(groupAnagramsOptimized(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
