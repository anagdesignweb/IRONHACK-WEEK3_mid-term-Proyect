
// funcion para imprimir las cards 

const imprimirCards = async (cuantas) => {

    const dataFetch = await fetch("https://jsonplaceholder.typicode.com/comments");
    const arrayDatos = await dataFetch.json();
    // console.log(arrayDatos);

    let card = ``;

    for (let i=0; i<cuantas; i++){
    // console.log(arrayDatos[i]);
    card += `
    <div class="card-1">
        <img class="card-img" src="./img/projects-section/${i+1}.jpg" alt=""> 
        <div class="card-text">
            <div>
                <p class="bodyIntroText-medium">${arrayDatos[i].name}</p>
                <p>${arrayDatos[i].email}</p>    
            </div>
            <a class="card-learnMore" href="./proyect.html">Learn more</a>
        </div>                           
    </div>`;

    document.getElementById("cards-js").innerHTML = card;

    }
}

// funcion para imprimir seccion CTA

const imprimirCTA = () => {

    document.getElementById("id-section-CTA").innerHTML = `
    <h3>Do you have any questions?</h3>
    <p>Let us help you!</p>
    <div class="div-textfield">
        <div class="input-EMAIL">
            <div class="textfield-icon"></div>
            <input class="textfield-input form-inputs" type="text" placeholder="Enter your email"> 
        </div>
        <button class="btn">Suscribe</button>  
    </div>`;
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

    imprimirCards(3);
    imprimirCTA();
    imprimirFooter();
};

window.addEventListener("load", inicio());
