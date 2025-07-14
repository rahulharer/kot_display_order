statusDropdown = function () {
    console.log("inside");
    let mainhgt = document.querySelectorAll('.kot_item_detls')
    let closeDropdown = document.querySelectorAll('.kot_item_detls > ul > li')
    let defaultDropdown = document.querySelectorAll('.default_option');
    let newValue = document.querySelectorAll('.default_option li');
    let selectList = document.querySelectorAll('.select_ul li');

    closeDropdown.forEach(function (x) {
        let child01 = x.children[0];
        let child02 = x.children[1];
        child01.addEventListener('click', function () {
            child01.nextElementSibling.nextElementSibling.classList.remove('active');
        })
        child02.addEventListener('click', function () {
            child02.nextElementSibling.classList.remove('active');
        })
    });

    defaultDropdown.forEach(function (e) {
        e.addEventListener('click', function () {
            console.clear();
            let parent = e.parentElement;
            defaultDropdown.forEach(function (b) {
                if (b !== e) {
                    let parent = b.parentElement;
                    parent.classList.remove('active');
                }
            });
            parent.classList.toggle('active');

            // let orderParent = e.parentElement.parentElement;
            // let scroll = orderParent.offsetTop;
            // let defaultValue = "290"

            // if(scroll > defaultValue){
            //   let dropdown = e.nextElementSibling;
            //   dropdown.style.bottom = "42px";
            //   dropdown.style.top = "auto";
            // }   
        });
    });
    selectList.forEach(function (e) {
        e.addEventListener('click', function () {
            let listValue = e.innerHTML;
            let defaultValue = e.parentElement.previousElementSibling.children[0];
            defaultValue.innerHTML = listValue;
            let wrapper = e.parentElement.parentElement;
            wrapper.classList.remove('active');
            let getClass = e.children[0].classList[1];
            let splitClass = getClass.split("");
            let removeEnd = splitClass.splice(-3);
            let stringClass = splitClass.join("");
            function addActive(e) {
                return `${e}active`;
            }
            addActive(stringClass)
            let mainParent = e.parentElement.parentElement.parentElement;
            let mainParentClass = mainParent.classList;
            mainParent.classList.remove(mainParentClass)
            mainParent.classList.add(addActive(stringClass))

        });
    });
}


enableMenuHeadTab = function () {
    console.log("inside");
    $(".tabs-list li").on("click", function () {
        let tabId = $(this).find("a").attr("data-target");
        $(".tabs-list li, .tab").removeClass("active");

        $(".tab").hide();
        $("#" + tabId).show();
        $(this).addClass("active");
    });

    $(".menu_head_wrapper li a").on("click", function (e) {
        e.preventDefault();
    });

    $(".menu_head_wrapper li").on("click", function (e) {
        let tabId = $(this).find("a").attr("data-target");
        $(".menu_head_wrapper li, .menu_head_tab").removeClass("menu_head_active");

        $(".menu_head_tab").hide();
        $("#" + tabId).show();
        $(this).addClass("menu_head_active");
        $("#" + tabId).find(".tabs-list li:first").find("a").click();
    });

    // displayItemNameOnHover();
};

toggleHeaderOption = function () {
    $(".hdr_menu").on("click", function () {
        $(".hdr_drp_dwn").slideToggle();
        $(".clr_indctr_lst, .view_levl_lst").slideUp();
    });
    $(".clr_indctr_icon button").on("click", function () {
        $(".clr_indctr_lst").slideToggle();
        $(".hdr_drp_dwn, .view_levl_lst").slideUp();
    });
    $(".view_levl_optn > button").on("click", function () {
        $(".view_levl_lst").slideToggle();
        $(".clr_indctr_lst, .hdr_drp_dwn").slideUp();
    });
    $(".sub_header_parnt, .main_cnt_blk").on("click", function () {
        $(".hdr_drp_dwn, .clr_indctr_lst, .view_levl_lst").hide();
    });

    $(".mob_menu").on("click", function () {
        $(".user_login_parnt").toggleClass("panel_open");
    });
};

toolTip = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

}
