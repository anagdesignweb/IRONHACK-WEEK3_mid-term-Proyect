
// funcion para imprimir las cards 

const imprimirCards = async (cuantas) => {


    const dataFetch = await fetch("https://jsonplaceholder.typicode.com/comments");
    const arrayDatos = await dataFetch.json();

    // console.log(arrayDatos);

    let card = ``;

    for (let i=0; i<cuantas; i++){
        // console.log(arrayDatos[i]);

        card += `<div class="card-1">
        <img class="card-img" src="./img/projects-section/${i+1}.jpg" alt=""> 
        <div class="card-text">
            <div>
                <p class="bodyIntroText-medium">${arrayDatos[i].name}</p>
                <p>${arrayDatos[i].email}</p>    
            </div>
            <a class="card-learnMore" href="">Learn more</a>
        </div>                           
    </div>`;

    document.getElementById("cards-js").innerHTML = card;

    }

}


// PROYECT PAGE funcion para imprimir un texto y un titulo, texto cogido de la api bacon ipsun

const textoProyects = async (elemento) => {

    const textfetch = await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1");
    const arrayTextos = await textfetch.json();

    //console.log(arrayTextos);
    document.getElementById(elemento).innerHTML = arrayTextos;
};


const tituloProyects = async (elementoHTML, index) => {

    const tutulofetch = await fetch("https://jsonplaceholder.typicode.com/posts");
    const arrayTitulo = await tutulofetch.json();

    //console.log(arrayTitulo[index].title);
    document.getElementById(elementoHTML).innerHTML = arrayTitulo[index].title;
};

// funcion para imprimir seccion CTA

const imprimirCTA = () => {

    document.getElementById("id-section-CTA").innerHTML = `<h3>Do you have any questions?</h3>
    <p>Let us help you!</p>
    <div>
        <div class="textfield-div">
            <div class="textfield-icon"></div>
            <input class="textfield-input form-inputs" type="text" placeholder="Enter your email"> 
        </div>
        <button class="btn">Suscribe</button>  
    </div>`;
}

// funcion para imprimir footer

const imprimirFooter = () => {

    document.getElementById("id-footer").innerHTML = `<div class="footer-container">
    <div class="footer-content">
        <img src="img/logos/circle.svg" alt="">
        <p>2972 Westheimer Rd. Santa Ana, <br> Illinois 85486 </p>
    </div>
    <div class="footer-links">
        <div>
            <a href="">Team</a>
            <a href="">Services</a>
            <a href="">About Us</a>
        </div>
        <div>
            <a href="">Press</a>
            <a href="">Proyects</a>
            <a href="">Privacy Policy</a>
        </div>
    </div>
</div>`;
}




const inicio = () => {
    
    imprimirCards(3);
    textoProyects("articleText");
    tituloProyects("article-titulo-js", 1);
    tituloProyects("article-sub-js", 1);
    imprimirCTA();
    imprimirFooter();
};

window.addEventListener("load", inicio());
