//My javascript file

// page displays with buttons labeled with animals
//Add an animal - text field and submit button

//create an array of the animals
//traverse the array to create animal buttons
//input field with submit button - on click adds animal to the array
//each button links to giphy - displays 10 giphys of that keyword
//clicking the still image toggles to the animated image and vice-versa (thurs class)

//create an array of the animals
var animals = ["Dogs", "Cats", "Penguins", "Ostrich", "Bear", "Hamster", "Birds", "Armadillo", "Cow", "Horse"];

function displayAnimals(){
    var animal = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animal+"&api_key=WvmR5JCtXlAswDhoqIJdtS4NfUv0963C&limit=10"


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var animalPic = $("<img>");

        animalPic.addClass("src" );
   //     document.html(animalPic);
 //       var sourceImg = response.images.fixed_height_still;
      });
}

//$(".animals").click(function() {
  //  displayAnimals();
 //   alert("The paragraph was clicked.");
 // });

  
      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".animal", displayAnimals);

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    //if (state === "still") {
   //   $(this).attr("src", $(this).attr("data-animate"));
   //   $(this).attr("data-state", "animate");
   // } else {
  //    $(this).attr("src", $(this).attr("data-still"));
   //   $(this).attr("data-state", "still");
 //   }



//create an array of the animals

// page displays with buttons labeled with animals
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
//on click event to create a new animal button
$("#addAnimal").click(function(event){
    event.preventDefault();

    var animalBtn = $("#button-input").val().trim();
    animals.push(animalBtn);

     renderButtons();
  });

  renderButtons();