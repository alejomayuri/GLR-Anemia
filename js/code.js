const displayTitular = (num) => {
    $('.titular-container').css('display', 'none')
    $(`.titular-container-${num}`).css('display', 'block')

    $('.titular').css('color', '#000')
    $(`.titular-${num}`).css('color', '#c51e35')
}
const displayTitularXD = (num) => {
    alert(num)
}

$(document).ready(function() {

    const a = 1
    const b = 2
    const c = 3

    $('#titular-1').click(() => displayTitular(a));
    $('#titular-2').click(() => displayTitular(b));
    $('#titular-3').click(() => displayTitular(c));

    $('#titular-1-mov').click(() => displayTitular(a));
    $('#titular-2-mov').click(() => displayTitular(b));
    $('#titular-3-mov').click(() => displayTitular(c));
    
    $('#change-page-1').click(() => displayTitular(b));
    $('#change-page-2').click(() => displayTitular(c));
    $('#last-page-2').click(() => displayTitular(a));
    $('#change-page-3').click(() => displayTitular(b));

    document.onscroll = function() {
        window.scrollY >= 7 || window.pageYOffset >= 7 ? 
        $('#w-header').addClass('sticky-gray')
        :
        $('#w-header').removeClass('sticky-gray')
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});