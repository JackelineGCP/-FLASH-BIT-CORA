//Materialize modal
(function begin() {
  $('.modal').modal();
})();

//Functiont time
const timepicker = () => {
  let f = new Date();
  let time = f.getHours() + ":" + f.getMinutes();
  let timeAbsolute = '';

  if (f.getHours() <= 12) {
      timeAbsolute = time + ' am';
  } else {
      timeAbsolute = time + ' pm';
  }
  return timeAbsolute;
}

// Function for post de text
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

$('#post-text').on('click', post);

//// function for Preview  image 
$('input[type=file]').change(function () {
  let file = (this.files[0].name).toString();
  let reader = new FileReader();

  reader.onload = function (e) {
      $('#modal2 img').attr('src', e.target.result);
  }
  reader.readAsDataURL(this.files[0]);
});

// function for post image
function image() {
  let imagen = $("#saveimg");

  const imgEstructure = `<div class="postContent">
  <img src="${imagen[0].src}" class="post-img"></img>
  <div class="postLeter"><p class="postLeterP">${$('#texto').val()}</p></div>
  <div class="right-align"><span class="postLeter">${timepicker()}</span></div>
  </div>`;
  $('#post').prepend(imgEstructure);
}

$('#send').on('click', image);


//Function for post audio and video

document.getElementById('fileAv').onchange = function(evt) {
  var files = evt.target.files; 
  console.log(files);
  for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('video.*')) {
      continue;
    }
        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            var paragraph = document.createElement('div');
            paragraph.innerHTML = [`<video src=${e.target.result} controls></video>', 
                              '" title="', escape(theFile.name), '"/>`].join('');
            document.getElementById('list').insertBefore(paragraph, null);
          };
        })(f);
        reader.readAsDataURL(f);
      } 
  
  
}
