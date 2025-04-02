var Typed= new Typed(".text",{
    strings:["Tiktoker" , "Youtuber  " , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});















const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.oneclick = () => {
    navLinks.classList.toggle('active');
}
