document.addEventListener("DOMContentLoaded", function () {
    // burger menu
    document.querySelector(".burger-menu").addEventListener('click', function (doIt) {
        doIt.stopPropagation();
        document.querySelector(".burger-menu").classList.toggle("open");
        document.querySelector(".nav--items").classList.toggle("open");
        document.body.classList.toggle('open');
    });

    document.addEventListener("click", function () {
        if (document.querySelector(".burger-menu").classList.contains("open")) {
            document.querySelector(".burger-menu").classList.toggle("open");
            document.querySelector(".nav--items").classList.toggle("open");
            document.body.classList.toggle('open');
        }
    });
    // implementation slider
    const leftArrow = document.querySelector('.slider--left-arrow');
    const rightArrow = document.querySelector('.slider--right-arrow');
    const slider = document.querySelector('.slider--container');
    const slidCount = document.querySelectorAll('.slid-item').length;
    const progresBarCount = document.querySelectorAll('.progres-bar--item');
    let slidIndex = 0;
    const timeSlid = 5000;

    // console.log(slidCount);

    function leftSlid() {
        slidIndex = (slidIndex + 1) % slidCount;
        sliderMove();
    };

    function rightSlid() {
        slidIndex = (slidIndex - 1 + slidCount) % slidCount;
        sliderMove();
    };

    leftArrow.addEventListener('click', leftSlid);

    rightArrow.addEventListener('click', rightSlid);

    function sliderMove() {
        const slidWidth = slider.clientWidth;
        const slidMove = -slidIndex * slidWidth;
        progresBarCount[(slidIndex - 1 + slidCount) % slidCount].classList.remove('activ');
        slider.style.transform = `translateX(${slidMove}px)`;
        progresBarCount[slidIndex].classList.add('activ');
    }

    let idInterval = setInterval(() => {
        leftSlid();
    }, timeSlid);

    // слайдер останавливается если курсор наведен на слайдер или ушел из области слайдера
    slider.addEventListener('mouseover', () => {
        clearInterval(idInterval);
    });
    slider.addEventListener('mouseout', () => {
        setTimeout(idInterval = setInterval(() => {
            leftSlid();
        }, timeSlid), 1);
    });

    // слайдер останавливается если мышь зажата или отпущена
    slider.addEventListener('mousedown', () => {
        clearInterval(idInterval);
    });
    slider.addEventListener('mouseup', () => {
        setTimeout(idInterval = setInterval(() => {
            leftSlid();
        }, timeSlid), 1);
    });

    // перемещение слайдера в ручную (зажали слайдер и двигаем влево или праао)


    window.addEventListener('load', () => {
        sliderMove();
    });

});