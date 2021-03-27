document.addEventListener("DOMContentLoaded", function(event) {
  var print_message = function(message){
	document.getElementById('main-dialogue').appendChild(document.createTextNode('test'));
  };
  print_message('just testing');
});
