let menuicon = document.querySelector("#box-icon");
let navber = document.querySelector(".navber");
menuicon.onclick = () => {
    menuicon.classList.toggle("bx-x");
    navber.classList.toggle("active");
}