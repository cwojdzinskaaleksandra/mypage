const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const link = document.querySelectorAll('nav ul a');

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// }, false);

// for (let i = 0; i < link.length; i++) {
//     link[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         navbarLinks.classList.remove('active');
//     }, false);
// }