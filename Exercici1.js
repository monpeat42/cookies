function si(){
    // comprovem si existeix una cookie tipus sessionStorage amb el nom "username"
    let userName = "";
    userName = window.sessionStorage.getItem('userName')
    console.log("hoals", userName);
    if ((userName == null) || (userName == "")) {
      let nom =  prompt('Escriu el teu nom');
      window.sessionStorage.setItem('userName', nom);
      window.sessionStorage.setItem('cookieOK', 'coo');
        let cook = window.sessionStorage.getItem('cookieOK');
    } else {
      // si el valor existeix, el mostrem amb un alert
      alert(`Hola de nou, ${userName}!`);
      cooki.classList.add("hidden");
    }
  }
  const acepta = document.getElementById('cookies1');// capturar el boto desde js
  acepta.addEventListener('click', si);
  //acepta.style.display = "block"; //(per mostar un element) o "none" (per ocultar un element)

  
function no(){
  alert(`No s'han acceptat les cookies.`);
  cooki.classList.add("hidden");
}
const reject = document.getElementById('cookies2');//crida al botó
reject.addEventListener('click', no)//la funció

function clean(){
  sessionStorage.removeItem("userName");
  alert(`Les cookies s'han eliminat.`);
  cooki.classList.add("hidden");
}
const elimina = document.getElementById('cookies3');
elimina.addEventListener('click', clean);

//amagar barra cookies i tornar a mostrar amb un boto
//cooki passa a ser cookies que es la id que li he posat al div delsas botons
const cooki = document.getElementById('cookies');

function mostrar(){
cooki.classList.remove("hidden");
}