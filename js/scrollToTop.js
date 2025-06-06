const btn = document.getElementById("scrollToTopButton");

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Подключим ивент прокрутки страницы
window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight / 2){
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
})