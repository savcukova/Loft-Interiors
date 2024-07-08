// menu 
const menuIcon = document.querySelector(".icon");
const menuList = document.querySelector(".navigation-list");
const menu = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
    if (menu.classList[1] === "fa-bars"){
        menu.classList.add("fa-xmark")
        menu.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        menu.classList.add("fa-bars")
        menu.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }
});

// dark/light mode 
const btn = document.querySelector(".theme-toggle");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
})

// scroll
const scroll = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500){
        scroll.classList.add("show");
    } else {
        scroll.classList.remove("show");
    }
})

scroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//// validate passwords
const formular = document.querySelector(".form-form");
const alertMessage = document.querySelector(".password-alert");

const checkPasswords = () => {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    alertMessage.style.display = (password1 !== password2) ? "block" : "none";
};

formular.addEventListener("input", checkPasswords);

formular.addEventListener("submit", (event) => {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    if (password1 !== password2) {
        event.preventDefault();
        alertMessage.style.display = "block";
    }
});