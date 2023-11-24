function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
setVw();
window.addEventListener('resize', setVw);


const header = document.getElementById('header');
function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const offsetValue =  121; 
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offsetValue;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

const FN1 = document.getElementById('FN1');
const EA1 = document.getElementById('EA1');
const P1 = document.getElementById('P1');

const FN1_2 = document.getElementById('FN1_2');
const EA1_2 = document.getElementById('EA1_2');
const P1_2 = document.getElementById('P1_2');

let regExp1 = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$/;
let regExp2 = /\+38\d{10}$|\+38\(\d{3}\)\d{7}$|\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

function RequestBTN() { 
  if(FN1.value && EA1.value && P1.value){
    EA1_2.style.boxShadow=''
    P1_2.style.boxShadow=''
    if (!regExp1.test(EA1.value)) {
      EA1_2.style.boxShadow = '0 0 20px 0.3px #FF0000';
    }
    if (!regExp2.test(P1.value)) {
      P1_2.style.boxShadow = '0 0 20px 0.3px #FF0000';
    }
    if (FN1.value && regExp1.test(EA1.value) && regExp2.test(P1.value)) {
      //Отправка данных на сервер
      FN1_2.style.boxShadow = '0 0 20px 0.3px green';
      EA1_2.style.boxShadow = '0 0 20px 0.3px green';
      P1_2.style.boxShadow = '0 0 20px 0.3px green';
      setTimeout(()=>{
        FN1_2.style.boxShadow = '';
        P1_2.style.boxShadow='';
        EA1_2.style.boxShadow=''
      },3000)
    } 
  }  
}
