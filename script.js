 // Lógica de encriptación: Reemplazar vocales por números o símbolos 
function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const outputImage = document.getElementById('outputImage');

    document.getElementById("outputImage").style.display = "none";
    document.getElementById("outputText").style.display = "initial";
    
    if (inputText) {
        let encriptado = inputText
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        outputText.value = encriptado;
        outputText.style.display = 'block';
        outputImage.style.display = 'none';
    }

}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const outputImage = document.getElementById('outputImage');

    document.getElementById("outputImage").style.display = "none";
    document.getElementById("outputText").style.display = "initial";

    if (inputText) {
        let desencriptado = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputText.value = desencriptado;
        outputText.style.display = 'block';
        outputImage.style.display = 'none';
    }

}

function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles");
}
