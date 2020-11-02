let menuBtn = document.querySelector('.menu-btn');
let mobileNav = document.querySelector('.navBucket');

menuBtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle('hide');
    // mobileNav.style.transform = 'scale(1,1)';
})