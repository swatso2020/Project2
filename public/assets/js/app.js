$("#meal-search").click(function (e) {
  e.preventDefault();
  let userInput = $("#fname").val();
  ajaxCallSearch(userInput);
});


function ajaxCallSearch(userInput) {
  let ajaxCall = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`
  $.ajax({
    url: ajaxCall, success: function (result) {
      
    }
  });
}