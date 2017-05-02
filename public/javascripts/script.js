
//shows table of puppies when the window loads
$(document).ready(function() {
  getPups();
});

//opens up form to add a new item
$(".new").click(function() {
  addForm();
})

//to add new data
// $(".addForm").submit(function(event) {
//   var data = {}
//   // data.name = $("input[name=name]").val();
//   // data.breed = $("input[name=breed]").val();
//   // data.age = $("input[name=age]").val();
//   // data.sex = $("input[name=sex]").val();
//   event.preventDefault();
//   console.log(data)
//   $.post( "api/puppies", function( data ) {
//     console.log(data);
//   });
//
// });



/********FUNCTIONS-move to another file*****/
function getPups() {
$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/api/puppies',
  success: onSuccess
});
  function onSuccess(req) {
    req.data.map(function(item) {
      //var deleteBtn = `<form action=/api/puppies/${item.id} method="delete"><button type="submit">DELETE</button>`
      var deleteBtn = `<button onclick="deletePup(${item.id})" type="submit" class="btn btn-danger">x</button>`
      $("table").append(`<tr><td>${item.name}</td><td>${item.breed}</td><td>${item.age}</td><td>${item.sex}</td><td>${deleteBtn}</td></tr>`);
    });
  }
}
function deletePup(id) {
  console.log("deleting pup")
  $.ajax({
    type: 'DELETE',
    url: `/api/puppies/${id}`,
    success: onSuccess
  });
  function onSuccess() {
    console.log('deleted');
    window.location.reload();
  }
}
function addForm() {
  $("table").append(`<tr><td><input class="nameInput"/></td><td><input class="breedInput" /></td><td><input class="ageInput" /></td><td><input class="sexInput" /></td></tr>`);
}
/****************************************/
