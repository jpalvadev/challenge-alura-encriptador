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

btnEncriptar.addEventListener('click', () => {
    if (!userInput.value) return;

    noMensajeContainer.style.display = 'none';
    btnCopiar.style.display = 'block';
    textResult.style.display = 'block';
    rightContainer.classList.add('right--active');

    let str = userInput.value;
    keys.forEach((key) => {
        str = str.replaceAll(key.decoded, key.coded);
    });
    textResult.textContent = str;
    userInput.value = '';
});

btnDesencriptar.addEventListener('click', () => {
    if (!userInput.value) return;
    let str = userInput.value;
    keys.forEach((key) => {
        str = str.replaceAll(key.coded, key.decoded);
    });
    textResult.textContent = str;
    userInput.value = '';
});

btnCopiar.addEventListener('click', () => {
    if (!textResult.textContent) return;
    userInput.value = textResult.textContent;
});

userInput.addEventListener('input', () => {
    userInput.style.height = userInput.scrollHeight + 'px';
    console.log('fddf');
});
