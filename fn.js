const buttonStartRef = document.querySelector('[data-action="start"]');
const buttonStopRef = document.querySelector('[data-action="stop"]');
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const switchInterval = 1000;
let isActive = false;
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorSwitcher = () => {
    const defaultColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = defaultColor;
}
function startSwitcher() {
    if (isActive) {
        return;
    }
    timerId = setInterval(colorSwitcher, switchInterval);
    isActive = true;
}
function stopSwitcher() {
    if (!isActive) {
        return;
    }
    clearInterval(timerId);
    isActive = false;
    timerId = null;
}
buttonStartRef.addEventListener('click', startSwitcher);
buttonStopRef.addEventListener('click', stopSwitcher);
