function removeGetStarted() {
    document.querySelector('#get-started').style.cssText = `
        transform: translateX(100%);
    `
}
function setGetStarted() {
    document.querySelector('#get-started').style.cssText = `
        transform: translateX(0%);
    `
}
document.querySelector('#button-get-started').addEventListener('click', removeGetStarted);