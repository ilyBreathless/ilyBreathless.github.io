const header = document.querySelector('.header')
const headerHeight = header.offsetHeight

const nameField = document.querySelector('.form__name')
const emailField = document.querySelector('.form__email')
const phoneField = document.querySelector('.form__phone')
const btn = document.querySelector('.form__button')
const ourServices = document.querySelectorAll('.our-services__card')
const planRate = document.querySelectorAll('.plan__rate')


// const planActive = document.querySelector ('.plan__active')
//let checkEmptyField = false
//first task
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
     if (scrollDistance >= headerHeight) {
         header.classList.add('header__fixed')
    } else {
         header.classList.remove('header__fixed')
     }
})

//изменение стиля для всех кнопок на странице сразу.
const btnToActive = document.querySelectorAll('.button')
const zoom = 1.1;
for (let btn of btnToActive) {
    btn.onmouseover = function (event) {
        event.currentTarget.style.transform = "scale(" + zoom + ")";
    };
    btn.onmouseout = function (event) {
        event.currentTarget.style.transform = "scale(1)"
    }
}
// let currentNode,
//     ni = document.createNodeIterator(
//         document.documentElement,
//         NodeFilter.SHOW_ELEMENT,
//         function(node){
//             return node.classList.contains(btnToActive) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
//         }
//     );
//
// while(currentNode = ni.nextNode()) {
//
// }

//для кнопки send
    btn.setAttribute('disabled', true)
    btnDisabled()
   function btnDisabled () {
       if (btn.disabled === true) {
           btn.classList.add('btn__disabled')
       } else {
           btn.classList.remove('btn__disabled')
       }
   }
     nameField.oninput = function () {
         if (nameField.value !== '' && emailField.value !== '' && phoneField.value !== '') {
             btn.removeAttribute('disabled')
             btn.classList.remove('btn__disabled')
         } else {
             btn.setAttribute('disabled',true)
             btn.classList.add('btn__disabled')
         }
     }
     emailField.oninput = function () {
         if (nameField.value !== '' && emailField.value !== '' && phoneField.value !== '') {
             btn.removeAttribute('disabled')
             btn.classList.remove('btn__disabled')
         } else {
             btn.setAttribute('disabled',true)
             btn.classList.add('btn__disabled') //да, по-хорошему это все в функцию нужно, но мне очень очень лень
         }
     }
     phoneField.oninput = function () {
         if (nameField.value !== '' && emailField.value !== '' && phoneField.value !== '') {
             btn.removeAttribute('disabled')
             btn.classList.remove('btn__disabled')
         } else {
             btn.setAttribute('disabled',true)
             btn.classList.add('btn__disabled')
         }
         // if (phoneField.value.length < 1) {
         //     btn.setAttribute('disabled', true)
         // } else {
         //     if (checkEmptyField >= 2) {
         //         btn.removeAttribute('disabled')
         //         btn.classList.remove('btn__disabled')
         //     }
         // }
     }







// let containers = document.querySelectorAll(".our-services__card")
// window.addEventListener("mouseover", function() {
//     if (document.documentElement.clientWidth < 769) {
//         function wireUpTriggers() {
//             containers.forEach(container => {
//                 let btn = container.querySelector(".card__button");
//                 let content = container.querySelector(".card__text");
//                 btn.addEventListener("click", () => {
//                     if (content.style.display === "none") {
//                         content.style.display = "flex"
//                     } else {
//                         content.style.display = "none"
//
//                     }
//                 });
//             });
//         }
//
//         wireUpTriggers()





        let more = document.querySelectorAll('.trigger')
         for (let i = 0; i < more.length; i++) {

             more[i].addEventListener('click', function (event) {
                 event.preventDefault()
                 more[i].parentNode.classList.toggle('active')
             })
         }
          let contentsCard = document.querySelectorAll('.card__hide');
          let viewMore = document.querySelector('.view__button');

                viewMore.addEventListener('click', function (event) {
                    event.preventDefault()
                    for (let i = 0; i < contentsCard.length; i++) {
                        if (contentsCard[i].style.display === 'flex') {
                            contentsCard[i].style.display = 'none'
                        } else {
                            contentsCard[i].style.display = 'flex'
                        }
                    }
                })




let smartphoneImg = document.querySelector(".card__icon")
for (let service of ourServices) {
    service.onmouseover = function (event) {
        event.currentTarget.classList.add('active-card')
        event.currentTarget.children[0].src ='./img/smartphone-white%201.png'
    }
    service.onmouseout = function (event) {
        event.currentTarget.classList.remove('active-card')
        event.currentTarget.children[0].src ='./img/smartphone-black%201.png'
     }
}
for (let plan of planRate) {
    plan.onmouseover = function (event) {
        event.currentTarget.children[1].children[1].classList.add('active-button')
        event.currentTarget.classList.add('plan__active')
        }
        plan.onmouseout = function (event) {
            event.currentTarget.children[1].children[1].classList.remove('active-button')
            event.currentTarget.classList.remove('plan__active')
        }
    }


const aboutUsArrow = document.querySelector('.about__us__arrow');

aboutUsArrow.addEventListener('click', function(event) {

    if(event.currentTarget.classList.contains('about__us__arrow-active')) {
        const content = document.querySelector('.about__us__content');
        content.style.display = 'none';

        event.currentTarget.children[0].src = './img/arrowDown.png'
        event.currentTarget.classList.remove('about__us__arrow-active')
    }
    else {

        const content = document.querySelector('.about__us__content');
        content.style.display = 'flex'

        event.currentTarget.children[0].src = './img/arrowUpp.png'
        event.currentTarget.classList.add('about__us__arrow-active');
    }

});

const ourSrvsArrow = document.querySelector('.our-services__arrow');

ourSrvsArrow.addEventListener('click', function(event) {
    if(event.currentTarget.classList.contains('our-services__arrow-active')) {
        const content = document.querySelector('.our-services__cards');
        content.style.display = 'none';
        const button = document.querySelector('.our-services__button')
        button.style.display = 'none'
        event.currentTarget.children[0].src = './img/arrowDown.png'
        event.currentTarget.classList.remove('our-services__arrow-active')
    }
    else {
        const content = document.querySelector('.our-services__cards');
        content.style.display = 'flex'
        const button = document.querySelector('.our-services__button')
        button.style.display = 'flex'
        event.currentTarget.children[0].src = './img/arrowUpp.png'
        event.currentTarget.classList.add('our-services__arrow-active');
    }
});

const planArrow = document.querySelector('.plan__arrow');

planArrow.addEventListener('click', function(event) {
    if(event.currentTarget.classList.contains('plan__arrow-active')) {
        const content = document.querySelector('.plan__content');
        content.style.display = 'none';
        event.currentTarget.children[0].src = './img/arrowDown.png'
        event.currentTarget.classList.remove('plan__arrow-active')
    }
    else {
        const content = document.querySelector('.plan__content');
        content.style.display = 'flex'
        event.currentTarget.children[0].src = './img/arrowUpp.png'
        event.currentTarget.classList.add('plan__arrow-active');
    }

});
const planRateTopArrow = document.querySelectorAll('.plan__rate-arrow');

for(let currEl of planRateTopArrow) {
    currEl.addEventListener('click', function(event) {
        if(event.currentTarget.classList.contains('plan__rate-arrow-active')) {
            const contentBottom = currEl.parentNode.parentNode.lastElementChild;
            contentBottom.style.display = 'none';
            event.currentTarget.children[0].src = './img/arrowDownWhite.png'
            event.currentTarget.classList.remove('plan__rate-arrow-active')
        }
        else {
            const contentBottom = currEl.parentNode.parentNode.lastElementChild;
            contentBottom.style.display = 'flex';
            event.currentTarget.children[0].src = './img/arrowWhiteUp.png'
            event.currentTarget.classList.add('plan__rate-arrow-active');
        }
    })
}

const ourTeamArrow = document.querySelector('.our-team__arrow');

ourTeamArrow.addEventListener('click', function(event) {
    if(event.currentTarget.classList.contains('our-team__arrow-active')) {
        const content = document.querySelector('.our-team__content');
        content.style.display = 'none';
        const circles = document.querySelector('.our-team__circles')
        circles.style.display = 'none'
        event.currentTarget.children[0].src = './img/arrowDown.png'
        event.currentTarget.classList.remove('our-team__arrow-active')
    }
    else {
        const content = document.querySelector('.our-team__content');
        content.style.display = 'flex'
        const circles = document.querySelector('.our-team__circles')
        circles.style.display = 'flex'
        event.currentTarget.children[0].src = './img/arrowUpp.png'
        event.currentTarget.classList.add('our-team__arrow-active');
    }
});

const blogArrow = document.querySelector('.blog__arrow');

blogArrow.addEventListener('click', function(event) {

    if(event.currentTarget.classList.contains('blog__arrow-active')) {
        const content = document.querySelector('.blog__content');
        content.style.display = 'none';
        const button = document.querySelector('.blog__button');
        button.style.display = 'none'
        event.currentTarget.children[0].src = './img/arrowDown.png'
        event.currentTarget.classList.remove('blog__arrow-active')
    }
    else {
        const content = document.querySelector('.blog__content');
        content.style.display = 'flex'
        const button = document.querySelector('.blog__button');
        button.style.display = 'flex'
        event.currentTarget.children[0].src = './img/arrowUpp.png'
        event.currentTarget.classList.add('blog__arrow-active');
    }

});
const contUsArrow = document.querySelector('.contact-us__arrow');

contUsArrow.addEventListener('click', function(event) {
    if(event.currentTarget.classList.contains('contact-us__arrow-active')) {
        const data = document.querySelector('.contact-us__data');
        data.style.display = 'none';
        const form = document.querySelector('.contact-us__form');
        form.style.display = 'none'
        event.currentTarget.children[0].src = './img/arrowDownWhite.png'
        event.currentTarget.classList.remove('contact-us__arrow-active')
    }
    else {
        const data = document.querySelector('.contact-us__data');
        data.style.display = 'flex'
        const form = document.querySelector('.contact-us__form');
        form.style.display = 'flex'
        event.currentTarget.children[0].src = './img/arrowWhiteUp.png'
        event.currentTarget.classList.add('contact-us__arrow-active');
    }
});

const burger = document.querySelector(".header__burger")
const navigationMenu = document.querySelector(".header__nav")
if (burger) {
    burger.addEventListener("click", function (event) {
        document.body.classList.toggle("lock")
        burger.classList.toggle("header__burger-active")
        navigationMenu.classList.toggle("header__nav-active")
    })
}
//переход к нужному пункту меню
const menuLinks = document.querySelectorAll('.menu-link[data-goto]')
 if (menuLinks.length > 0 ) {
     menuLinks.forEach(menuLink => {
         menuLink.addEventListener("click",onMenuLinkClick)
     })
     function onMenuLinkClick(e) {
         const menuLink = e.target
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
             const gotoBlock = document.querySelector(menuLink.dataset.goto)
             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight

         if (burger.classList.contains('header__burger-active')) {
                 document.body.classList.remove("lock");
                 burger.classList.remove("header__burger-active");
                 navigationMenu.classList.remove("header__nav-active");
             }
             window.scrollTo ( {
                 top:gotoBlockValue,
                 behavior: "smooth"
             })
             e.preventDefault()
         }
     }
 }
//тоже самое для футера
const footerLinks = document.querySelectorAll('.footer__link[data-goto]')
if (footerLinks.length > 0 ) {
    footerLinks.forEach(footerLink => {
        footerLink.addEventListener("click",onMenuLinkClick)
    })
}

