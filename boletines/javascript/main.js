// DOM
// let links = document.querySelectorAll("a");

// links.forEach(function (link) {
//     console.log(link);
// });

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function (celda) {
//     celda.addEventListener("click", function () {
//         console.log("Click");
//     });
// });

// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function (link) {
    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let content = document.querySelector(".content");

        content.classList.remove("zoomInUp");
        content.classList.remove("animated");

        content.classList.add("zoomOutUp");
        content.classList.add("animated");
        //Quitamos y agregamos la clase animated porque sino no ocurre la animación

        setTimeout(function () {
            location.href = "/boletines"
        }, 600);

        console.log(":)");
    });
});