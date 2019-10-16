window.cipher = {
  // Acá escribe tu código.




  /* ==================
   * Start Encode
   * ==================*/

// encode :  () => {},

  encode : (mensaje, offset) => {
      let nuevoMensaje = '';

      for (var i=0; i<mensaje.length; i++) {

        let charcode = mensaje.charCodeAt(i);
        let cifrado = ((charcode - 65 + parseInt(offset) % 26 + 65));

          if (charcode === 32) {
            cifrado = 32;
          } else {
            cifrado = ((charcode - 65 + parseInt(offset)) % 26 + 65);
          }

        // console.log(cifrado);
          nuevoMensaje = nuevoMensaje.concat(String.fromCharCode(cifrado));

      }

      /*Unicamente para ver que valor imprime*/


      return nuevoMensaje;
  },

  /* ==================
   * Start Decode
   * ==================*/
   decode : (mensaje, offset) => {

        let nuevoMensaje = '';

          for (var i=0; i<mensaje.length; i++) {

            let charcode = mensaje.charCodeAt(i);
            let cifrado = ((charcode - 65 - parseInt(offset)) % 26 + 65);

              if (charcode === 32) {
              cifrado = 32;
            } else if (((charcode - 65 - parseInt(offset)) % 26) < 0) {
              cifrado = ((charcode - 65 - parseInt(offset)) % 26 + 65) + 26;
            } else {
              cifrado = ((charcode - 65 - parseInt(offset)) % 26 + 65);
            }

          nuevoMensaje = nuevoMensaje.concat(String.fromCharCode(cifrado));

        }



            // console.log(nuevoMensaje);
          return nuevoMensaje;
    }
  };
