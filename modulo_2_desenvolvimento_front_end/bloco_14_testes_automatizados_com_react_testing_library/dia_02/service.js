const randomNumber = () => Math.floor(math.random() * 101);
const upperCase = (str) => str.toUppercase();
const firstLetter = (str) => str.charAt(0);
const concat = (str1, str2) => str1.concat(str2);
 
module.exports = { randomNumber, firstLetter, upperCase, concat };