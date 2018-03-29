//this adds icon for filter item hover state dynamically
$(".filter-item").hover(function(){
    $(this).append('<i class="fas fa-angle-right fa-lg arrow-icon"></i>');
    $(this).addClass("active-item");
    }, function(){
    $(".arrow-icon").remove();
    $(this).removeClass("active-item");
});





// This adds border dynamically when fewer items in grid are present.
item_boxes = document.querySelectorAll(".item-box");

if(item_boxes.length>4){
    $(".row").addClass("border-specially-added");
}else{
    $(".item-box").addClass("border-specially-added");
   
}










// enables side navigation in mobile devices

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


