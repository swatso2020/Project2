$('#addRecipe').click(function () {
  $('#hiddenData').css("display", "");


})


var data = {
  'strCategory1': 'Beef',
  'strCategor2': 'Chicken',
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
if(document.querySelectorAll("input#inlineFormIngredient")[20]){

  $("#ingredients").append(`<strong >Only allowed to add up to 20 ingredients</strong>`);
}else{
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

$("#dishSubmitted").click(function (e) {
  e.preventDefault();

for(i=0; i < 20; i++){
  if(document.querySelectorAll("input#inlineFormAmount")[i].value || 
  document.querySelectorAll("input#inlineFormIngredient")[i].value){
  }else{
    break;
  }
  console.log(number1, number2)
}
})

