var $html = $('html');
var $body = $('body');

$html.on('keydown', function (e) {
  var div = $('<div>');

  $body.append(div);
  div.addClass('ball');
  $('form').on('input', function (e){

  e.preventDefault();
  }
});
