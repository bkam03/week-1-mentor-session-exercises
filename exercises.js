/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
 function firstReverse(str) {
  if(typeof str === "string") {
    var reverseStr = str.split(""); //convert str to array of single char
    reverseStr = reverseStr.reverse(); //reverse array
    //console.log(reverseStr);
    reverseStr = reverseStr.join("");//convert array back to string
    //console.log(str,reverseStr);
    return reverseStr;
  } else {
    return null;
  }
 }

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

 function alphaOrder(str) {
  //console.log(typeof str);
  if(typeof str === "string") {
    //console.log(str);
    var sortStr = str.split("");//convert str to array
    //console.log("split",sortStr);
    sortStr.sort(); //sorts array alphabetically
    //console.log("sort",sortStr);
    sortStr = sortStr.join(""); //convert array to str
    //console.log("result",sortStr);
    return sortStr;
  } else {
    //console.log("type null");
    return null;
  }
 }

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function vowelCount(str) {
  var vowelNum = 0;
  var vowelArray = ["a","e","i","o","u"];
  if(typeof str === "string") { //return null if not string
    for(var i = 0; i<str.length;i++) {//cycle through string
      var currentLetter = str.substr(i,1); //get each letter
      //console.log("curL",currentLetter);
      for(var t = 0; t < vowelArray.length;t++) {//cycle through vowel array
        if(vowelArray[t] === currentLetter) {//is currentLetter the vowel from this array Pos?
          vowelNum++;//increment if so
        }
      }
    }
      return vowelNum;
  } else {
      return null;
    }
 }

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 function timeConvert(str) {
  if(typeof str === "number") { //return null if not #
    //separate hours
    var hours = Math.floor(str/60);
    console.log("hours",hours);
    //separate minutes
    var minutes = str % 60;
    console.log("minutes",minutes);
    //concatenate into time hours:minutes
    var time = hours + ":" + minutes;
    console.log("time",time);
    //convert into string 
    time = time.toString();
    console.log(time);
    return time;
  } else {
    return null;
  }
  
 }


 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */


/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: null
}
