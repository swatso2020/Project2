console.log('works')


$("#search").click(function (event) {
  event.preventDefault();
  let userInput = $("#search-input").val();
  document.getElementById("recipeList").style.display = "block";
  document.getElementById("favorite-results").style.display = "none";
  document.getElementById("review-text").style.display = "none";
  document.getElementById("faves").style.display = "inline";
  document.getElementById("add").style.display = "inline";
  document.getElementById("add").style.display = "inline";

  ajaxCallSearch(userInput);
});

$("#search-input").keypress(function (event) {
  // if the key pressed is the enter key
  if (event.which == 13) {
    $("#search").trigger("click");
  }
});


function ajaxCallSearch(userInput) {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`
  $.ajax({

    url: ajaxCall, success: function (result) {
      result = JSON.stringify(result)
      result = JSON.parse(result)
      //console.log(result)

      $("#recipeList").empty();
      let mealId;
      for (let j = 0; j < 3; j++) {
        let randomNumber = [Math.floor(Math.random() * 11)]
        let mealTile = $("<a>");
        let mealName = result.meals[randomNumber].strMeal;
        mealId = result.meals[randomNumber].idMeal;

        mealTile.attr("href", "#ingredientsTitle");
        mealTile.addClass("list-group-item list-group-item-action");
        mealTile.html(mealName);
        mealTile.attr("id", `${mealId}`);

        // https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}

        $("#recipeList").append(mealTile);

      }
      $("#recipeList a").on("click", function (event) {
       event.preventDefault();
        $("#recipeDetail").empty
        let ajaxCaller = $(this).attr("id");
        ajaxCallRecipe(ajaxCaller)
       
      });
    }
  });
}

function ajaxCallRecipe(mealId) {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  $.ajax({
    url: ajaxCall, success: function (result) {

      
      console.log(result)
      $("#image-div").empty();
      //show the favorites button, so the user is able to save another favorite
      $('#addToFavorites').show()
      //attribute to store meal id
      //$('#addToFavorites').attr("meal", mealid)
      var foodImg = $("<img>")
        .attr("src", result.meals[0].strMealThumb).addClass("food-image");
      document.getElementById("recipeDetail").style.display = "block";
      document.getElementById("review").style.display = "inline";


      //hiding and showing review, favorites and add recipe data

      document.getElementById("submit-btn").style.display = "none";
      document.getElementById("faves").style.display = "inline";
      document.getElementById("add").style.display = "inline";
      document.getElementById("review-text").style.display = "none";




      $("#image-div").append(foodImg);
      $("#recipeTitle").html(result.meals[0].strMeal);
      $("#instructions").html(result.meals[0].strInstructions);
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (result.meals[0][`strIngredient${i}`] === "") {

          break;
        } else {
          ingredients.push({
            name: result.meals[0][`strIngredient${i}`],
            measure: result.meals[0][`strMeasure${i}`]
          })
        }
      }

      renderIngredients(ingredients);

      //Object to store response from results. When the favorites button is clicked, this will be sent to db
      var userRecipies = {
        mealid: result.meals[0].idMeal,
        mealname: result.meals[0].strMeal,
        mealInstr: result.meals[0].strInstructions,
        mealcategory: result.meals[0].strCategory,
        mealIngr1: result.meals[0].strIngredient1,
        mealIngr2: result.meals[0].strIngredient2,
        mealIngr3: result.meals[0].strIngredient3,
        mealIngr4: result.meals[0].strIngredient4,
        mealIngr5: result.meals[0].strIngredient5,
        mealIngr6: result.meals[0].strIngredient6,
        mealIngr7: result.meals[0].strIngredient7,
        mealIngr8: result.meals[0].strIngredient8,
        mealIngr9: result.meals[0].strIngredient9,
        mealIngr10: result.meals[0].strIngredient10
      };
      //when add favorites is clicked userRecipies is sent to db and favorites button is hidden because user can just keep clicking
      $('#addToFavorites').click(function () {
        console.log(userRecipies)
        $("#addToFavorites").hide();
        $.post('/api/favRecipie', userRecipies);

      });
    }
  })
}
function renderIngredients(ingredients) {

  $("#ingredientsList").empty();

  for (let i = 0; i < ingredients.length; i++) {
    let ingredientItem = $("<li>");
    let itemText = ingredients[i].measure + " " + ingredients[i].name;
    ingredientItem.html(itemText);
    $("#ingredientsList").append(ingredientItem);

  }
}

function randomRecipe(mealId) {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/random.php`
  $.ajax({

    url: ajaxCall, success: function (result) {
      $("#image-div").empty();
      $("#instructions").empty();
      $("#recipeList").empty();

      //  //show the favorites button, so the user is able to save another favorite
      $('#addToFavorites').show()
      //  //attribute to store meal id
      $('#addToFavorites').attr("meal", mealId)

      var foodImg = $("<img>")
        .attr("src", result.meals[0].strMealThumb).addClass("food-image");
      document.getElementById("recipeDetail").style.display = "block";
      document.getElementById("review").style.display = "inline";
      $("#image-div").append(foodImg);

      $("#recipeTitle").html(result.meals[0].strMeal);

      $("#instructions").html(result.meals[0].strInstructions);

      //hiding and showing review, favorites and add recipe data

      document.getElementById("submit-btn").style.display = "none";
      document.getElementById("faves").style.display = "inline";
      document.getElementById("add").style.display = "inline";
      document.getElementById("review-text").style.display = "none";



      const ingredients = [];
      for (let i = 1; i <= 20; i++) {

        if (result.meals[0][`strIngredient${i}`] === "") {
          break;
        } else {
          ingredients.push({
            name: result.meals[0][`strIngredient${i}`],
            measure: result.meals[0][`strMeasure${i}`]
          })
        }
      }
      var userRecipies = {
        mealid: result.meals[0].idMeal,
        mealname: result.meals[0].strMeal,
        mealInstr: result.meals[0].strInstructions,
        mealcategory: result.meals[0].strCategory,
        mealIngr1: result.meals[0].strIngredient1,
        mealIngr2: result.meals[0].strIngredient2,
        mealIngr3: result.meals[0].strIngredient3,
        mealIngr4: result.meals[0].strIngredient4,
        mealIngr5: result.meals[0].strIngredient5,
        mealIngr6: result.meals[0].strIngredient6,
        mealIngr7: result.meals[0].strIngredient7,
        mealIngr8: result.meals[0].strIngredient8,
        mealIngr9: result.meals[0].strIngredient9,
        mealIngr10: result.meals[0].strIngredient10
      };
      //when add favorites is clicked userRecipies is sent to db and favorites button is hidden because user can just keep clicking
      // $('#addToFavorites').click(function () {
      //   console.log(userRecipies)
      //   $("#addToFavorites").hide();
      //   $.post('/api/favRecipie', userRecipies);

      // });
      renderIngredients(ingredients);

    }
  });

}


//function to save a recipie in the database. 
function saveRecipe() {
  //api from meal database that returns a random meal to populate database. This wont be needed once save button is avaiable
  // let ajaxCall = `https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/random.php`
  $.ajax({
    type: 'GET',
    // url: ajaxCall,
  })
    .then(function (response) {

      var userRecipies = {
        mealid: response.meals[0].idMeal,
        mealname: response.meals[0].strMeal,
        mealInstr: response.meals[0].strInstructions,
        mealcategory: response.meals[0].strCategory,
      };
      console.log(response)
      console.log(userRecipies)
      $.post('/api/favRecipie', userRecipies);
      // console.log(userRecipie)
    });
};



$("#review").click(function (event) {
  // event.preventDefault();
  $("#review-input").val("")
  document.getElementById("submit-btn").style.display = "inline";
  document.getElementById("review-input").style.display = "inline";
  document.getElementById("review-form").style.display = "block";
  document.getElementById("review").style.display = "none";
  document.getElementById("faves").style.display = "none";
  document.getElementById("add").style.display = "none";



});

$("#submit-btn").click(function (event) {
  event.preventDefault();
  document.getElementById("review-text").style.display = "block";
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("review").style.display = "none";
  document.getElementById("review-input").style.display = "none";



  let reviewText = $("#review-input").val();
  $("#user-review").html(`<b>Thank you for your review!</b> <br>` + reviewText);



})

$("#faves").click(function (event) {
  event.preventDefault();
  getFavorites()
  document.getElementById("favorite-results").style.display = "inline";
  document.getElementById("recipeList").style.display = "none";
  document.getElementById("recipeDetail").style.display = "none";
  document.getElementById("review").style.display = "none";
  document.getElementById("faves").style.display = "none";
})
let favoriteChosen;

function getFavorites() {
  //api
  let ajaxCall = `/api/recipies`
  $.ajax({
    type: 'GET',
    url: ajaxCall,
  })
    .then(function (response) {
      console.log(response)
      // Designating 5 Random Favorite recipes a random number and showing them each with options if they are clicked on to display

      //Math.floor(Math.random() * response.length)
      let randomNumber1 = 0
      $("#fav1").text(response[randomNumber1].mealname);
      $("#fav1").click(function () {
        let favoriteChosen = response[randomNumber1]
        displayer(favoriteChosen)
      })

      let randomNumber2 = 1
      $("#fav2").text(response[randomNumber2].mealname);
      $("#fav2").click(function () {
        let favoriteChosen = response[randomNumber2]
        displayer(favoriteChosen)
      })

      let randomNumber3 = 2
      $("#fav3").text(response[randomNumber3].mealname);
      $("#fav3").click(function () {
        let favoriteChosen = response[randomNumber3]
        displayer(favoriteChosen)
      })

      let randomNumber4 = 3
      $("#fav4").text(response[randomNumber4].mealname);
      $("#fav4").click(function () {
        let favoriteChosen = response[randomNumber4]
        displayer(favoriteChosen)
      })

      let randomNumber5 = 4
      $("#fav5").text(response[randomNumber5].mealname);
      $("#fav5").click(function () {
        let favoriteChosen = response[randomNumber5]
        displayer(favoriteChosen)
      })




      // Displaying favorite chosen from above
      function displayer(favoriteChosen) {
        console.log(favoriteChosen, "line 326");
        $("#image-div").empty();
        $("#instructions").empty();
        $("#ingredientsList").empty();
        $("#recipeList").empty();

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {

          if (favoriteChosen[`mealIngr${i}`] === "") {
            break;
          } else {
            ingredients.push({
              name: favoriteChosen[`mealIngr${i}`],
            })
          }
        }
        for (let i = 0; i < ingredients.length; i++) {
          let ingredientItem = $("<li>");
          let itemText = ingredients[i].name;
          ingredientItem.html(itemText);
          $("#ingredientsList").append(ingredientItem);

        }
        //  //show the favorites button, so the user is able to save another favorite
        $('#addToFavorites').show()
        //  //attribute to store meal id
        $('#addToFavorites').attr("meal",favoriteChosen)

        var foodImg = $("<img>")
          .attr("src", foodImg).addClass("food-image");
        document.getElementById("recipeDetail").style.display = "block";
        document.getElementById("review").style.display = "inline";
        $("#image-div").append();

        $("#recipeTitle").html(favoriteChosen.mealname);

        $("#instructions").html(favoriteChosen.mealInstr);

        //hiding and showing review, favorites and add recipe data

        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("faves").style.display = "inline";
        document.getElementById("add").style.display = "inline";
        document.getElementById("review-text").style.display = "none";
      };
    })
};

