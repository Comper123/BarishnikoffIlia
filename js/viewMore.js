// Получаем все блоки в которых есть скрытие элементов
const viewBlocks = document.querySelectorAll(".moreblock");

// пройдемся по всем блокам и зададим для них функционал скрытия прочих элементов
viewBlocks.forEach(elem => {
    // получим кнопку скрытия
    const button = elem.querySelector(".button");
    // получим блок который будем скрывать
    const block = elem.querySelector(".block");
    
    button.addEventListener("click", (e) => {
        if (block.classList.contains("hide")){
            block.classList.remove("hide");
            button.innerText = "Hide";            
        } else {
            block.classList.add("hide");
            button.innerText = "Show more";
            // false для того чтобы прокручивать страницу нижней частью до нижней части элемента
            elem.scrollIntoView(false);
        }
    });
});