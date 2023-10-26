var botonSi = document.getElementById("Si");
var modal = document.getElementById("modal");
var textElement = document.getElementById("text");
var textElement2 = document.getElementById("text2");
var imagenElement = document.getElementById("cor");

botonSi.addEventListener("click", function() {
    modal.style.display = "block";
    typeWriterEffect(textElement, "Sabia que acceptaries <3", function() {
        typeWriterEffect(textElement2, "T'estimo molt \u{2764}", function() {
            // Mostrar la imagen al finalizar la escritura del segundo texto
            imagenElement.classList.remove("hidden");
        });
    });
});

function typeWriterEffect(element, text, callback) {
    element.innerHTML = "";
    var i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            if (callback) {
                callback();
            }
        }
    }

    type();
}

var botonNo = document.getElementById("No");
var primerDiv = document.getElementById("primer");

botonNo.addEventListener("mouseover", function() {
    var maxX = primerDiv.offsetWidth - botonNo.offsetWidth - 20;
    var maxY = primerDiv.offsetHeight - botonNo.offsetHeight - 50;

    var randomX = Math.random() * maxX;
    var randomY = Math.random() * maxY;

    botonNo.style.left = randomX + "px";
    botonNo.style.top = randomY + "px";
});



