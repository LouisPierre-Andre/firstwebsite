const menu = document.querySelector('.fa-bars');
const link = document.querySelector('.link');
const header = document.querySelector('.header');
// const section1 = document.querySelector('#section1')

menu.addEventListener('click', function () {
    header.classList.toggle('active');
    // section1.classList.toggle('active')
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-xmark');

})







//////////////////////////////////////////////////////////////////////////////////////////////////////
//   the scrolling effect to the pages

header.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
       header.classList.remove('active')
       header.classList.add('scroll')
       menu.classList.toggle('fa-bars');
       menu.classList.toggle('fa-xmark');
   //  }
})


link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
   //  if (e.target.classList.contains('nav-bar')) {
       document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
    //    header.classList.remove('active')
    //    header.classList.add('scroll')
    //    menu.classList.toggle('fa-bars');
    //    menu.classList.toggle('fa-xmark');
   //  }
})
