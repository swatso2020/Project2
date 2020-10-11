console.log('works')

$("#search").click(function (event) {
  event.preventDefault();
  let userInput = $("#search-input").val();
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

      for (let j = 0; j < 3; j++) {


        console.log(result.meals[j].strMeal);
        console.log(result.meals[j].idMeal);
        let randomNumber = [Math.floor(Math.random() * 11)]
        let mealTile = $("<a>");
        let mealName = result.meals[randomNumber].strMeal;
        let mealID = result.meals[randomNumber].idMeal;

        mealTile.attr("href", "#!");
        mealTile.addClass("list-group-item list-group-item-action");
        mealTile.html(mealName);
        mealTile.attr("onclick", "ajaxCallRecipe('" + mealID + "')");

        // https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}

        $("#recipeList").append(mealTile);

      }
    }
  });
}

function ajaxCallRecipe(mealID) {
  // let ajaxCall = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  // $.ajax({

  //   url: ajaxCall, success: function (result) {

  //     $(".card-header").html(result.meals[0].strMeal);
  //     console.log(result, 'line 50')
  //     $(".card-text").html(result.meals[0].strInstructions);
      //console.log(mealID);
      let ajaxCall = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
      $.ajax({

        url: ajaxCall, success: function (result) {
          // result = JSON.stringify(result)
          // result = JSON.parse(result)
          //console.log(result.meals);
          $("#image-div").empty();
          var foodImg = $("<img>")
            .attr("src", result.meals[0].strMealThumb).addClass("food-image");
          document.getElementById("recipeDetail").style.display = "block";
          $("#image-div").append(foodImg);

          $("#recipeTitle").html(result.meals[0].strMeal);

          $("#instructions").html(result.meals[0].strInstructions);


          const ingredients = [];
          for (let i = 1; i <= 20; i++) {

            if (result.meals[0][`strIngredient${i}`] === "") {
              // console.log('created ingredients array of objects with all showing together and stopping at the right time')
              // ingredientsDisplay();
              break;
            } else {
              ingredients.push({
                name: result.meals[0][`strIngredient${i}`],
                measure: result.meals[0][`strMeasure${i}`]
              })
            }
          }

          renderIngredients(ingredients);
        }
      })
    //}
  // })
}
function renderIngredients(ingredients){

    $("#ingredientsList").empty();

    for(let i = 0; i<ingredients.length; i++){
    // console.log(ingredients);
    let ingredientItem = $("<li>");
    let itemText = ingredients[i].measure + " " + ingredients[i].name;
    ingredientItem.html(itemText);

    $("#ingredientsList").append(ingredientItem);

  }
}

function randomRecipe() {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/random.php`
  $.ajax({

    url: ajaxCall, success: function (result) {
      // result = JSON.stringify(result)
      // result = JSON.parse(result)
      //console.log(result)
      $("#image-div").empty();
      $("#instructions").empty();
      var foodImg = $("<img>")
        .attr("src", result.meals[0].strMealThumb).addClass("food-image");
      document.getElementById("recipeDetail").style.display = "block";
      $("#image-div").append(foodImg);

      $("#recipeTitle").html(result.meals[0].strMeal);

      $("#instructions").html(result.meals[0].strInstructions);

      const ingredients = [];
      for (let i = 1; i <= 20; i++) {

        if (result.meals[0][`strIngredient${i}`] === "") {
          // console.log('created ingredients array of objects with all showing together and stopping at the right time')
          // ingredientsDisplay();
          break;
        } else {
          ingredients.push({
            name: result.meals[0][`strIngredient${i}`],
            measure: result.meals[0][`strMeasure${i}`]
          })
        }
      }

      renderIngredients(ingredients);

    }
  });
}