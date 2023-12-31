const mainScrollBtn = document.querySelector('.main-btn-img');
const sectionSecond = document.querySelector('.second-section');

mainScrollBtn.addEventListener('click', () => {
    window.scrollBy({top: sectionSecond.getBoundingClientRect().top, behavior: 'smooth'})
})

