const formatJSON = (dataObject) => {
  if (Object.keys(dataObject).length > 0) {
    var returnString = "they want ";
    var subString = "";
    for (var key of Object.keys(dataObject)) {
      if (dataObject[key]){
        subString += key;
        subString += ", ";
      }
    }
    if (subString.length === 0) {
      return "They did not inquire.";
    }
    return returnString + subString;
  } else {
    return "They did not inquire.";
  }
}
// not using real unit testing just in console tests
var testObj1 = {};
var testObj2 = {
  print:true,
  design: false,
  paper: true
};
var testObj3 = {
  "small-order":false,
  "large-order":true
}

var testObj3 = {
  "small-order":false,
  "large-order":false
}


console.log(formatJSON(testObj1));
console.log(formatJSON(testObj2));
console.log(formatJSON(testObj3));
