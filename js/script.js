document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector("#main-navigation");

    if (!burger || !menu) {
        return;
    }

    burger.addEventListener("click", function () {
        const isOpen = burger.classList.toggle("is-active");

        menu.classList.toggle("is-active", isOpen);

        burger.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        burger.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню"
        );
    });
});