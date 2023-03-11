const tabs = document.querySelectorAll(".services-tabs__btn ");
const contents = document.querySelectorAll(".services-cont ");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Змінюємо активний таб
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");

        // Змінюємо відображуваний контент
        contents.forEach((content) => {
            content.classList.remove("show");
        });
        contents[index].classList.add("show");
    });
});