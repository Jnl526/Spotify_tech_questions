// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(s, t) {
  return s.split('').sort((string1, string2) => {
      return t.indexOf(string1) - t.indexOf(string2);
  }).join('');
}
// sortByString("weather", "therapyw");
sortByString("good", "odg");