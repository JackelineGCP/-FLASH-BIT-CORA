// Materialize modal
(function begin() {
  $('.modal').modal();
})();

// Funcion que obtiene el tiempo,hora
const timepicker = () => {
  let hrs = new Date();
  let time = hrs.getHours() + ':' + hrs.getMinutes();
  let timeAbsolute = '';

  if (hrs.getHours() <= 12) {
    timeAbsolute = time + ' am';
  } else {
    timeAbsolute = time + ' pm';
  }
  return timeAbsolute;
};

// Funcion que agrega texto
function post() {
  const estructureForPost = `<div class="postContent">
  <div class="title"><h5 class="center-align">${$('.posteando input').val()}</h5></div>
  <div class="postLeter"><p class="postLeterP">${$('#texto').val()}</p></div>
  <div class="right-align"><span class="postLeter">${timepicker()}</span></div>
  </div>`;
  $('#post').prepend(estructureForPost);
  $('.posteando input').val(' ');
  $('#texto').val(' ');
}

// FUNCIONES PARA AGREGAR IMAGEN
// Aplicamos new File para la imagen
$('#file-select').change(function() {
  let file = (this.files[0].name).toString();
  let reader = new FileReader();

  reader.onload = function(e) {
    $('#modal2 img').attr('src', e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
});

// Funcion que agrega la imagen
function image() {
  let imagen = $('#saveimg');
  const imgEstructure = `<div class="postContent">
  <img src="${imagen[0].src}" class="post-img"></img>
  <div class="postLeter"><p class="postLeterP">${$('#texto').val()}</p></div>
  <div class="right-align"><span class="postLeter">${timepicker()}</span></div>
  </div>`;
  $('#post').prepend(imgEstructure);
}


// FUNCIONES PARA AGREGAR VIDEO
$('#inputVideo').change(function() {
  var reader = new FileReader();
  reader.onload = function(file) {
    $('#modal4').attr('src', file.target.result);
    var fileContent = file.target.result;
    $('#post').append(`<video src="${fileContent}" width="320" height="240" controls></video>`);
    $('#modal4').modal('close');
  };
  // Get the selected video from Dialog
  reader.readAsDataURL(this.files[0]);
});


// FUNCIONES PARA AGREGAR AUDIO
$('#inputAudio').change(function() {
  var reader = new FileReader();
  reader.onload = function(file) {
    $('#modal3').attr('src', file.target.result);
    var fileContent = file.target.result;
    $('#post').append(`<audio src="${fileContent}" width="320" height="240" controls> </audio>`);
    $('#modal3').modal('close');
  };
  // Get the selected video from Dialog
  reader.readAsDataURL(this.files[0]);
});


// Eventos 
$('#post-text').on('click', post);
$('#send').on('click', image);

// Botones para activar el ingreso o selección de videos
$('#saveVideo').on('click', function() {
  $('#inputVideo').click();
});

// Botones para activar el ingreso o selección de audio
$('#saveAudio').on('click', function() {
  $('#inputAudio').click();
});