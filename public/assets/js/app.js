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
      for(let j = 0;j < 3; j++) {
        console.log(result.meals[Math.floor(Math.random() * 11)], "line 16");
        
        // console.log(result.meals[Math.floor(Math.random() * 11)].strMeal, "IdMeal")
    }


  }
  });

}