const express = require('express');
const app = express();// guardar expres en una var
const server = app.listen(3000, on);// función de callback
function on() {
  console.log('Servidor encendido');
}
app.use(express.static('public'));// utilizar .use express.static
