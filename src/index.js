const cero = document.getElementById('seccion0');
const one   = document.getElementById('seccion1');
const two   = document.getElementById('seccion2');
const three = document.getElementById('seccion3');
const four  = document.getElementById('seccion4');
const five = document.getElementById('seccion5');

let cifradotype = document.getElementById('cifradotype');
let offset = document.getElementById('offset');
let validar = document.getElementById('validar');
let nombreEncriptado = document.getElementById('nombreEncriptado');
let decodeString = document.getElementById('decodeString')

var resultadolab = document.getElementById('resultadolab');
  resultadolab.addEventListener('click', function(){
  cero.classList.add('section-hide');
  one.classList.remove('section-hide');
});

var cifrado = document.getElementById('cifradotype');
  cifrado.addEventListener('click', function(){
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
  cifradotype.addEventListener('click', function(){
    let fullname = document.getElementById('fullname');
    let offset = document.getElementById('offset');
    let poner_nombre = document.getElementById('poner_nombre');

    //Se inserta el nombre seteado al incio
    poner_nombre.innerHTML = fullname.value.toUpperCase();

    nombreEncriptado.innerHTML = window.cipher.encode(fullname.value.toUpperCase(),parseInt(offset.value));
  });
    document.getElementById('copiarCodigo').addEventListener('click', ()=>{
      let nombreEncriptado = document.getElementById('nombreEncriptado');
      navigator.clipboard.writeText(nombreEncriptado.value);
  });
  /* ==================
   * Button Decode
   * ==================*/
  validar.addEventListener('click', function () {
    let pegarCodigo = document.getElementById('pegarCodigo');
    decodeString.innerHTML =window.cipher.decode(pegarCodigo.value.toUpperCase(), parseInt(offset.value));
  });
    document.getElementById('accionPegarcodigo').addEventListener('click', ()=>{
      let pegarCodigo = document.getElementById('pegarCodigo');
      pegarCodigo.value = '';

      navigator.clipboard.readText()
      .then((text)=>{
        pegarCodigo.value = text;
      });
  });
