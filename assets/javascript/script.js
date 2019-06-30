//My javascript file

//create an array of the animals. These will be buttons displayed when the page loads
var animals = ["Dogs", "Cats", "Penguins", "Ostrich", "Bear", "Hamster", "Birds", "Armadillo", "Cow", "Seal"];

//Function to call animal pics from api
    function displayAnimals(){
        $("#animalPics").empty();
        var animal = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animal+"&api_key=WvmR5JCtXlAswDhoqIJdtS4NfUv0963C&limit=10";
        var image = "";

        $.ajax({ url: queryURL, method: "GET"})
          .then(function(AnimalGifData) {

              for (var i=0; i<AnimalGifData.data.length; i++){

              //add images from api call to the page
              images = $("<img>");
              images.attr({"src": AnimalGifData.data[i].images.fixed_height_still.url, "data-still": AnimalGifData.data[i].images.fixed_height_still.url, "data-animate": AnimalGifData.data[i].images.looping.mp4, "data-state": "still"});
              images.addClass("animalPics");
              $("#animalPics").append(images);
                      }
              });
         
//Clicking on gif activates the looping gif and vice-versa
    $("#animalPics").on("click", function() {
      //alert("This is an aleart");
        var state = $(images).attr("data-state");
          if (state === "still") {
                $(images).attr("src", $(images).attr("data-animate"));
                $(images).attr("data-state", "animate");
          } else {
                $(images).attr("src", $(images).attr("data-still"));
                $(images).attr("data-state", "still");
          }
});
}
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

//creates a new animal button when the user enters a new animal in the field
      $("#addAnimal").click(function(event){
          event.preventDefault();

          var animalBtn = $("#button-input").val().trim();
          animals.push(animalBtn);

          renderButtons();
        })

// On Clikc of any Animal button...Adding a click event listener to all elements with a class of "animal"
    $(document).on("click", ".animal", displayAnimals);

renderButtons();

