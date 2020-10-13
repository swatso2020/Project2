$('#addRecipe').click(function () {
  console.log('testing more');
  $('#hiddenData').css("display", "");


})

// line 70 of recipe.html has a dropdown that this portion populates

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
})

$("#dishSubmitted").click(function (e) {
  e.preventDefault();

  // console.log($("option").val(function(i,val){
  //   console.log(i)

  //   console.log(val)
  //   //return val.toUpperCase();  
  // }))
  // let userCategory = $("#inputGroupSelect01 option:selected" ).text()
  // console.log(userCategory, 'line 69')
  // console.log($("#strInstructions").val())
for(i=0; i < 20; i++){

  let number1 = document.querySelectorAll("input#inlineFormIngredient")[i].value;
  let number2 = document.querySelectorAll("input#inlineFormAmount")[i].value;
  if(number1 || number2){
    
  }else{
    break;
  }
  console.log(number1, number2)
}


  // let userIngredient = document.querySelectorAll("input#inlineFormIngredient")[0].value;
  // console.log(userIngredient)

  // let userAmount = document.querySelectorAll("input#inlineFormAmount")[0].value;
  // console.log(userAmount)


  // let userAmount = $("#inlineFormAmount").val()
  // console.log(userAmount)


})


//s.appendTo('#dropList');



// var more= $(`<form class= "form-row">
// <div class="form-row align-items-center">
// <div class="col-auto">
//   <label class="sr-only" for="inlineFormInput">ingredient</label>
//   <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Ingredient">
// </div>
// <div class="col-auto">
//   <label class="sr-only" for="inlineFormInputGroup">amount</label>
//   <div class="input-group mb-2">
//     <div class="input-group-prepend">
//     </div>
//     <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Amount">
//   </div>
// </div>
// <div class="col-auto">
// <button type="submit" class="btn btn-primary mb-2">Submit</button>
// </div>
// </form>`);