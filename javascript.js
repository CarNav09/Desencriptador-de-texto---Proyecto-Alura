//Variables globales
var textInto = document.querySelector('.text-result');

var encryptButton = document.querySelector('.encryptor-button');
var decryptButton = document.querySelector('.decryptor-button');
var copyButton = document.querySelector('.copy-button');

//Funciones para encriptar

function encrypt() {

    var textArea = document.querySelector('.text-area').value;
    var textAdvice = document.querySelector('.advice-message');

    if (/^[a-z\s]+$/.test(textArea)) {
        textInto.textContent = encryptor(textArea);
        textAdvice.textContent = ""
    } else {
        textAdvice.textContent = "Introdusca solo minusculas y sin caracteres especiales!"
        textInto.textContent = ""
    }
}

function encryptor(entryText) {
    var text = entryText;
    var consonant = "";
    var codes = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    for (var i = 0; i < text.length; i++) {
        var encontrado = false;
        for (var j = 0; j < codes.length; j++) {
            if (text[i] === codes[j][0]) {
                consonant += codes[j][1];
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            consonant += text[i];
        }
    }
    return consonant;
}

encryptButton.onclick = encrypt;

//Funciones para desencriptar

function decrypt() {

    var textArea = document.querySelector('.text-area').value;
    var textAdvice = document.querySelector('.advice-message');

    if (/^[a-z\s]+$/.test(textArea)) {
        textInto.textContent = decryptor(textArea);
        textAdvice.textContent = ""
    } else {
        textAdvice.textContent = "Introdusca solo minusculas y sin caracteres especiales!"
        textInto.textContent = ""
    }
}

function decryptor(entryText) {
    var text = entryText;
    var consonant = "";
    var codes = [
        ["a", 1],
        ["e", 4],
        ["i", 3],
        ["o", 3],
        ["u", 3]
    ];
    for (var i = 0; i < text.length; i++) {
        var encontrado = false;
        for (var j = 0; j < codes.length; j++) {
            if (text[i] === codes[j][0]) {
                consonant += codes[j][0]
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            consonant += text[i];
        } else {
            i += codes[j][1];
        }
    }
    return consonant;
}

//Funcion copiar texto

function copyFunction() {
    var textAdvice = document.querySelector('.advice-message');
    navigator.clipboard.writeText(textInto.textContent);
    textAdvice.textContent = "Texto copiado exitosamente!"
}

// Funcion para checar area de texto

function checkVoidText() {
    var textArea = document.querySelector('.text-area').value;
    var textAdvice = document.querySelector('.advice-message');
    if (textArea === "") {
        textAdvice.textContent = "El campo esta vacio!"
    }
}

function checkEncryptButton() {
    encrypt();
    checkVoidText();
    ocultarImagen();
}

function checkDecryptButton() {
    decrypt();
    checkVoidText();
    ocultarImagen();
}

//Botones finales

encryptButton.onclick = checkEncryptButton;

decryptButton.onclick = checkDecryptButton;

copyButton.onclick = copyFunction;









