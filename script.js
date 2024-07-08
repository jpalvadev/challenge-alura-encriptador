const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');
const noMensajeContainer = document.querySelector('.right__no-mensaje');

const userInput = document.querySelector('.middle__textarea');
const textResult = document.querySelector('.right__text');
const rightContainer = document.querySelector('.right');

const keys = [
    { decoded: 'e', coded: 'enter' },
    { decoded: 'i', coded: 'imes' },
    { decoded: 'a', coded: 'ai' },
    { decoded: 'o', coded: 'ober' },
    { decoded: 'u', coded: 'ufat' },
];
let firstTime = true;

const hideMunieco = () => {
    noMensajeContainer.style.display = 'none';
    btnCopiar.style.display = 'block';
    textResult.style.display = 'block';
    rightContainer.classList.add('right--active');
};

const setResult = (str) => {
    textResult.textContent = str;
    userInput.value = '';
    userInput.style.height = '100px';
};

btnEncriptar.addEventListener('click', () => {
    if (!userInput.value) return;
    if (firstTime) {
        hideMunieco();
        firstTime = false;
    }

    let str = userInput.value;
    keys.forEach((key) => {
        str = str.replaceAll(key.decoded, key.coded);
    });
    setResult(str);
});

btnDesencriptar.addEventListener('click', () => {
    if (!userInput.value) return;
    let str = userInput.value;
    keys.forEach((key) => {
        str = str.replaceAll(key.coded, key.decoded);
    });
    setResult(str);
});

btnCopiar.addEventListener('click', () => {
    if (!textResult.textContent) return;
    userInput.value = textResult.textContent;
    userInput.style.height = userInput.scrollHeight + 'px';
});

userInput.addEventListener('input', () => {
    userInput.style.height = userInput.scrollHeight + 'px';
});
