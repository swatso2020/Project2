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

        console.log(result.meals[Math.floor(Math.random() * 11)], "line 16");      
        console.log(result.meals[Math.floor(Math.random() * 11)].strMeal, "IdMeal");
        
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
      // console.log(result.meals, 'line 53');

      $(".card-header").html(result.meals[0].strMeal);

      $(".card-text").html(result.meals[0].strInstructions);

      const ingredients = [];
      for (let i = 1; i <= 20; i++) {

        if (result.meals[0][`strIngredient${i}`] === "") {
          console.log('created ingredients array of objects with all showing together and stopping at the right time')
          ingredientsDisplay();
          return
        } else {
          ingredients.push({
            name: result.meals[0][`strIngredient${i}`],
            measure: result.meals[0][`strMeasure${i}`]
           
          })

        }

      }

      function ingredientsDisplay(){
      console.log(ingredients, 'ingredients')
      }
      //console.log('test', result.meals[0])
      // for (const property in result.meals[0]) {
      //   // let str = property in result.meals[0];

      //   // console.log(`${property}: ${result.meals[0][property][strMeasure1]}`)
      //   console.log(`${property}: ${result.meals[0][property]}`)
      //   if (result.meals[0][property] === "") {
      //     loopMeasure();
      //     return
      //     console.log('line 66')

      //   }
      //   function loopMeasure(){
      //     for (const property in result.meals[0]) {
      //       console.log('line 67', result.meals[0].strMeasure1)
      //     }
      //   }
      //   // JSON.parse(result.meals[0][property])
      //   // console.log(JSON.parse(result.meals[0][property]))
      //   // console.log('line 62', len(result.meals[0][property]) > 3 )
      //   //  {  if(result.meals[0][property] == true)
      //   //           console.log(`${property}: ${result.meals[0][property]}`);
      //   //         }
      // }
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
