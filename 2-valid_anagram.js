/**
 * Checks if two strings are anagrams of each other.
 *
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * @param {string} s - The first string to compare.
 * @param {string} t - The second string to compare.
 * @returns {boolean} - Returns true if the strings are anagrams, otherwise false.
 */
function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charFrequencyOfS = {};
  const charFrequencyOfT = {};

  for (const char of s) {
    charFrequencyOfS[char] = (charFrequencyOfS[char] || 0) + 1;
  }

  for (const char of t) {
    charFrequencyOfT[char] = (charFrequencyOfT[char] || 0) + 1;
  }

  for (const char of s) {
    if (charFrequencyOfS[char] !== charFrequencyOfT[char]) return false;
  }

  return true;
}
// Input: s = "anagram", t = "nagaram" -> Output: true
console.log(isValidAnagram('anagram', 'nagaram'));
// Input: s = "rat", t = "car" -> Output: false
console.log(isValidAnagram('rat', 'car'));
