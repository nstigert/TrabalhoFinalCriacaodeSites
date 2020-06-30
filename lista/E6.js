function converter() {
    var celcius = document.getElementById("temperatura").value;
    celcius = 5 / 9 * (celcius - 32);
    alert(celcius);
}