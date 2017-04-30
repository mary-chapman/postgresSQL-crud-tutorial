
$.ajax({
  url: "http://localhost:3000/api/puppies",
  context: document.body
}).done(returnName)

function returnName(req) {
  req.data.map(function(item) {
    //$(".namesTest").append(" " + item.name)
    $(".puppyTable").append(`<tr><td>${item.name}</td><td>${item.breed}</td><td>${item.age}</td><tr>`);
    //$(".puppyTable").append('<tr><td>' + item.name + '</td><td>' + item.breed '</td><tr>')
  });
  //console.log(req.data[0].name)
}
