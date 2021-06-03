var allImages = [];
var brandingImages = [];
var webImages = [];
var photoImages = [];
var appImages = [];

/* getting info here */
var branding = function(datos) {
    console.log("Branding", datos);
    brandingImages = datos;
    allImages = allImages.concat(datos);


}

var photography = function(datos) {
    allImages = allImages.concat(datos);
    photoImages = datos;
}

var app = function(datos) {
    allImages = allImages.concat(datos);
    appImages = datos;
}

var web = function(datos) {
    allImages = allImages.concat(datos);
    webImages = datos;

    setTimeout(() => {
        allView();
    }, 2000);
}

/* to see diferent views  */
function allView() {
    showContent(allImages);
}

function brandingView() {
    showContent(brandingImages);
}

function webView() {
    showContent(webImages);
}

function photoView() {
    showContent(photoImages);
}

function appView() {
    showContent(appImages);
}
/*  */

/* showing content based on the setted list */
function showContent(lista) {
    /* borra contenido para poblarlo de nuevo */
    document.getElementById("gridContent").innerHTML = '';
    document.getElementById("linealContent").innerHTML = '';

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        document.getElementById("linealContent").innerHTML += '  <div class="card w-40 m-5">' +
            ' <img src="' + element.url + '" class="card-img-top animate__animated animate__zoomIn">' +
            '</div>'

        document.getElementById("gridContent").innerHTML += '  <div class="card">' +
            ' <img src="' + element.url + '" class="card-img-top animate__animated animate__jackInTheBox">' +
            '</div>'
    }
}




function enGrid() {
    document.getElementById('linealContent').style.display = 'none';
    document.getElementById('gridContent').style.display = 'block';
}

function enLinea() {
    document.getElementById('linealContent').style.display = 'flex';
    document.getElementById('gridContent').style.display = 'none';

}