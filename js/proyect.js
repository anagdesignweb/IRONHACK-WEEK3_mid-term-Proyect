// PROYECT PAGE imprimir un texto y un titulo, texto cogido de la api bacon ipsun

const textoProyects = async (elemento) => {

    const textfetch = await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1");
    const arrayTextos = await textfetch.json();

    //console.log(arrayTextos);
    document.getElementById(elemento).innerHTML = arrayTextos;
};


const tituloProyects = async (elementoHTML, index) => {

    const tutulofetch = await fetch("https://jsonplaceholder.typicode.com/posts");
    const arrayTitulo = await tutulofetch.json();

    console.log(arrayTitulo[index].title);
    document.getElementById(elementoHTML).innerHTML = arrayTitulo[index].title;
};





const inicio = () => {

    textoProyects("articleText");
    tituloProyects("article-titulo-js", 1);
    tituloProyects("article-sub-js", 1);
};

window.addEventListener("load", inicio());
