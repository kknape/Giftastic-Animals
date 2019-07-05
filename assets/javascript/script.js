//My javascript file
$(document).ready(function(){

//create an array of the animals. These will be buttons displayed when the page loads
var animals = ["Dogs", "Cats", "Penguins", "Ostrich", "Bear", "Hamster", "Birds", "Armadillo", "Cow", "Seal"];

//Function to call animal pics from api
    function displayAnimals(){
        $("#imgSection").empty();
        var animal = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animal+"&api_key=WvmR5JCtXlAswDhoqIJdtS4NfUv0963C&limit=10";
        var images = "";
        var ratings = "";
        var pRate = "";

        $.ajax({ url: queryURL, method: "GET"})
          .then(function(AnimalGifData) {
            //added console log for reference and troubleshooting
            console.log(AnimalGifData);

              for (var i=0; i<AnimalGifData.data.length; i++){

                //create divs to hold rating and image
                  var imgDiv = $("<div class='imgDivs'>");
                
                  //add divs to the image section of the html
                  $("#imgSection").append(imgDiv);

                  //create variable for the rating from api
                  ratings = AnimalGifData.data[i].rating;
                  
                  //create variable to display Rating 
                  var pRate = $("<p class='rating'>").text("Rating: " + ratings);

                  //Display the rating
                  imgDiv.append(pRate);

                  //create an image div
                  images = $("<img>");

                  //give image attributes to show image still and animated
                  images.attr({
                  "src": AnimalGifData.data[i].images.fixed_height_still.url,
                  "data-still": AnimalGifData.data[i].images.fixed_height_still.url, 
                  "data-animate": AnimalGifData.data[i].images.fixed_height.url, 
                  "data-state": "still", 
                  "class": "gif img-fluid",
                      });
                
                  //add images to the page    
                  imgDiv.append(images);
              
            }          
       
//Clicking on gif activates the looping gif and vice-versa
    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
          if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
          } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
          }
      });
    });
}

// creates animal buttons
    function renderButtons(){
          $("#buttons").empty();

          for (var i=0; i<animals.length; i++) {
              var a = $("<button>");
              // Adding a class
              a.addClass("animal btn btn-primary");
              // Adding a data-attribute with a value of the movie at index i
              a.attr("data-name", animals[i]);
              // Providing the button's text with a value of the movie at index i
              a.text(animals[i]);
              // Adding the button to the HTML
              $("#buttons").append(a);
              }
    }

//creates a new animal button when the user enters a new animal in the field
      $("#addAnimal").click(function(event){
          event.preventDefault();

          var animalBtn = $("#button-input").val().trim();
          animals.push(animalBtn);
          $("#button-form").get(0).reset();
          renderButtons();
        })

// On Click of any Animal buttons to see the corresponding animal gifs...Adding a click event listener to all elements with a class of "animal"
    $(document).on("click", ".animal", displayAnimals);

//run the function to create the animal buttons
renderButtons();

});
