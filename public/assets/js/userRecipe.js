$('#addRecipe').click(function(){
    console.log('testing more');
    $('#hiddenData').css("display", "");


})

$("#dishSubmitted").click(function(e){
    e.preventDefault();
    console.log('it runs')
    $(".list-group").html(more)
var more= `<form class= "form-row">
<div class="form-row align-items-center">
<div class="col-auto">
  <label class="sr-only" for="inlineFormInput">ingredient</label>
  <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Ingredient">
</div>
<div class="col-auto">
  <label class="sr-only" for="inlineFormInputGroup">amount</label>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Amount">
  </div>
</div>
<div class="col-auto">
<button type="submit" class="btn btn-primary mb-2">Submit</button>
</div>
</form>`
})




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