$("div").css("color", "blue");

$.ajax({
  url: "http://localhost:3000/api/puppies",
  context: document.body
}).done(returnName)

function returnName(req) {
  req.data.map(function(item) {
    $(".names").append(" " + item.name)
  });
  //console.log(req.data[0].name)
}
