$.get("/fruitcount?name=apple")
.then(function(data){
  $('#fruit-name').text(data.name);
  $('#count').text(data.count);
})
.fail(function(err){
  $('.error-box').text("Something went wrong");
});