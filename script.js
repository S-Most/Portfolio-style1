const navitems = document.querySelectorAll("nav li");
const navlist = document.querySelector("nav ul");

navitems.forEach(el => {
    el.addEventListener("click", (e) => {
        if(e.target.innerText == "About Me") {
            navlist.style.backgroundColor = "blue";
        }
        if(e.target.innerText == "Projects") {
            navlist.style.backgroundColor = "red";
        }
        if(e.target.innerText == "Contact") {
            navlist.style.backgroundColor = "purple";
        }
        if(e.target.innerText == "CV") {
            navlist.style.backgroundColor = "orange";
        }
    });
})
