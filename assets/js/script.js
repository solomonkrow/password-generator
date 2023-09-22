const slider = document.querySelector(".rangeSlider");

// Text which will show the value of the range slider.
const sliderValue = document.querySelector(".lengthTitle");

// Using Event Listener to apply the fill and also change the value of the text.
slider.querySelector("input").addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
});



const alphabet = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
};

const grabAlphabet = [
    function upperCase() {
        return alphabet.upperCase[Math.floor(Math.random()* alphabet.upperCase.length)];
    },
    function lowerCase() {
        return alphabet.lowerCase[Math.floor(Math.random()* alphabet.lowerCase.length)];
    },
    function numbers() {
        return alphabet.numbers[Math.floor(Math.random()* alphabet.numbers.length)];
    },
    function symbols() {
        return alphabet.symbols[Math.floor(Math.random()* alphabet.symbols.length)];
    }
];


function generatePassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    if (upper + lower + numbers + symbols === 0) {
        alert("Please check atleast one box!");
        return;
    }

    const result = document.getElementById("result");
    const size = document.getElementById("slider");
    var password = "";

    while (size.value > password.length) {
        let addedAlphabet = grabAlphabet[Math.floor(Math.random() * grabAlphabet.length)];
        let check = document.getElementById(addedAlphabet.name).checked;
        if (check) {
            password += addedAlphabet();
        }
    }
    result.innerHTML = password;
}

function copyPassword() {
    const tempElement = document.createElement("textarea");
    const generatedPassword = document.getElementById("result").innerText;

    if (!generatedPassword) {
        alert("No password generated!");
        return;
    }

    tempElement.value = generatedPassword;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    tempElement.remove();
    alert("Password copied to clipboard.");
}