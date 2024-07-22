// Определяем тему сайта исходя из текущего времени
// var NowDate = new Date();
// var hour = NowDate.getHours();
// if (22 < hour < 24 || 0 < hour < 6) {
//     var light = true;
// } else {
//     
// }
// darkLight();

var light = false;
var b = document.body;
var selector = document.getElementById("selector");
var link = document.getElementById("link");

const baseTexts = document.querySelectorAll('.base');

function darkLight() {
    if (!light) {
        b.className = "light-theme";
        // Меняем цвет ссылки
        link.style.color = "#444452";
        baseTexts.forEach(element => {
            element.style.color = '#444452';
        });
    } else {
        b.className = "dark-theme";
        // Меняем цвет ссылки
        link.style.color = "#E7E7E7";
        baseTexts.forEach(element => {
            element.style.color = '#afafbf';
        });
    }

    light = !light;
}