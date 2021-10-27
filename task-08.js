const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('div#boxes');
const buttonRenderEl = document.querySelector('[data-action="render"]');
const buttonDestroyEl = document.querySelector('[data-action="destroy"]');
let indexSize = 30;

function createBoxes(amount) {
    const arrayMaker = Array(amount).fill('');
    arrayMaker.forEach(arrayItem => {
        const color = Math.floor(Math.random() * 16777216).toString(16);

        boxesEl.insertAdjacentHTML('afterBegin',
            `<div style="width:${indexSize}px; background-color: #${color}; height: ${indexSize}px"></div>`)
        indexSize += 10;
    })
};
function gainInput() {
    createBoxes(Number(inputEl.value));

};
function destroyBox() {
    boxesEl.innerHTML = '';
    indexSize = 30;
};

buttonRenderEl.addEventListener('click', gainInput);
buttonDestroyEl.addEventListener('click', destroyBox);