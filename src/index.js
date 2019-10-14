const cero = document.getElementById('seccion0');
const one   = document.getElementById('seccion1');
const two   = document.getElementById('seccion2');
const three = document.getElementById('seccion3');
const four  = document.getElementById('seccion4');
const five = document.getElementById('seccion5');

let cifradotype = document.getElementById('cifradotype');
let offset = document.getElementById('offset');
let validar = document.getElementById('validar');
//apunta al
var cifrado = document.getElementById('cifradotype');

var resultadolab = document.getElementById('resultadolab');
    resultadolab.addEventListener('click', function(){

cero.classList.add('section-hide');
one.classList.remove('section-hide');


});


  cifrado.addEventListener('click', function(){
//Instrucciones

  one.classList.add('section-hide');
  two.classList.remove('section-hide');
});

var verResultados = document.getElementById('resultados');

  verResultados.addEventListener('click', function(){

  two.classList.add('section-hide');
  three.classList.remove('section-hide');
});

var validacion = document.getElementById('validar');

  validacion.addEventListener('click', function(){

  three.classList.add('section-hide');
  four.classList.remove('section-hide');
});

var confirmarSiguiente = document.getElementById('confirmar');

confirmarSiguiente.addEventListener('click', function(){
  four.classList.add('section-hide');
  five.classList.remove('section-hide');

});

document.getElementById('backHome').addEventListener('click', function(){
location.reload();
});

/* ==================
 * Button Encode
 * ==================*/

  cifradotype.addEventListener('click', function () {
    let fullname = document.getElementById('fullname');
    cipher.encode(fullname.value.toUpperCase(), parseInt(offset.value));
  });


  /* ==================
   * Button Decode
   * ==================*/
  validar.addEventListener('click', function () {

    let pegarCodigo = document.getElementById('pegarCodigo')
    cipher.decode(pegarCodigo.value.toUpperCase(), parseInt(offset.value));

  });
