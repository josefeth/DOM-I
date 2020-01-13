const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "MY STRETCH",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
colorChange = () => {
  document.querySelector("body").style.color = "#ff0000";
}

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])


const nav = document.querySelectorAll('nav a');
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

for (var i = 0; i < nav.length; i++) {
  nav[i].style.color = 'green';
}

const nav1 = document.querySelector('nav');
const new1 = document.createElement('a');
new1.textContent = 'NEW-ONE';
nav1.prepend(new1);

const nav2 = document.createElement('a');
nav2.textContent = 'NEW-TWO';
nav1.appendChild(nav2);

new1.style.color = 'green';
new1.style.cursor = 'crosshair';
nav2.style.color = 'green';
nav2.style.cursor = 'crosshair';

const h1Text = document.querySelector('.cta-text h1')
h1Text.innerText = siteContent.cta.h1

const topButton = document.querySelector('.cta-text button')
topButton.innerText = siteContent.cta.button

const topImg = document.getElementById('cta-img');
logo.setAttribute('src', siteContent['cta']['img-src']);
topImg.alt = 'top-logo-image';


const headerh4 = document.querySelectorAll('.text-content h4') 
headerh4[0].innerText = siteContent['main-content']['features-h4']
headerh4[1].innerText = siteContent['main-content']['about-h4']
headerh4[2].innerText = siteContent['main-content']['services-h4']
headerh4[3].innerText = siteContent['main-content']['product-h4']
headerh4[4].innerText = siteContent['main-content']['vision-h4']


const h4content = document.querySelectorAll('.main-content p')
h4content[0].innerHTML = siteContent['main-content']['features-content']
h4content[1].innerHTML = siteContent['main-content']['features-content']
h4content[2].innerHTML = siteContent['main-content']['features-content']
h4content[3].innerHTML = siteContent['main-content']['features-content']
h4content[4].innerHTML = siteContent['main-content']['features-content']

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src']

const contact = document.querySelector('.contact h4')
contact.innerHTML = siteContent.contact['contact-h4']

const contactPar = document.querySelectorAll('.contact p')
contactPar[0].innerHTML = siteContent.contact['address']
contactPar[1].innerHTML = siteContent.contact['phone']
contactPar[2].innerHTML = siteContent.contact['email']

const footer = document.querySelector('footer p')
footer[0].innerText = siteContent.footer['footer-p'];




// const newStuff = document.createElement('footer');
// // Item Creation Step 2: add some content to the newly created div
// newStuff.textContent = 'Website made by Joey Etheridge';
// newStuff.classList.add('footer')
// newStuff.style.backgroundColor ='pink';

// const myStuff = document.querySelector('body');
// myStuff.prepend(newStuff)