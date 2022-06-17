const planets = document.querySelectorAll(".planet-wrapper");

function setRotation(el) {
    const speed = parseInt(getComputedStyle(el).getPropertyValue('--orbit-speed'));
    const currentAngle = parseInt(getComputedStyle(el).getPropertyValue('--orbit-angle'));
    const nextAngle = currentAngle + speed;

    el.style.setProperty('--orbit-angle', nextAngle);
    el.style.setProperty('--orbit-angle-degree', `${nextAngle}deg`);
    console.log('hi');
}

function callRotation() {
    planets.forEach(el => setRotation(el));
}
callRotation();
setInterval(callRotation, 1000);