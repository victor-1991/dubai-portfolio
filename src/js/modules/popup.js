function popupControls() {
    const popupLinks = document.querySelectorAll('.popup-link');
    const popupWindow = document.querySelector('.popup');
    const popupCloseIcon = document.querySelectorAll('.popup__close');
    const lockPadding = document.querySelectorAll('lock-padding');
    const body = document.querySelector('body');

    let unlock = true;
    const timeout = 800;
    

    if (popupLinks.length > 0) {
        popupLinks.forEach(item => {
            item.addEventListener('click', function(e) {
                popupOpen(popupWindow);
                e.preventDefault();
            })
        })
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.active');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            curentPopup.classList.add('active');
            curentPopup.addEventListener('click', function(e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            })
        }
    }

    if (popupCloseIcon.length > 0) {
        popupCloseIcon.forEach(item => {
            item.addEventListener('click', function(e) {
                popupClose(this.closest('.popup'));
                e.preventDefault();
            })
        })
    }

    function popupClose(curentPopup, doUnlock = true) {
        if (unlock) {
            curentPopup.classList.remove('active');
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const pr = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
        if (lockPadding.length > 0) {
            lockPadding.forEach(item => {
                item.style.paddingRight = pr;
            });
        }
        body.style.paddingRight = pr;
        body.classList.add('disable-scroll');
        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function() {
            if (lockPadding.length > 0) {
            lockPadding.forEach(item => {
                item.style.paddingRight = '0px';
            })
            }
            body.style.paddingRight = '0px';
            body.classList.remove('disable-scroll');
        }, 0);
        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout)
    }
    document.addEventListener('keydown', function(e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.active');
            popupClose(popupActive);
        }
    });
}

export default popupControls;