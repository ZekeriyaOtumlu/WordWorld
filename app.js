$(document).ready(function(){

$("#search-content").hide();
var APIKey = "ae2b16a8-cb46-4eb5-9ede-3215ef2cb615";
var queryURLBase = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + userInput + "?key=" +APIKey;
var userInput;

function clickedSearchBtn(event){
    $(".btn").on("click", function(){
    // event.preventDefault();
      console.log("working");
    $("#search-content").show();
    userInput = $("#word-search").val().trim();
    // $("#word-text").text(userInput);  
    // $("#word-text").append(userInput);  
    console.log(userInput);

    $.ajax({
        url: queryURLBase,
        method:"GET"
    }).then(function(response){
      console.log(response);
    });
 for (var i =0; i<10; i++){


    // var definition = response.
    // var origin = reponse.
    // var synonmys = response.
    // var antonyms = reponse.
    $("#word-text").text(userInput); 

 }
  
     

});  
}

clickedSearchBtn();


});