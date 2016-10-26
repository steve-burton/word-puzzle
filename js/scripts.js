$(document).ready(function() {
  $("form#puzzle").submit(function(event) {

    var inputSentence = $("input#sentence").val();
    var puzzle = insertDashes(inputSentence);
    var puzzle = puzzle.join(" ");

    $("span").text(puzzle);
    event.preventDefault();
  });
});

var puzzle = [];
var makeArray = function(sentence) {
  var sentenceArray = sentence.split("");
  return sentenceArray;
}

var insertDashes = function(sentence) {
  var sentenceArray2 = makeArray(sentence);

    for (var count = 0; count < sentenceArray2.length; count += 1) {
      if (sentenceArray2[count] === "a" || sentenceArray2[count] === "e" || sentenceArray2[count] === "i" || sentenceArray2[count] === "o" || sentenceArray2[count] === "u") {
        sentenceArray2[count] = "-";
      }
    }
    return sentenceArray2;
  }
