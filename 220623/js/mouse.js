
function onMouseMove(event) {
    const target = event.target;
    const targetImage = target.parentElement;
    const targetReflection = target.parentElement.querySelector(".reflection");
    if (target == event.currentTarget) {
        const x = (event.offsetX - 150) / 300;
        const y = (event.offsetY - 200) / 400;
        const rotation = `rotate3d(${y}, ${-x}, 0, ${Math.min(Math.sqrt(x * x + y * y) * 50, 25)}deg)`;
        targetImage.style.transitionDuration = "0.1s";
        targetImage.style.setProperty("--rotate", rotation);
        // const reflection = `${x * -50}px ${y * -50}px 100px -40px rgba(255,255,255,${Math.sqrt(x * x + y * y) * 3}) inset`
        // targetImage.style.boxShadow = reflection;
        targetReflection.style.top = `${(y * 400) * 1.5 + 200}px`;
        targetReflection.style.left = `${(x * 300) * 1.5 + 150}px`;
        targetReflection.style.opacity = `${Math.sqrt(x * x + y * y) * (1.5)}`;
    }
};

function onMouseLeave(event) {
    const target = event.target;
    const targetImage = target.parentElement;
    if (target == event.currentTarget) {
        const rotation = `rotate3d(0, 1, 0, 0 deg)`;
        targetImage.style.transitionDuration = "1s";
        targetImage.style.setProperty("--rotate", rotation);
        // targetImage.style.boxShadow = "0px 0px 100px -25px rgba(255, 255, 255, 0) inset";
    }
}


const card = document.querySelector(".card-cover");
card.addEventListener("mousemove", onMouseMove)
card.addEventListener("mouseleave", onMouseLeave)