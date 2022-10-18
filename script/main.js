const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');
const menuBox = document.querySelector('#menuBox');
const menuItems = document.querySelectorAll('.menuItem');
const workContainer = document.querySelector('.work-container');

const works = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 1.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com'},
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 2.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com'},
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 3.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com'},
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 4 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 4.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com'},
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 5 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 5.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com'},
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 6 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 6.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com'}
];

menuIcon.addEventListener('click', () => {
  menuBox.classList.toggle('open-menu');
});

closeIcon.addEventListener('click', () => {
  menuBox.classList.toggle('open-menu');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu');
  });
});

function addElement(elementType, parent, className) {
  const element = document.createElement(elementType);
  element.classList.add(className);
  parent.appendChild(element);
  return element;
}

function isHidden(className) {
  const element = document.querySelector(className);
  const style = getComputedStyle(element);
  return (style.display === 'none');
}

window.onload = function buildWorks() {
  works.forEach((work) => {
    const workItem = addElement('div', workContainer, 'work-item');
    const workCard = addElement('div', workItem, 'work-card');
    const featuredImage = addElement('img', workCard, 'work-card-image');
    featuredImage.src = work.featuredImage;
    const workCardTitle = addElement('h3', workCard, 'work-card-title');
    workCardTitle.innerHTML = work.name;
    const workCardTags = addElement('ul', workCard, 'work-card-tags');
    workCardTags.classList.add('nobull');
    const workTechnologies = work.technologies;
    workTechnologies.forEach((technology) => {
      const workCardTag = addElement('li', workCardTags, 'work-card-tag');
      workCardTag.innerHTML = technology;
    });
    const workCardButton = addElement('button', workCard, 'work-card-button');
    workCardButton.innerHTML = 'See Project';

    //open modal window

    workCardButton.addEventListener('click', () => {
      const isDisplayOrMobile = isHidden('.logo');

      const modalWorkContainer = document.querySelector('.modal-work-container');

      modalWorkContainer.classList.add('modal');
      modalWorkContainer.classList.remove('hide');
      const modalWorkItem = addElement('div', modalWorkContainer, 'work-item');
      const modalWorkCard = addElement('div', modalWorkItem, 'work-card');
     
      const modalFeaturedImage = addElement('img', modalWorkCard, 'work-card-image');
      modalFeaturedImage.src = work.featuredImage;

      const modalCloseIcon = addElement('a', modalWorkCard, 'close-icon');
      modalCloseIcon.classList.add('fa');
      modalCloseIcon.classList.add('fa-times');
     
      if (isDisplayOrMobile) {
        const modalWorkCardDisplay = addElement('div', modalWorkCard, 'work-card-display');
        const modalWorkCardTitle = addElement('h3', modalWorkCardDisplay, 'work-card-title-display');
        modalWorkCardTitle.innerHTML = work.name;

        const modalWorkCardButton1 = addElement('a', modalWorkCardDisplay, 'modal-work-card-button-display');
        modalWorkCardButton1.innerHTML = 'See Live';
        modalWorkCardButton1.href = work.linkToLiveVersion;
        
        const modalWorkCardButtonImg1 = addElement('img', modalWorkCardButton1, 'modal-work-card-button-img');
        modalWorkCardButtonImg1.src = './img/see live icon.png';

        const modalWorkCardButton2 = addElement('a', modalWorkCardDisplay, 'modal-work-card-button-display');
        modalWorkCardButton2.innerHTML = 'See Source';
        modalWorkCardButton2.href = work.linkToSource;

        const modalWorkCardButtonImg2 = addElement('img', modalWorkCardButton2, 'modal-work-card-button-img');
        modalWorkCardButtonImg2.src = './img/see source icon.png';

      } else {
        const modalWorkCardTitle = addElement('h3', modalWorkCard, 'work-card-title');
        modalWorkCardTitle.innerHTML = work.name;
      }

      const modalWorkCardTags = addElement('ul', modalWorkCard, 'work-card-tags');
      modalWorkCardTags.classList.add('nobull');
      
      workTechnologies.forEach((technology) => {
        let modalWorkCardTag = addElement('li', modalWorkCardTags, 'work-card-tag');
        modalWorkCardTag.innerHTML = technology;
      });

      const modalWorkCardDescr = addElement('p', modalWorkCard, 'work-card-descr');
      modalWorkCardDescr.innerHTML = work.description;

      if (!isDisplayOrMobile) {
        const modalWorkCardButton1 = addElement('a', modalWorkCard, 'modal-work-card-button');
        modalWorkCardButton1.innerHTML = 'See Live';
        modalWorkCardButton1.href = work.linkToLiveVersion;

        const modalWorkCardButtonImg1 = addElement('img', modalWorkCardButton1, 'modal-work-card-button-img');
        modalWorkCardButtonImg1.src = './img/see live icon.png';
      
        const modalWorkCardButton2 = addElement('a', modalWorkCard, 'modal-work-card-button');
        modalWorkCardButton2.innerHTML = 'See Source';
        modalWorkCardButton2.href = work.linkToSource;

        const modalWorkCardButtonImg2 = addElement('img', modalWorkCardButton2, 'modal-work-card-button-img');
        modalWorkCardButtonImg2.src = './img/see source icon.png';
      }
 
      modal_closeIcon.addEventListener('click', () => {
        modalWorkContainer.classList.add('hide');
        modalWorkContainer.removeChild(modalWorkContainer.firstElementChild);
      });
    });
  });
};
