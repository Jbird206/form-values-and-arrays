$(document).ready(function() {

  var animalArry = [];

  $("#theform").submit(function(event) {
    // var beverage = $("#cola").val();

    var person1Input = $("input#person1").val();
    var cat = "cat";
    animalArry.push(person1Input, cat);

    console.log(animalArry);

    $("#result").text(animalArry);

    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    // var answers = (beverage + person1Input);
// answers.push();


// $(".beverage").text(answers);
//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);
//
//     $("#story").show();

    event.preventDefault();
  });
});
