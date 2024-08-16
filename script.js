// Lógica de encriptación: Reemplazar vocales por números o símbolos 
function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.querySelector('.output-text textarea'); // Selecciona el textarea dentro de output-text
    const outputImage = document.getElementById('outputImage');

    if (inputText) {
        let encriptado = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        outputTextArea.value = encriptado;
        document.getElementById("outputText").style.display = "block";
        outputImage.style.display = 'none';
    } else {
        outputImage.style.display = 'block';
        document.getElementById("outputText").style.display = "none";
    }
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.querySelector('.output-text textarea'); // Selecciona el textarea dentro de output-text
    const outputImage = document.getElementById('outputImage');

    if (inputText) {
        let desencriptado = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputTextArea.value = desencriptado;
        document.getElementById("outputText").style.display = "block";
        outputImage.style.display = 'none';
    } else {
        outputImage.style.display = 'block';
        document.getElementById("outputText").style.display = "none";
    }
}

function copiarTexto() {
    const outputTextArea = document.querySelector('.output-text textarea'); // Selecciona el textarea dentro de output-text
    outputTextArea.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}
