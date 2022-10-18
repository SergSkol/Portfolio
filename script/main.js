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
    linkToSource: 'http://github.com'
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 2.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com', 
    linkToSource: 'http://github.com'
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 3.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com', 
    linkToSource: 'http://github.com'
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 4 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 4.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com', 
    linkToSource: 'http://github.com'
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 5 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 5.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com', 
    linkToSource: 'http://github.com'
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 6 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 6.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com', 
    linkToSource: 'http://github.com'
  }
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
  return (style.display == 'none');
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
      let workCardTag = addElement('li', workCardTags, 'work-card-tag');
      workCardTag.innerHTML = technology;
    });
    const workCardButton = addElement('button', workCard, 'work-card-button');
    workCardButton.innerHTML = 'See Project';

    //open modal window
    workCardButton.addEventListener('click', () => {
      const isDisplayOrMobile = isHidden('.logo');

      const modal_workContainer = document.querySelector('.modal-work-container');

      modal_workContainer.classList.add('modal');
      modal_workContainer.classList.remove('hide');
      const modal_workItem = addElement('div', modal_workContainer, 'work-item');
      const modal_workCard = addElement('div', modal_workItem, 'work-card');
     
      const modal_featuredImage = addElement('img', modal_workCard, 'work-card-image');
      modal_featuredImage.src = work.featuredImage;

      const modal_closeIcon = addElement('a', modal_workCard, 'close-icon');
      modal_closeIcon.classList.add('fa');
      modal_closeIcon.classList.add('fa-times');
     
      if (isDisplayOrMobile) {
        const modal_workCardDisplay = addElement('div', modal_workCard, 'work-card-display');
        const modal_workCardTitle = addElement('h3', modal_workCardDisplay, 'work-card-title-display');
        modal_workCardTitle.innerHTML = work.name;

        const modal_workCardButton1 = addElement('a', modal_workCardDisplay, 'modal-work-card-button-display');
        modal_workCardButton1.innerHTML = 'See Live';
        modal_workCardButton1.href = work.linkToLiveVersion;
        
        const modal_workCardButtonImg1 = addElement('img', modal_workCardButton1, 'modal-work-card-button-img');
        modal_workCardButtonImg1.src = './img/see live icon.png';

        const modal_workCardButton2 = addElement('a', modal_workCardDisplay, 'modal-work-card-button-display');
        modal_workCardButton2.innerHTML = 'See Source';
        modal_workCardButton2.href = work.linkToSource;

        const modal_workCardButtonImg2 = addElement('img', modal_workCardButton2, 'modal-work-card-button-img');
        modal_workCardButtonImg2.src = './img/see source icon.png';

      } else {
        const modal_workCardTitle = addElement('h3', modal_workCard, 'work-card-title');
        modal_workCardTitle.innerHTML = work.name;
      }

      const modal_workCardTags = addElement('ul', modal_workCard, 'work-card-tags');
      modal_workCardTags.classList.add('nobull');
      
      workTechnologies.forEach((technology) => {
        let modal_workCardTag = addElement('li', modal_workCardTags, 'work-card-tag');
        modal_workCardTag.innerHTML = technology;
      });

      const modal_workCardDescr = addElement('p', modal_workCard, 'work-card-descr');
      modal_workCardDescr.innerHTML = work.description;

      if (!isDisplayOrMobile) {
        const modal_workCardButton1 = addElement('a', modal_workCard, 'modal-work-card-button');
        modal_workCardButton1.innerHTML = 'See Live';
        modal_workCardButton1.href = work.linkToLiveVersion;

        const modal_workCardButtonImg1 = addElement('img', modal_workCardButton1, 'modal-work-card-button-img');
        modal_workCardButtonImg1.src = './img/see live icon.png';
      
        const modal_workCardButton2 = addElement('a', modal_workCard, 'modal-work-card-button');
        modal_workCardButton2.innerHTML = 'See Source';
        modal_workCardButton2.href = work.linkToSource;

        const modal_workCardButtonImg2 = addElement('img', modal_workCardButton2, 'modal-work-card-button-img');
        modal_workCardButtonImg2.src = './img/see source icon.png';
      }
 
      modal_closeIcon.addEventListener('click', () => {
        modal_workContainer.classList.add('hide');
        modal_workContainer.removeChild(modal_workContainer.firstElementChild);
      });
    });
  });
}
