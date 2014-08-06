$.get("/fruitcount?name=apple")
.then(function(data){
  var source = $("#tracker").html();
  var template = Handlebars.compile(source);
  $("#main").html(template(data));
})
.fail(function(err){
  $('.error-box').text("Something went wrong");
});


