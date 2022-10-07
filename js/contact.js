
// funcion para datos del formulario 



// referencias de los nodos de los id
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const Message = document.querySelector('#message');

const btnSub = document.querySelector('#contact-form');

let datosUsuario= [];



const enviar = (event) => {
// preventDefault() detiene el evento, el caso de un submit detiene la carga de la pagina
    event.preventDefault();

    Object={};
    Object.name = fullname.value;
    Object.email = email.value.trim();
    Object.phone = Number(phoneNumber.value);
    Object.Message = message.value;

    //console.log(Object);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(Object),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

// funcion para imprimir footer

const imprimirFooter = () => {

    document.getElementById("id-footer").innerHTML = `
    <div class="footer-container">
        <div class="footer-content">
            <img src="img/logos/circle.svg" alt="">
            <p>2972 Westheimer Rd. Santa Ana, <br> Illinois 85486 </p>
        </div>
        <div class="footer-links">
        <div>
            <div><a class="not-active" href="">Team</a></div>
            <div><a class="not-active" href="">Services</a></div>
            <div><a class="not-active" href="">About Us</a></div>   
        </div>
        <div>
            <div><a class="not-active" href="">Press</a></div>
            <div><a class="not-active" href="">Proyects</a></div>
            <div><a class="not-active" href="">Privacy Policy</a></div>    
        </div>
        </div>
    </div>`;
}



// funcion para cargar cuando windows se haya iniciado

const inicio = () => {

    imprimirFooter();
    btnSub.addEventListener('submit', enviar);    
    
};

window.addEventListener("load", inicio());
