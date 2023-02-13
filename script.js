resultado.style.display = "none"
botonCopiar.style.display = "none"


//Función para evitar letras mayúsculas y carácteres especiales, exceptuando la letra "ñ" y la barra espaciadora.


function soloMinusc(event) {

  key = event.keyCode || event.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghijklmnopqrstuvwxyz";
  especiales = [32, 241];
  tecla_especial = false

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    alert("Recuerde: Solo letras minúsculas y sin acentos");
    return false;
  }
}


//Botón para encriptar.

//La letra "e" se convierte en "enter"
//La letra "o" se convierte en "ober"
//La letra "i" se convierte en "imes"
//La letra "a" se convierte en "ai"
//La letra "u" se convierte en "ufat"


function btnEncriptar(textoEncriptado) {

  document.getElementById("lentes").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  botonCopiar.style.display = "block"
  var texto = document.getElementById("texto").value;
  var textoEncriptado = texto.replace(/e/g, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/g, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
  var texto = document.getElementById("texto").value = "";
  resultado.innerHTML = textoEncriptado;
}

//Botón para desencriptar.


function btnDesencriptar(textoDesencriptado) {

  var texto = document.getElementById("texto").value;
  var textoDesencriptado = texto.replace(/enter/g, "e");
  var textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
  var textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
  var textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
  var textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
  var texto = document.getElementById("texto").value = "";
  resultado.innerHTML = textoDesencriptado;
}


//Botón para copiar.


function copiarTxt() {

  var resultado = document.getElementById("resultado");
  resultado.select();
  navigator.clipboard.writeText(resultado.value);
}

