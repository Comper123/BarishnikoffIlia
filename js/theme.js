var islight = false;

var b = document.body;
var selector = document.getElementById("selector");
var link = document.getElementById("link");
var burgerMenuBth = document.getElementById("show-burger-menu");
var burgerMenuBthLines = burgerMenuBth.querySelectorAll("span");
const baseTexts = document.querySelectorAll('.base');
const switchTheme = document.getElementById('switch');

if (islight){
    switchTheme.checked = true;
}

function darkLight() {
    if (!islight) {
        b.className = "light-theme";
        // Меняем цвет ссылки
        link.style.color = "#444452";
        baseTexts.forEach(element => {
            element.style.color = '#444452';
        });
        // Поменяем цвета переключателя бургер меню
        burgerMenuBthLines.forEach(line => {
            line.style.border = "2px solid black"
        });

    } else {
        b.className = "dark-theme";
        // Меняем цвет ссылки
        link.style.color = "#E7E7E7";
        baseTexts.forEach(element => {
            element.style.color = '#afafbf';
        });
        // Поменяем цвета переключателя бургер меню
        burgerMenuBthLines.forEach(line => {
            line.style.border = "2px solid white"
        })
    }
    islight = !islight;
}


