$(document).ready(function(){

// $("#search-content").hide();
var APIKey = "ae2b16a8-cb46-4eb5-9ede-3215ef2cb615";
var userInput;

function clickedSearchBtn(event){
  $(".btn").on("click", function(){
    $("#word-text").addClass("scale-in");
    // event.preventDefault();
    console.log("working");
    $("#search-content").show();
    userInput = $("#word-search").val().trim();
    // $("#word-text").text(userInput);  
    // $("#word-text").append(userInput);  
    console.log(userInput);
    
    var queryURLDictionary = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+ userInput+ "?key=" +APIKey;
    $.ajax({
        url: queryURLDictionary,
        method:"GET"
    }).then(function(response){
      console.log(queryURLDictionary);
      console.log(response);
    });
 for (var i =0; i<10; i++){


    // var definition = response.
    // var origin = reponse.
    // var synonmys = response.
    // var antonyms = reponse.
    $("#word-text").text(userInput); 
    // $("#definition-text").append(definition);
    // $("#origin-text").append(origin);
    // $("#synonym-text").append(synonyms);
    // $("#antonym-text").append(antonyms);
 }
  
     

});  
}

clickedSearchBtn();


});