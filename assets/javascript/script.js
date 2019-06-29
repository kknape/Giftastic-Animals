//My javascript file

// page displays with buttons labeled with animals
//Add an animal - text field and submit button

//create an array of the animals
//traverse the array to create animal buttons
//input field with submit button - on click adds animal to the array
//each button links to giphy - displays 10 giphys of that keyword
//clicking the still image toggles to the animated image and vice-versa (thurs class)

var animals = ["Dogs", "Cats", "Penguins", "Ostrich", "Bear", "Hamster", "Birds", "Armadillo", "Cow", "Horse"];

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