function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo');

    function activeTab(index)
    {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.toggle('ativo');
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function(){
        activeTab(index);
      })
  });

  }
}

initTabNav();

function initAccordion(){

  const accordionList = document.querySelectorAll('.js-accordion dt');

  if(accordionList.length){
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
  
    function activeAccordion()
    {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave(){

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //se começa com #, é um link interno

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    //window.scrollTo({
  //   top: topo,
  //   behavior: 'smooth'
  //
  // })

  section.scrollIntoView({
    behavior:'smooth',
    block: 'start'

  })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}

initScrollSuave();

const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;

function animaScroll(){
  sections.forEach((section) => {
    const sectiontop = section.getBoundingClientRect().top;
    if(sectiontop < 0){
      section.classList.add('ativo');
    }
  })
}

window.addEventListener('scroll', animaScroll);

