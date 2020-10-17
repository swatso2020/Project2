

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


        // console.log(result.meals[j].strMeal);
        // console.log(result.meals[j].idMeal);
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
        // console.log(mealtile)
        // console.log(mealName)
        // console.log(mealID)
      
      }
     
    }
  });
}

function ajaxCallRecipe(mealID) {
 
      let ajaxCall = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
      $.ajax({

        url: ajaxCall, success: function (result) {
          $("#image-div").empty();
          //show the favorites button, so the user is able to save another favorite
          $('#addToFavorites').show()
          //attribute to store meal id
          $('#addToFavorites').attr("meal",mealID)
          var foodImg = $("<img>")
            .attr("src", result.meals[0].strMealThumb).addClass("food-image");
          document.getElementById("recipeDetail").style.display = "block";
          document.getElementById("review-button").style.display = "block";
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
          $('#addToFavorites').click(function(){
          var userRecipies = {
            mealid: result.meals[0].idMeal,
            mealname: result.meals[0].strMeal,
            mealInstr: result.meals[0].strInstructions,
            mealThumb: result.meals[0].strMealThumb,
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
         
            console.log(userRecipies)
            $("#addToFavorites").hide();
           $.post('/api/favRecipie', userRecipies).then();
           userRecipies={}
          });
        }
      })
}
function renderIngredients(ingredients){
    $("#ingredientsList").empty();

    for(let i = 0; i<ingredients.length; i++){
     
   
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
      document.getElementById("review-button").style.display = "block";
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


//function to save a recipie in the database. 
// function saveRecipe() {
//   //api from meal database that returns a random meal to populate database. This wont be needed once save button is avaiable
//     let ajaxCall = `https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/random.php`
//     $.ajax({
//       type: 'GET',
//       url: ajaxCall,
//     })
//     .then(function(response) {
     
//       var userRecipies = {
//         mealid: response.meals[0].idMeal,
//         mealname: response.meals[0].strMeal,
//         mealInstr: response.meals[0].strInstructions,
//         mealcategory: response.meals[0].strCategory,
//       };
//       console.log(response)
//       console.log(userRecipies)
//      $.post('/api/favRecipie', userRecipies);
//     // console.log(userRecipie)
//   });
//   };



  $("#review").click(function (event) {
    event.preventDefault();
    document.getElementById("review-form").style.display = "block";
    document.getElementById("review").style.display = "none";
   $('#search').click(function(){
    let userInput = {
      //id:
      userRev: document.getElementById('review-input').value
    }
    console.log(userInput)
    $('#review-input').hide();

  });
    
  });
 


//Test Java Script to test database API's
$("#search").click(function (event) {
    event.preventDefault();
    
  
    console.log(userInput)
   $.post('/api/test', userTest);
  });




saveRecipe()
//function to save a recipie in the database. based on the random generation
function saveRecipe() {
  //api from meal database that returns a random meal to populate database. This wont be needed once save button is avaiable
    let ajaxCall = `https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/random.php`
    $.ajax({
      type: 'GET',
      url: ajaxCall,
    })
    .then(function(response) {

      var userRecipies = {
        mealid: response.meals[0].idMeal,
        mealname: response.meals[0].strMeal,
        mealThumb: response.meals[0].strMealThumb,
        mealInstr: response.meals[0].strInstructions,
        mealcategory: response.meals[0].strCategory,
        mealIngr1: response.meals[0].strIngredient1,
        mealIngr2: response.meals[0].strIngredient2,
        mealIngr3: response.meals[0].strIngredient3,
        mealIngr4: response.meals[0].strIngredient4,
        mealIngr5: response.meals[0].strIngredient5,
        mealIngr6: response.meals[0].strIngredient6,
        mealIngr7: response.meals[0].strIngredient7,
        mealIngr8: response.meals[0].strIngredient8,
        mealIngr9: response.meals[0].strIngredient9,
        mealIngr10: response.meals[0].strIngredient10
      };
     
     $.post('/api/favRecipie', userRecipies);
  });
  };

  function insertRecipe() {
    //api from meal database that returns a random meal to populate database. This wont be needed once save button is avaiable
      let ajaxCall = `https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/random.php`
      $.ajax({
        type: 'GET',
        url: ajaxCall,
      })
      .then(function(response) {
  
        var insertRecipies = {
          
          mealname: response.meals[0].strMeal,
          mealInstr: response.meals[0].strInstructions,
          mealcategory: response.meals[0].strCategory,
          mealIngr1: response.meals[0].strIngredient1,
          mealIngr2: response.meals[0].strIngredient2,
          mealIngr3: response.meals[0].strIngredient3,
          mealIngr4: response.meals[0].strIngredient4,
          mealIngr5: response.meals[0].strIngredient5,
          mealIngr6: response.meals[0].strIngredient6,
          mealIngr7: response.meals[0].strIngredient7,
          mealIngr8: response.meals[0].strIngredient8,
          mealIngr9: response.meals[0].strIngredient9,
          mealIngr10: response.meals[0].strIngredient10,
          mealIngr11: response.meals[0].strIngredient11,
          mealIngr12: response.meals[0].strIngredient12,
          mealIngr13: response.meals[0].strIngredient13,
          mealIngr14: response.meals[0].strIngredient14,
          mealIngr15: response.meals[0].strIngredient15,
          mealIngr16: response.meals[0].strIngredient16,
          mealIngr17: response.meals[0].strIngredient17,
          mealIngr18: response.meals[0].strIngredient18,
          mealIngr19: response.meals[0].strIngredient19,
          mealIngr20: response.meals[0].strIngredient20,
          measure1: response.meals[0].strMeasure1,
          measure2: response.meals[0].strMeasure2,
          measure3: response.meals[0].strMeasure3,
          measure4: response.meals[0].strMeasure4,
          measure5: response.meals[0].strMeasure5,
          measure6: response.meals[0].strMeasure6,
          measure7: response.meals[0].strMeasure7,
          measure8: response.meals[0].strMeasure9,
          measure10: response.meals[0].strMeasure10,
          measure11: response.meals[0].strMeasure11,
          measure12: response.meals[0].strMeasure12,
          measure13: response.meals[0].strMeasure13,
          measure14: response.meals[0].strMeasure14,
          measure15: response.meals[0].strMeasure15,
          measure16: response.meals[0].strMeasure16,
          measure17: response.meals[0].strMeasure17,
          measure18: response.meals[0].strMeasure18,
          measure19: response.meals[0].strMeasure19,
          measure20: response.meals[0].strMeasure20,
        };
       
       $.post('/api/insertRecipie', insertRecipies);
    });
    };







// saveRecipe2(results)
// //function to save a recipie in the database. based on the random generation
// function saveRecipe2(mealID) {
//   //api from meal database that returns a random meal to populate database. This wont be needed once save button is avaiable
//   let ajaxCall = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
//   $.ajax({
//     type: 'GET',
//     url: ajaxCall,
//   })
//   .then(function(response) {
//     console.log("this is the saverecipie function")
//     console.log(response)
//   })
//   }

  //console.log("This is item text"+ itemText)
  //console.log("This isi the ingredients"+ ingredients)
  //console.log(ingredients[i].measure)
  //console.log(ingredients[i].name)
  



// test send user input
getFavorites()
  function getFavorites() {
    //api
      let ajaxCall = `/api/recipies`
      $.ajax({
        type: 'GET',
        url: ajaxCall,
      })
      .then(function(response) {
        console.log(response)

      })

    };


