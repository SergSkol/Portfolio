const works = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 1.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 2.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 3.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 4 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 4.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 5 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 5.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem 6 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './img/Snapshoot Portfolio 6.png',
    technologies: ['Codekid', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    linkToLiveVersion: 'http://example.com',
    linkToSource: 'http://github.com',
  },
];

// Dynamic details and popup window

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

const workContainer = document.querySelector('.work-container');

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

    // open modal window

    workCardButton.addEventListener('click', () => {
      const isDesktopOrMobile = isHidden('.logo');

      const modalWorkContainer = document.querySelector('.modal-work-container');

      modalWorkContainer.classList.add('modal');
      modalWorkContainer.classList.remove('hide');
      const modalWorkItem = addElement('div', modalWorkContainer, 'modal-work-item');
      const modalWorkCard = addElement('div', modalWorkItem, 'work-card');

      let modalCloseIcon = null;

      if (isDesktopOrMobile) {
        const modalFeaturedImage = addElement('img', modalWorkCard, 'work-card-image-desktop');
        modalFeaturedImage.src = work.featuredImage;

        modalCloseIcon = addElement('img', modalWorkCard, 'modal-close-icon-desktop');
        modalCloseIcon.src = './img/Disabled.png';

        const modalWorkCardDesktop = addElement('div', modalWorkCard, 'work-card-desktop');
        const modalWorkCardTitle = addElement('h3', modalWorkCardDesktop, 'work-card-title-desktop');
        modalWorkCardTitle.innerHTML = work.name;

        const modalWorkCardButton1 = addElement('a', modalWorkCardDesktop, 'modal-work-card-button-desktop');
        modalWorkCardButton1.innerHTML = 'See Live';
        modalWorkCardButton1.href = work.linkToLiveVersion;

        const modalWorkCardButtonImg1 = addElement('img', modalWorkCardButton1, 'modal-work-card-button-img');
        modalWorkCardButtonImg1.src = './img/see live icon.png';

        const modalWorkCardButton2 = addElement('a', modalWorkCardDesktop, 'modal-work-card-button-desktop');
        modalWorkCardButton2.innerHTML = 'See Source';
        modalWorkCardButton2.href = work.linkToSource;

        const modalWorkCardButtonImg2 = addElement('img', modalWorkCardButton2, 'modal-work-card-button-img');
        modalWorkCardButtonImg2.src = './img/see source icon.png';
      } else {
        const modalFeaturedImage = addElement('img', modalWorkCard, 'work-card-image');
        modalFeaturedImage.src = work.featuredImage;

        modalCloseIcon = addElement('a', modalWorkCard, 'modal-close-icon');
        modalCloseIcon.classList.add('fa');
        modalCloseIcon.classList.add('fa-times');

        const modalWorkCardTitle = addElement('h3', modalWorkCard, 'work-card-title');
        modalWorkCardTitle.innerHTML = work.name;
      }

      const modalWorkCardTags = addElement('ul', modalWorkCard, 'work-card-tags');
      modalWorkCardTags.classList.add('nobull');

      workTechnologies.forEach((technology) => {
        const modalWorkCardTag = addElement('li', modalWorkCardTags, 'work-card-tag');
        modalWorkCardTag.innerHTML = technology;
      });

      const modalWorkCardDescr = addElement('p', modalWorkCard, 'work-card-descr');
      modalWorkCardDescr.innerHTML = work.description;

      if (!isDesktopOrMobile) {
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

      modalCloseIcon.addEventListener('click', () => {
        modalWorkContainer.classList.add('hide');
        modalWorkContainer.removeChild(modalWorkContainer.firstElementChild);
      });
    });
  });
};

// Popup menu

const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#closeIcon');
const menuBox = document.querySelector('#menuBox');
const menuItems = document.querySelectorAll('.menuItem');

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

// Validate contact form (email in lowerCase) 

const contactForm = document.querySelector('.contact-me-form');
const contactFormEmail = document.querySelector('#email');
const contactFormError = document.querySelector('.contact-form-error');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = contactFormEmail.value;
  if (email === email.toLowerCase()) {
    contactForm.submit();
    contactForm.reset();
  } else {
    contactFormError.innerHTML = 'ERROR: Email should be in <br>lower case. Form is not sent.';
  }
});

// Preserve data in browser (localStorage) 

const storageKey = 'PortfolioContactFormData1';
const currentFormName = document.querySelector('#name');
const currentFormEmail = document.querySelector('#email');
const currentFormMsg = document.querySelector('#msg');
const currentFormFields = document.querySelectorAll('.input-field');

function loadDataFromLocalStorage() {
  const dataLoaded = JSON.parse(localStorage.getItem(storageKey));
  currentFormName.value = dataLoaded.name;
  currentFormEmail.value = dataLoaded.email;
  currentFormMsg.value = dataLoaded.msg;
}

function saveDataToLocalStorage() {
  const dataSaved = {
    name: currentFormName.value,
    email: currentFormEmail.value,
    msg: currentFormMsg.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(dataSaved));
}

window.onload = () => {
  loadDataFromLocalStorage();
}

currentFormFields.forEach((field) => {
  field.addEventListener('change', () => {
    saveDataToLocalStorage();
  })
})
