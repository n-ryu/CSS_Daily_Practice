const dice = document.querySelector(".dice");

function rollDice() {
    dice.removeEventListener("click", rollDice);
    dice.style.setProperty('--duration', '2s');
    const result = parseInt(6 * Math.random()) + 1;
    switch (result) {
        case 1:
            dice.style.setProperty('--base-rotation', 'rotateY(0deg)');
            break;
        case 2:
            dice.style.setProperty('--base-rotation', 'rotateY(-90deg)');
            break;
        case 3:
            dice.style.setProperty('--base-rotation', 'rotateX(-90deg)');
            break;
        case 4:
            dice.style.setProperty('--base-rotation', 'rotateX(90deg)');
            break;
        case 5:
            dice.style.setProperty('--base-rotation', 'rotateY(90deg)');
            break;
        case 6:
            dice.style.setProperty('--base-rotation', 'rotateY(180deg)');
            break;
    }
    const randomRotation = parseInt(5 * Math.random() + 5) * 360;
    console.log(randomRotation);
    const randomX = (Math.random() - 0.5) * 2;
    const randomY = (Math.random() - 0.5) * 2;
    const randomZ = (Math.random() - 0.5) * 2;
    dice.style.setProperty('--rotation', `rotate3d(${randomX}, ${randomY}, ${randomZ}, ${randomRotation}deg)`);
};

function resetDice() {
    dice.addEventListener("click", rollDice);
    dice.style.setProperty('--duration', '0s');
    dice.style.setProperty('--rotation', `rotate3d(1, 1, 1, 0deg)`);
}

dice.addEventListener("click", rollDice);
document.querySelector(".face").addEventListener("transitionend", resetDice);