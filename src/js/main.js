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

toggleAnimation();

