jQuery(document).ready(function(){
  $("input").css({
    background: "none",
    padding: "10px",
    borderColor:"#0f0"
  });




    // switch(event.which){
    //   case 1:
    //     console.log("Нажата левая кнопка мыши");
    //     break;
    //   case 2:
    //     console.log("Нажата средняя кнопка мыши");
    //     break;
    //   case 3:
    //     console.log("Нажата правая кнопка мыши");
    //     break;
    // }


  // Выпадающее меню
  $("[data-trigger='dropdown']").on("mouseenter",function(){
    var submenu = $(this).parent().find(".submenu");
    //submenu.addClass("active");
    submenu.fadeIn(300);

    $(".profile-menu").on("mouseleave",function(){
      //submenu.removeClass("active");
      submenu.fadeOut(300);
    })
  });
})
