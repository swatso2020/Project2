$("#addRecipe").click(function(){$("#hiddenData").css("display","")});var data={strCategory1:"Beef",strCategory2:"Chicken",strCategory3:"Dessert",strCategory4:"Lamb",strCategory5:"Miscellaneous",strCategory6:"Pasta",strCategory7:"Pork",strCategory8:"Seafood",strCategory9:"Side",strCategory10:"Starter",strCategory11:"Vegan",strCategory11:"Vegetarian",strCategory11:"Breakfast",strCategory11:"Goat"},s=$("#inputGroupSelect01");for(var val in data)$("<option />",{value:val,text:data[val]}).appendTo(s);$("#addIngredient").on("click",function(a){a.preventDefault(),console.log("it runs"),document.querySelectorAll("input#inlineFormIngredient")[3]?$("#ingredients").append(`<strong >Only allowed to add up to 20 ingredients</strong>`):$("#ingredients").append(`<div class="form-row align-items-center">
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
  </div>`)});let usersIngredients={};$("#dishSubmitted").click(function(a){for(a.preventDefault(),i=0;21>i&&(document.querySelectorAll("#inlineFormAmount")[i]||document.querySelectorAll("#inlineFormIngredient")[i]);i++)usersIngredients["measure"+i]=document.querySelectorAll("#inlineFormAmount")[i].value,usersIngredients["mealIngr"+i]=document.querySelectorAll("#inlineFormIngredient")[i].value;let b=$("#inputGroupSelect01").find(":selected").text(),c=$("#strMeal").val(),d=$("#strInstructions").val(),e={mealName:c,mealCategory:b,mealInstr:d,...usersIngredients};console.log(e)});