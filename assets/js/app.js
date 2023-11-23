function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
setVw();
window.addEventListener('resize', setVw);

new WOW().init();
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}