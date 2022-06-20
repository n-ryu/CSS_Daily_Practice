const d4 = {
    name: "d4",
    n: 4,
    width: 1,
    origin: "50% 64.4% calc(-0.204*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-109.472deg) rotateZ(180deg)",
        "rotateZ(120deg) rotateX(-109.472deg) rotateZ(180deg)",
        "rotateZ(240deg) rotateX(-109.472deg) rotateZ(180deg)",
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(109.472deg)",
        "rotateZ(180deg) rotateX(109.472deg) rotateZ(-120deg)",
        "rotateZ(180deg) rotateX(109.472deg) rotateZ(-240deg)",
    ]
}
const d6 = {
    name: "d6",
    n: 6,
    width: 1,
    shape: "",
    origin: "50% 50% calc(-0.5*var(--dice-size))",
    rotation: [
        "",
        "rotateY(90deg)",
        "rotateX(90deg)",
        "rotateX(-90deg)",
        "rotateY(-90deg)",
        "rotateX(180deg)"
    ],
    reverseRotation: [
        "",
        "rotateY(-90deg)",
        "rotateX(-90deg)",
        "rotateX(90deg)",
        "rotateY(90deg)",
        "rotateX(180deg)"
    ]
}
const d8 = {
    name: "d8",
    n: 8,
    width: 0.866,
    origin: "50% 50% calc(-0.345*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-70.528deg) rotateZ(180deg)",
        "rotateZ(120deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateZ(240deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateX(180deg)",
        "rotateX(180deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(120deg) rotateX(-70.528deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(240deg) rotateX(-70.528deg) rotateZ(180deg)"
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(70.528deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-120deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-240deg)",
        "rotateX(180deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-120deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(70.528deg) rotateZ(-240deg) rotateX(180deg)"
    ]
}
const d12 = {
    name: "d12",
    n: 12,
    width: 0.95,
    origin: "50% 50% calc(-0.395*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(72deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(144deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(216deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateZ(-72deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg)",
        "rotateX(180deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(72deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(144deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(216deg) rotateX(-63.5deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(-72deg) rotateX(-63.5deg) rotateZ(180deg)",
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(63.5deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-72deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-144deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-216deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(72deg)",
        "rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-72deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-144deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(-216deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(63.5deg) rotateZ(72deg) rotateX(180deg)",

    ]
}
const d20 = {
    name: "d20",
    n: 20,
    width: 0.866,
    origin: "50% 50% calc(-0.4*var(--dice-size))",
    rotation: [
        "",
        "rotateX(-41.8deg) rotateZ(180deg)",
        "rotateZ(120deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateZ(240deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotate3d(0,-0.305,0.4,144deg)",
        "rotate3d(0,-0.305,0.4,-144deg)",
        "rotateZ(120deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateZ(120deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateZ(240deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateZ(240deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateX(180deg)",
        "rotateX(180deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(120deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateX(180deg) rotateZ(240deg) rotateX(-41.8deg) rotateZ(180deg)",
        "rotateX(180deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateX(180deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateX(180deg) rotateZ(120deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateX(180deg) rotateZ(120deg) rotate3d(0,-0.305,0.4,-144deg)",
        "rotateX(180deg) rotateZ(240deg) rotate3d(0,-0.305,0.4,144deg)",
        "rotateX(180deg) rotateZ(240deg) rotate3d(0,-0.305,0.4,-144deg)",
    ],
    reverseRotation: [
        "",
        "rotateZ(180deg) rotateX(41.8deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-120deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-240deg)",
        "rotate3d(0,-0.305,0.4,-144deg)",
        "rotate3d(0,-0.305,0.4,144deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-120deg) ",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-120deg) ",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-240deg) ",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-240deg) ",
        "rotateX(180deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateX(180deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-120deg)rotateX(180deg)",
        "rotateZ(180deg) rotateX(41.8deg) rotateZ(-240deg)rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,144deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-120deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-120deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,-144deg) rotateZ(-240deg) rotateX(180deg)",
        "rotate3d(0,-0.305,0.4,144deg) rotateZ(-240deg) rotateX(180deg)",
    ],
    colorFrom: {
        r: 255, g: 194, b: 194
    },
    colorTo: {
        r: 201, g: 50, b: 50
    }
}

const diceTable = document.querySelector(".table");
const totalIndicator = document.querySelector(".indicator");
const toolButtons = document.querySelectorAll(".tool-buttons button");
let toolMode = 0; // 0: roll, 1: lock, 2: erase;

function calculateTotal() {
    const diceArr = diceTable.querySelectorAll(".dice");
    let total = 0;
    diceArr.forEach(el => {
        const style = window.getComputedStyle(el);
        total += parseInt(style.getPropertyValue("--result"));
    })

    totalIndicator.innerText = `Total: ${total}`;
}
function onDiceClick(event) {
    const target = event.target;
    const dice = target.parentElement.querySelector(".dice")
    if (toolMode == 0) {
        rollDice(dice);
    } else if (toolMode == 1) {
        if (dice.classList.contains("locked")) {
            dice.classList.remove("locked");
            target.classList.remove("locked-button");
        }
        else {
            dice.classList.add("locked");
            target.classList.add("locked-button");
        }
    } else {
        dice.style.transitionDuration = "0.3s";
        dice.style.width = 0;
        dice.style.margin = 0;
        dice.style.setProperty("--scale", "scale(0)");
        setTimeout(() => { target.parentElement.remove() }, 270);
    }
}
function onTransitionEnd(event) {
    if (event.target == event.currentTarget) {
        const el = event.target;
        const style = getComputedStyle(el);
        const result = style.getPropertyValue("--result");
        const type = style.getPropertyValue('--type');
        let diceObject;
        switch (type) {
            case "d4": diceObject = d4; break;
            case "d6": diceObject = d6; break;
            case "d8": diceObject = d8; break;
            case "d12": diceObject = d12; break;
            case "d20": diceObject = d20; break;
        }
        el.style.transitionDuration = "0s";
        const rotation = diceObject.reverseRotation[result - 1];
        el.style.setProperty("--scale", "scale(1)")
        el.style.setProperty("--rotation", "rotate3d(1, 1, 1, 0deg) " + rotation);
        calculateTotal();

        const faces = el.querySelectorAll(".face");
        faces.forEach(element => element.classList.add("face-selected"));
        faces[result - 1].classList.remove("face-selected");
    }
}
function onRollToolClick() {
    toolMode = 0;
    toolButtons.forEach(el => el.classList.remove("button-selected"));
    document.querySelector(".tool-roll").classList.add("button-selected");
    document.body.style.setProperty("--cursor-url", "url(img/cursor_refresh.png), pointer");
}
function onLockToolClick() {
    toolMode = 1;
    toolButtons.forEach(el => el.classList.remove("button-selected"));
    document.querySelector(".tool-lock").classList.add("button-selected");
    document.body.style.setProperty("--cursor-url", "url(img/cursor_lock.png), pointer");
}
function onEraseToolClick() {
    toolButtons.forEach(el => el.classList.remove("button-selected"));
    document.querySelector(".tool-erase").classList.add("button-selected");
    document.body.style.setProperty("--cursor-url", "url(img/cursor_close.png), pointer");

    toolMode = 2;
}

function createDice(diceObject) {
    const newDiceWrapper = document.createElement("div");
    newDiceWrapper.classList.add("dice-wrapper");
    diceTable.appendChild(newDiceWrapper);

    const newDice = document.createElement("div");
    newDice.classList.add("dice");
    newDice.style.transformOrigin = diceObject.origin;
    newDice.style.setProperty("--type", diceObject.name);
    newDice.addEventListener("transitionend", onTransitionEnd);
    newDiceWrapper.appendChild(newDice);

    for (i = 0; i < diceObject.n; i++) {
        const newFace = document.createElement("div");
        newFace.classList.add("face");
        newFace.classList.add(diceObject.name);
        newFace.style.width = `calc(${diceObject.width}*var(--dice-size))`;
        newFace.style.transform = diceObject.rotation[i];
        newFace.innerText = `${i + 1}`;
        newDice.appendChild(newFace);
    }

    const newDiceButton = document.createElement("div");
    newDiceButton.classList.add("dice-button");
    newDiceButton.addEventListener("click", onDiceClick);
    newDiceWrapper.appendChild(newDiceButton);
    rollDice(newDice);
    newDice.style.width = `calc(${diceObject.width}*var(--dice-size))`;
    newDice.style.transform = "var(--scale) var(--rotation)";
}

function createD6() { createDice(d6); }
function createD4() { createDice(d4); }
function createD8() { createDice(d8); }
function createD12() { createDice(d12); }
function createD20() { createDice(d20); }

function rollDice(el) {
    if (!el.classList.contains("locked")) {
        const style = window.getComputedStyle(el);
        const type = style.getPropertyValue('--type');
        let diceObject;
        switch (type) {
            case "d4": diceObject = d4; break;
            case "d6": diceObject = d6; break;
            case "d8": diceObject = d8; break;
            case "d12": diceObject = d12; break;
            case "d20": diceObject = d20; break;
        }
        const result = parseInt(Math.random() * diceObject.n) + 1;
        el.style.setProperty("--result", result);

        let rotation = diceObject.reverseRotation[result - 1];
        el.style.transitionDuration = "1s";
        rotation = `rotate3d(${Math.random() - 0.5}, ${Math.random() - 0.5}, ${Math.random() - 0.5}, ${parseInt(Math.random() * 2 + 2) * 360}deg) ` + rotation;
        el.style.setProperty("--scale", "scale(1)");
        el.style.setProperty("--rotation", rotation);
        const faces = el.querySelectorAll(".face");
        faces.forEach(element => element.classList.remove("face-selected"));
    }
}
function rollAll() {
    const diceArr = document.querySelectorAll(".dice");
    diceArr.forEach(el => {
        rollDice(el);
    });
}


document.querySelector(".button-d4").addEventListener("click", createD4);
document.querySelector(".button-d6").addEventListener("click", createD6);
document.querySelector(".button-d8").addEventListener("click", createD8);
document.querySelector(".button-d12").addEventListener("click", createD12);
document.querySelector(".button-d20").addEventListener("click", createD20);
document.querySelector(".button-roll").addEventListener("click", rollAll);
document.querySelector(".tool-roll").addEventListener("click", onRollToolClick);
document.querySelector(".tool-lock").addEventListener("click", onLockToolClick);
document.querySelector(".tool-erase").addEventListener("click", onEraseToolClick);

onRollToolClick();
createD6();