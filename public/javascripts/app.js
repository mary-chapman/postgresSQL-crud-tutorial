


$.ajax({
  url: "http://localhost:3000/api/puppies",
  context: document.body
}).done(returnName)

function returnName(req) {
  req.data.map(function(item) {
    $(".puppyTable").append(`<tr><td>${item.name}</td><td>${item.breed}</td><td>${item.age}</td><td><button class="btn btn-danger">Delete</button></td><tr>`);
  });
}
