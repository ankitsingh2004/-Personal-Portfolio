var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");

function opentab(tabname, event) {
    for (let tabl of tablinks) {
        tabl.classList.remove("active-link");
    }
    for (let tabcont of tabcontains) {
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
