"use strict";
let accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach(element => {
    let title = element.querySelector(".accordion-title");
    title.addEventListener("click", () => {
        accordionItems.forEach(ele => {
            if (ele !== element) {
                ele.classList.remove("active");
            } else {
                ele.classList.toggle("active");
            };
        });
    });
});