document.addEventListener('DOMContentLoaded', function () {
    const contrastSwitch = document.getElementById('contrastSwitch');
    const body = document.body;

    contrastSwitch.addEventListener('change', function () {
        body.classList.toggle('high-contrast');
    });
});














//responsive navbar
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}