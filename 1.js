Module.print = function (text) {
  var x = document.body.innerHTML;
  document.body.innerHTML = x + text;
}
