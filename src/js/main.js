const toggleAnimation = () => {
    const icon_toggle = document.querySelector('.icon-toggle');
    const nav = document.querySelector('.nav-links');
    const NavLinks = document.querySelectorAll('.nav-links li');
    icon_toggle.addEventListener('click', () => {
        // Toggle animation with click
        nav.classList.toggle('icon-toggle-activate');
        // Animation Links
        NavLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `NavLinkAnimation 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        // Icon Toggle Aninamtion
        icon_toggle.classList.toggle('toggle');
    });
}

$('.nav-link').click(function(e){
    e.preventDefault();
    
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

        $('html,body').animate({
            scrollTop: targetOffset
        },1000);
});

function animeScroll(){
    var $target = $('.animate-right, .animate-left'),
        animationClass = 'anime-start',
        documentTop = $(document).scrollTop(),
        offset = $(window).height() / 6;

        console.log(offset);

    $target.each(function(){
        var itemTop = $(this).offset().top;

        if(documentTop > itemTop - 250){
            $(this).addClass(animationClass);
        }else{
            $(this).removeClass(animationClass);
        }
    });

    
}

$(document).scroll(function(){
    animeScroll();
});

toggleAnimation();

