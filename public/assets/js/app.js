$("#search").click(function (e) {
  e.preventDefault();
  let userInput = $("#search-input").val();
  ajaxCallSearch(userInput);
});


function ajaxCallSearch(userInput) {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`
  $.ajax({

    url: ajaxCall, success: function (result) {
      result = JSON.stringify(result)
      result = JSON.parse(result)
      console.log(result)

      $(".list-group").empty();

      for (let j = 0; j < 3; j++) {

        //console.log(result.meals[Math.floor(Math.random() * 11)], "line 16");      
        //console.log(result.meals[Math.floor(Math.random() * 11)].strMeal, "IdMeal");

        console.log(result.meals[j].strMeal);
        console.log(result.meals[j].idMeal);

        let mealTile = $("<a>");
        let mealName = result.meals[j].strMeal;
        let mealID = result.meals[j].idMeal;

        mealTile.attr("href", "#!");
        mealTile.addClass("list-group-item list-group-item-action");
        mealTile.html(mealName);
        mealTile.attr("onclick", "ajaxCallRecipe('" + mealID + "')");

        //  https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}

        $(".list-group").append(mealTile);

      }
    }
  });
}

function ajaxCallRecipe(mealID) {
  console.log(mealID);
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  $.ajax({

    url: ajaxCall, success: function (result) {
      // result = JSON.stringify(result)
      // result = JSON.parse(result)
      console.log(result.meals);
      $("#image-div").empty();
      document.getElementById("recipeDetail").style.display="block";
      
      
      $("#image-div").append(foodImg);
      $(".card-header").html(result.meals[0].strMeal);

      $(".card-text").html(result.meals[0].strInstructions);
      
    }
  });
}

function randomRecipe() {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/random.php`
  $.ajax({

    url: ajaxCall, success: function (result) {
      // result = JSON.stringify(result)
      // result = JSON.parse(result)
      console.log(result)
      $("#image-div").empty();
      var foodImg = $("<img>")
      .attr("src", result.meals[0].strMealThumb).addClass("food-image");
      document.getElementById("recipeDetail").style.display="block";
      $("#image-div").append(foodImg);
      
      $(".card-header").html(result.meals[0].strMeal);

      $(".card-text").html(result.meals[0].strInstructions);

    }
  });
}