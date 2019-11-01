$(document).ready(function () {

  // $("#search-content").hide();
  // var APIKeyDef = "ae2b16a8-cb46-4eb5-9ede-3215ef2cb615";
  var userInput;
  var didSearch = false;

   
  function clickedSearchBtn(event) {
    $("#search-button").on("click", function () {
      
      if(didSearch === true)
      {
        scaleOut();
        setTimeout(function () {
        clearStuff();
        theFunction();
        }, 1000);
      }
      else {
        theFunction();
      }
      
    
    });


   /* var APIKeyThesaurus = "2e33d79f-c228-40c0-9dfb-171729314d2a";
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

  });*/


    // var antonyms = reponse.
   
    $("#word-text").text(userInput); 
    // $("#definition-text").append(definition);
    // $("#origin-text").append(origin);
    // $("#synonym-text").append(synonyms);
    // $("#antonym-text").append(antonyms);
 
  

}


function scaleIn(){
  $("#word-text").addClass("scale-in");
  $("#definition").addClass("scale-in");
  $("#type").addClass("scale-in");
  $("#synonyms").addClass("scale-in");
  $("#antonyms").addClass("scale-in");
  $("#image-content").addClass("scale-in");
}

function scaleOut(){
  $("#word-text").removeClass("scale-in");
  $("#definition").removeClass("scale-in");
  $("#type").removeClass("scale-in");
  $("#synonyms").removeClass("scale-in");
  $("#antonyms").removeClass("scale-in");
  $("#image-content").removeClass("scale-in");
}

function clearStuff(){
  $("#image-content").empty();
}

function theFunction(){
  userInput = $("#word-search").val().trim();
      // event.preventDefault();
      console.log("working");
      $("#search-content").show();
      console.log(userInput);
      $(".card-content").empty();

      
      // var queryURLDictionary = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+ userInput+ "?key=" +APIKeyDef;
      // $.ajax({
      //     url: queryURLDictionary,
      //     method:"GET"
      // }).then(function(response){
      //   console.log(queryURLDictionary);
      //   console.log(response);
      // });
      var APIKeyThesaurus = "2e33d79f-c228-40c0-9dfb-171729314d2a";
      var queryURLThesaurus = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" + userInput + "?key=" + APIKeyThesaurus;
      $.ajax({
        url: queryURLThesaurus,
        method: "GET"
      }).then(function (response) {
        console.log(queryURLThesaurus);
        console.log(response);
        var resultDef = "";
  
          for (var i =0; i<2; i++){
          // var definition = response[0].shortdef[i];
          if(response[0].shortdef[i] === undefined)
            break;
          resultDef = "&bull;" + response[0].shortdef[i] + "";
          $("#definition-content").append(resultDef + "<br>");
        }
        var resultSyn = " ";
        for (var a = 0; a < 1; a++) {
          resultSyn = "&bull;" + response[0].meta.syns[a] + " ";
          $("#synonym-content").append(resultSyn);
        }

        var resultAnt = " ";
        for (var b = 0; b < 1; b++) {
          // resultAnt += "-" + response[0].meta.ants[b] + " ";
          if(response[0].meta.ants[b] === undefined)
          {
            $("#antonym-content").append("N/A");
            break;
          }
          resultAnt = "&bull;" + response[0].meta.ants[b];
          $("#antonym-content").append(resultAnt);
        }
        var resultType = "";
        // for(var c = 0; c<response[0].def.fl.length; c++){
        resultType += "" + response[0].fl + " ";
        $("#type-content").append(resultType);
        // }

      });

      var word = userInput.toLowerCase();
      var firstLetter =  word.charAt(0).toUpperCase();
      word = word.substring(1,word.length);
      $("#word-text").text(firstLetter + word);

      var apiKeyPixabay = "14072686-25afeb91b6b45125a1704a8a5";
      var queryURLPixabay = "https://pixabay.com/api/?key=" + apiKeyPixabay + "&q=" + userInput + "&image_type=photo";
    
      $.ajax({
        url: queryURLPixabay,
        method: "GET"
      }).then(function (response) {
    
        console.log(queryURLPixabay);
        console.log(response);
    
    
        var imageURL;
        
      
        console.log(imageURL);
        // create image element
        for (var z = 0; z<3; z++) {
          imageURL = response.hits[z].largeImageURL;
          var wordImageDiv = $("<div>");
          var wordImage = $("<img>").attr('src', imageURL);
          wordImage.addClass("word-image img-fluid img-thumbnail rounded");
          // imageURL= response.hits[0].pageURL;
          $(wordImage).append(imageURL);
          $(wordImageDiv).append(wordImage);
          $("#image-content").append(wordImageDiv);
          // alert("hello");
    
    
        }

        
      });
<<<<<<< HEAD
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


    // var antonyms = reponse.
   
    $("#word-text").text(userInput); 
    // $("#definition-text").append(definition);
    // $("#origin-text").append(origin);
    // $("#synonym-text").append(synonyms);
    // $("#antonym-text").append(antonyms);
 
=======

      didSearch = true;
      scaleIn();
>>>>>>> origin
}

  clickedSearchBtn();
  // $(document).on("click", ".word-image", displayImage);


});