$("#search").click(function (e) {
  e.preventDefault();
  let userInput = $("#search-input").val();
  ajaxCallSearch(userInput);
});

let favRecipes = []

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
      document.getElementById("recipeDetail").style.display="block";
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
      document.getElementById("recipeDetail").style.display="block";
      $(".card-header").html(result.meals[0].strMeal);

      $(".card-text").html(result.meals[0].strInstructions);

    }
  });
}


//this function will be used to get 5 or 7 of of your favorite meals
function getFavRecipies() {
  $.get("/api/favrecipies", function(data) {
    favRecipes = data;
    console.log(favRecipes)
    //initializeRows();
  });
}



//this function will be used to push a recipie to the database if the user wants to keep
function saveRecipe() {

//   //api from meal database that returns a random meal with 
  let ajaxCall = `https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/random.php`
  $.ajax({
    type: "GET",
    url: ajaxCall,
  })
  .then(function(response) {   
    var userRecipies = {
      mealid: response.meals[0].idMeal,
      mealname: response.meals[0].strMeal,
      mealcategory: response.meals[0].strCategory,
      mealVideo:response.meals[0].strYoutube,
      mealInstr:response.meals[0].strInstructions

    };
    console.log(response)
    console.log(userRecipies)
   $.post("/api/favRecipie", userRecipies);
  // console.log(userRecipie)
});
};

