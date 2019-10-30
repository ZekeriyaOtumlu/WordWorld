$(document).ready(function(){

// $("#search-content").hide();
var APIKeyDef = "ae2b16a8-cb46-4eb5-9ede-3215ef2cb615";
var userInput;

function clickedSearchBtn(event){
  $("#search-button").on("click", function(){
    $("#word-text").addClass("scale-in");
    // event.preventDefault();
    console.log("working");
    $("#search-content").show();
    userInput = $("#word-search").val().trim();
    // $("#word-text").text(userInput);  
    // $("#word-text").append(userInput);  
    console.log(userInput);
    
    var queryURLDictionary = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+ userInput+ "?key=" +APIKeyDef;
    $.ajax({
        url: queryURLDictionary,
        method:"GET"
    }).then(function(response){
      console.log(queryURLDictionary);
      console.log(response);
    });
    var APIKeyThesaurus = "2e33d79f-c228-40c0-9dfb-171729314d2a";
    var queryURLThesaurus = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+userInput+ "?key=" +APIKeyThesaurus;
    $.ajax({
      url: queryURLThesaurus,
      method:"GET"
  }).then(function(response){
    console.log(queryURLThesaurus);
    console.log(response);
    var result = "";
    for(var i =0; i<response[0].shortdef.length; i++){
      // var definition = response[0].shortdef[i];
      result += "-" + response[0].shortdef[i] +"";
      $("#definition-content").append(result+"<br>");
    }

  });

   
   
  // for (var i =0; response[0].)
  //   var type = reponse[0].def.fl;
  //   var synonmys = response[0].meta.syns[i];
    // var antonyms = reponse.
   
    $("#word-text").text(userInput); 
    // $("#definition-text").append(definition);
    // $("#origin-text").append(origin);
    // $("#synonym-text").append(synonyms);
    // $("#antonym-text").append(antonyms);
 
  
});  
}

clickedSearchBtn();


});