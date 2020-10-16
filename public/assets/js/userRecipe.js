
$('#addRecipe').click(function () {
  $('#hiddenData').css("display", "");
})

// Object that holds all of users data


var data = {
  'strCategory1': 'Beef',
  'strCategory2': 'Chicken',
  'strCategory3': 'Dessert',
  'strCategory4': 'Lamb',
  'strCategory5': 'Miscellaneous',
  'strCategory6': 'Pasta',
  'strCategory7': 'Pork',
  'strCategory8': 'Seafood',
  'strCategory9': 'Side',
  'strCategory10': 'Starter',
  'strCategory11': 'Vegan',
  'strCategory11': 'Vegetarian',
  'strCategory11': 'Breakfast',
  'strCategory11': 'Goat',
}

var s = $('#inputGroupSelect01');

for (var val in data) {
  $('<option />', { value: val, text: data[val] }).appendTo(s);

}

// End of dropdown

$("#addIngredient").on('click', function (e) {
  e.preventDefault();

  console.log('it runs');
  if (document.querySelectorAll("input#inlineFormIngredient")[3]) {

    $("#ingredients").append(`<strong >Only allowed to add up to 20 ingredients</strong>`);
  } else {
    $("#ingredients").append(
      `<div class="form-row align-items-center">
      <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">ingredient</label>
          <input type="text" class="form-control mb-2" id="inlineFormIngredient"
              placeholder="Ingredient">
      </div>
      <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">amount</label>
          <div class="input-group mb-2">
              <div class="input-group-prepend">
              </div>
              <input type="text" class="form-control" id="inlineFormAmount"
                  placeholder="Amount">
          </div>
      </div>
  </div>`
    )
  }
})

let usersIngredients = {};
// let ingredientAndAmount;
$("#dishSubmitted").click(function (e) {
  e.preventDefault();

  for (i = 0; i < 21; i++) {
    if (document.querySelectorAll("#inlineFormAmount")[i] ||
      document.querySelectorAll("#inlineFormIngredient")[i]) {
      //alert("Thank you! Your dish has been submitted.");
    //window.location.replace("/home");
      usersIngredients["measure" + i] = document.querySelectorAll("#inlineFormAmount")[i].value;
      usersIngredients["mealIngr" + i] = document.querySelectorAll("#inlineFormIngredient")[i].value;

     


    } else {
//alert("Please fill in any empty forms.")
      break;
    }

  }
  let mealCategory = $('#inputGroupSelect01').find(":selected").text()
  let mealName = $('#strMeal').val();
  let mealInstr = $('#strInstructions').val();

  let usersMeal = {
    mealName,
    mealCategory,
    mealInstr,
    ...usersIngredients
  }
  console.log(usersMeal)



})
