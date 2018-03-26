hamburger_icon = document.getElementById("menu-icon");
sidenav = document.querySelector(".sidenav_bar");
close_menu = document.getElementById("close-icon");

hamburger_icon.addEventListener("click",openSidenav);
close_menu.addEventListener("click",closeSidenav);

function openSidenav(){
    sidenav.style.display = "block";
}

function closeSidenav(){
    sidenav.style.display = "none";
}