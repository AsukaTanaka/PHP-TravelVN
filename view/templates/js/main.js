function Menu() {
    let ic_menu = document.querySelector(".icon-menu");
    let navbar = document.querySelector(".navbar");

    ic_menu.addEventListener("click", () => {
        ic_menu.classList.toggle("active");
        navbar.classList.toggle("open");
    });

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".menu");
          
          $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
        });
    });
}

Menu();