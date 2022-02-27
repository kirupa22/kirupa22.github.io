// /*==================== MENU SHOW Y HIDDEN ====================*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click',() => {
//         navMenu.classList.remove('show-menu')
//     })
// }


// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills__content')
// const  skillsHeader = document.querySelectorAll('.skill__header')
// function toggleSkills(){
//     let itemClass = this.parentNode.ClassName

//     for(i=0;i<skillsContent.length;i++){
//         skillsContent[i].className='skills__content skills__close'
//     }
//     if(itemClass === 'skills__content skills__close'){
//         this.parentNode.className='skills__content skills__open'
//     }
// }
// skillsHeader.forEach((el) =>{
//     el.addEventListener('click',toggleSkills)
// })
// /*==================== QUALIFICATION TABS ====================*/

// const tabs = document.document.querySelectorAll("[data-target]")
// const tabContents = document.querySelectorAll('[data-content]')
// tabs.forEach(tabs => {
//     tabs.addEventListener('click',()=>{
//         const target = document.querySelector(tab.dataset.target)
//         tabContents.forEach(tabContent => {
//             tabContent.classList.add('qualification__active')
//         });
//         target.classList.add('qualification__active')
//         tabs.forEach(tab=>{
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')
//     })
// })
// /*==================== SERVICES MODAL ====================*/


// /*==================== PORTFOLIO SWIPER  ====================*/

// var swiper = new Swiper('.portfolio__container',{
//     cssMode = true,
//     loop = true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination:{
//         el: ".swiper-pagination",
//         clickable: true
//     },
// });
// /*==================== TESTIMONIAL ====================*/


// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

// const sections = document.querySelectorAll('section[id]')
// function scrollActive(){
//     const scrollY = windows.pageYOffset
//     sections.forEach(current => {
//         const sectionheight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute("id")
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelectorAll(".nav__menu a[href*=" + sectionId +"]").classList.add('active-link')
//         }
//         else{
//             document.querySelectorAll(".nav__menu a[href*=" + sectionId +"]").classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll',scrollActive)
// /*==================== CHANGE BACKGROUND HEADER ====================*/ 
// function scrollHeader(){
//     const nav = document.getElementById("header")
//     if(this.scrollY >=800 ) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
// }
// window.addEventListener('scroll',scrollHeader)
// /*==================== SHOW SCROLL UP ====================*/ 

// function scrollUp(){
//     const scrollUp = document.getElementById('scroll-up')
//     if(this.scrollY >=560 ) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll',scrollUp)
// /*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }
// themeButton.addEventListener('click',() => {
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     localStorage.setItem('selected-theme',getCurrentTheme())
//     localStorage.setItem('selected-icon',getCurrentIcon())

// })
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'   
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content")
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
            
        });
        target.classList.add('qualification__active')
        tabs.forEach(tab => {
           tab.classList.remove("qualification__active")
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

  });
/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id")
        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelectorAll(".nav__menu a[href*=" + sectionId +"]").classList.add('active-link')
        }
       else{
            document.querySelectorAll(".nav__menu a[href*=" + sectionId +"]").classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll',scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById("header")
    if(this.scrollY >=800 ) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >=560 ) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    
}
window.addEventListener('scroll',scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? ' dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}
themeButton.addEventListener('click' ,() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbw_TmZkYFg9SuwmmTJuYiDRtaqUu9jirV2vnHkzC-Vxd5F9Wk0thujq7eRKX9_N_NZdDw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})