// setTimeout(() => {
//     document.getElementsByClassName("prompt_window")[0].style.display = "block";
// }, 1000);

let prompts_btns = document.getElementsByClassName("prompt_btn");

for (let btn of prompts_btns) {
    btn.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.style.display = "none";
    });
}

let search = document.getElementsByClassName("search")[0];

search.addEventListener("click", () => {
    let element = document.getElementById("search_section");

    let show = window.getComputedStyle(element).display;

    show == "none" ? element.style.display = "block" : element.style.display = "none";

});

let language  = document.getElementsByClassName("language")[0];

language.addEventListener("click", () => {
    let element = document.getElementById("language_panel");
    let show = window.getComputedStyle(element).display;
    let chevron = document.getElementsByClassName("fa-chevron-down")[0];

    if (chevron.style.transform == "") {
        chevron.style.transform = "rotate(180deg)";
    }
    else {
        chevron.style.transform = "";
    }

    show == "none" ? element.style.display = "block" : element.style.display = "none";
});

let bar  = document.getElementsByClassName("fa-bars")[0];


bar.addEventListener("click", () => {
    console.log("dsa");
    let element = document.getElementsByClassName("mobile-sidebar")[0];
    let show = window.getComputedStyle(element).display;

    show == "none" ? element.style.display = "block" : element.style.display = "none";
});
