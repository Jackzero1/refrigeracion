function siguiente() {
  var fondo = $('.parallax').css("background-image");
  if (fondo=="url("file:///C:/Users/Usuario/Downloads/v0.2/archivos/img/camara1.jpg")") {
      $('.parallax').css('background-image', 'url(img/camara2.jpg)');
  }
  else if (fondo=="url("file:///C:/Users/Usuario/Downloads/v0.2/archivos/img/camara1.jpg")") {
      $('.parallax').css('background-image', 'url(img/camara3.jpg)');
  }
  else if (fondo=="url("file:///C:/Users/Usuario/Downloads/v0.2/archivos/img/camara1.jpg")") {
      $('.parallax').css('background-image', 'url(img/camara1.jpg)');
  }
}

function anterior() {
  var fondo = $('.parallax').css("background-image");
  if (fondo=="url("file:///C:/Users/Usuario/Downloads/v0.2/archivos/img/camara1.jpg")") {
      $('.parallax').css('background-image', 'url(img/camara3.jpg)');
  }
  else if (fondo=="url("file:///C:/Users/Usuario/Downloads/v0.2/archivos/img/camara2.jpg")") {
      $('.parallax').css('background-image', 'url(img/camara1.jpg)');
  }
  else if (fondo=="url("file:///C:/Users/Usuario/Downloads/v0.2/archivos/img/camara3.jpg")") {
      $('.parallax').css('background-image', 'url(img/camara2.jpg)');
  }
}

$(document).ready(function(){
    $('#botonazo2').click(siguiente);
    $('#botonazo1').click(anterior);
});
setInterval("siguiente()", 10000);
