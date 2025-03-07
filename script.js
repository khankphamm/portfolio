let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

const menuItem = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const progress_skill = document.querySelectorAll('#soft-skills .progress');


// var softSkill_item = document.querySelectorAll(".soft-skills_items");
var softSkill = document.getElementById('soft-skills');


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    // console.log(current);
    menuItem.forEach(a => {
        a.classList.remove('activeNAV');
        if (a.classList.contains(current)) {
            a.classList.add('activeNAV');
        }
    })

    if (current == "soft-skills") {
        softSkill.classList.add('active');
    }
})
console.log(document.querySelector('.soft-skills.active'));





function activeItemNav() {
    menuItem.forEach((item) =>
        item.classList.remove('activeNAV'));
    this.classList.add('activeNAV');
}


menuItem.forEach((item) =>
    item.addEventListener('click', activeItemNav));

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');


// pic
$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
        dots: false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                dots: true,

            },
        },],
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

// lable
const labels = document.querySelectorAll('.form__control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 40}ms"> ${letter} </span>`)
        .join('')
})


// checkbox dark mode
// Thêm hoặc chỉnh sửa các phần sau trong file script.js

var checkboxDarkMode = document.getElementById('checkbox');

checkboxDarkMode.addEventListener('click', () => {
    if (checkboxDarkMode.checked) {
        document.body.classList.add("dark_theme");

        // Thay đổi logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/dkxao2hjv/image/upload/v1727965207/A%CC%89nh_ma%CC%80n_hi%CC%80nh_2024-09-23_lu%CC%81c_18.06.09_gzwjn9.png";

        // Thay đổi hình ảnh mây
        document.querySelector('.clound').innerHTML = `
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852065/My-portfolio/clound-moon-left_jaocus_optimized_dmjzjr.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852066/My-portfolio/clound-moon_peb6rn_optimized_hzeqz3.png" alt="">
        `;

        // Thay đổi hình ảnh home
        document.querySelector('#home .image').innerHTML = `
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652851267/My-portfolio/me_attdm8_jjqfny_optimized_isuewp.png" alt="" class="front-img">
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845805/My-portfolio/dc1-dark_optimized_etjlg4.png" alt="" class="dc1">
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png" alt="" class="dc2">
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png" alt="" class="dc3">
        `;

        // Thay đổi hình ảnh about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652851269/My-portfolio/img_about_ucs7pd_optimized_rjusfe.jpg";

        // Thay đổi hình ảnh about target
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png";

        // Thay đổi hình ảnh project border left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652450175/My-portfolio/project-dark_uq99k2.png";

        // Thay đổi hình ảnh bg fav cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458479/My-portfolio/bg_fav_cover-dark_q0xovc.png";

    } else {
        document.body.classList.remove("dark_theme");

        // Đổi lại logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652856363/My-portfolio/logo__black_optimized_mzimiv.png";

        // Đổi lại hình ảnh mây
        document.querySelector('.clound').innerHTML = `
            <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-left_optimized_xjoubm.png" alt="">
            <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-right_optimized_riwik8.png" alt="">
        `;

        // Đổi lại hình ảnh home
        document.querySelector('#home .image').innerHTML = `
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802935/My-portfolio/ava2_optimized_n9hxyi.png" alt="" class="front-img">
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300890/My-portfolio/dc1_stlq7p.png" alt="" class="dc1">
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc2">
            <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc3">
        `;

        // Đổi lại hình ảnh about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652851269/My-portfolio/img__infor_optimized_optimized_optimized_iqzszn.jpg";

        // Đổi lại hình ảnh about target
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png";

        // Đổi lại hình ảnh project border left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300902/My-portfolio/project_border_ofqone.png";

        // Đổi lại hình ảnh bg fav cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652856357/My-portfolio/bg_fav_cover_optimized_z38zzf.png";
    }
});




// soft skill


// end soft skill

// contact

// end contact