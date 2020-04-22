//config
var progressLength = 120

var testArray = [];
// var randomArrayLength = Math.ceil(Math.random() * 500);
var randomArrayLength = 2000;

for (var i = randomArrayLength; i > 0; i--) {
  testArray.push(Math.ceil(Math.random() * 200));
}

console.log(testArray, randomArrayLength);

//sorting

function sortArray(arr, arrayLength) {
  progress.style.width = progressLength - barWidth*arrayLength + "em";
  if (arrayLength > 0) {
    var highValueIndex = 0;
    var swapped = false;
    for (var i = 0; i < arrayLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        arr.splice(i, 1, arr.splice(i + 1, 1, arr[i])[0]);
        swapped = true;
        graph.children[i].style.height = arr[i]*barWidth + "em";
        graph.children[i + 1].style.height = arr[i + 1]*barWidth + "em";
      }
      if (arr[i] > arr[highValueIndex]) {
        highValueIndex = i;
      }
    }
    if (swapped) {
      arr.splice(arrayLength - 2, 0, arr.splice(highValueIndex, 1)[0]);
      for(var i = highValueIndex; i < arrayLength - 1; i++) {
        graph.children[i].style.height = arr[i]*barWidth + "em";
      }
    }
    else {
      clearInterval(sortInterval);
    }
    return arr;
  }
  clearInterval(sortInterval);
}

var graph = document.querySelector("#graph");
var progress = document.querySelector("#progress");
for (var i = 0; i < testArray.length; i++) {
  var bar = document.createElement("div");
  bar.classList.add("bar");
  graph.appendChild(bar);
}
var bars = document.querySelectorAll(".bar")

var functionArray = [testArray, testArray.length];
if(testArray.length > 0) {
  var barWidth = progressLength/testArray.length;
  for(var i = 0; i < bars.length - 1; i++) {
    bars[i].style.width = barWidth + "em";
  }

  var sortInterval = setInterval(function() {
    functionArray = [
      sortArray(functionArray[0], functionArray[1]),
      functionArray[1] - 2
    ];
  }, 200);
}
else {
  alert("Array length is zero, and that is not allowed.");
}