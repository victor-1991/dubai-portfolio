const mobileNav = () => {
    function mobileMenuToggle() {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerIcon = document.querySelector('.hamburger__icon');
        const mobileMenuBody = document.querySelector('.mobile-menu');
        const body = document.body;
        hamburger.addEventListener('click', () => {
            hamburgerIcon.classList.toggle('hamburger__icon--active');
            mobileMenuBody.classList.toggle('open');
            body.classList.toggle('disable-scroll');
        })
    }
    mobileMenuToggle();

    function subMenuToggle() { 
        const dropMenuItems = document.querySelectorAll('.mobile-nav__item-drop');

        dropMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
                const subMenuBody = item.querySelector('.mobile-nav__drop-menu-wrapper');
                if (subMenuBody.style.maxHeight) {
                    subMenuBody.style.maxHeight = null;
                  } else {
                    subMenuBody.style.maxHeight = subMenuBody.scrollHeight + "px";
                  }
            })
        })
    }
    subMenuToggle();
}

export default mobileNav;