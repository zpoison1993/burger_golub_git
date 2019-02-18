"use strict";


//Меню для планшетов и мобильных телефонов

function openMenu() {
    const openBtn = document.querySelector('.hamburger-menu-link');
    const closeBtn = document.querySelector('.mobile-close');
    const menu = document.querySelector('.mobile-menu');
    let op = 0.2;

    openBtn.addEventListener('click', function (event) {
        // console.log('Это работает!');

        menu.style.display = "flex";
        menu.style.opacity = 0.2;
        setTimeout(function appear() {
            // while(opacity>0) {
            //     opacity -= 0.05;
            //     menu.style.opacity = opacity;

            // };
            // menu.style.display = "none";

            if (op < 1) {
                op += 0.1;
                menu.style.opacity = op;
                setTimeout(appear, 50);
            }
        }, 50);
    });


    closeBtn.addEventListener('click', function (event) {

        setTimeout(function close() {


            if (op > 0) {
                op -= 0.1;
                menu.style.opacity = op;
                setTimeout(close, 50);
            }

            else {
                menu.style.display = "none";
            }
        }, 50);

    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27) {
            setTimeout(function close() {
                if (op > 0) {
                    op -= 0.1;
                    menu.style.opacity = op;
                    setTimeout(close, 50);
                }

                else {
                    menu.style.display = "none";
                }
            }, 50);
        }
    });

    var items = document.querySelectorAll('.mobile-menu__item');

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (event) {
            setTimeout(function close() {
                if (op > 0) {
                    op -= 0.1;
                    menu.style.opacity = op;
                    setTimeout(close, 50);
                }
                else {
                    menu.style.display = "none";
                }
            }, 50);


        });
    }


}

openMenu();

//

//Появление списка состава блюда


function openComponents(composition,content) {
   
    const openComponentsBtn = document.querySelector(composition);
    
    const components = document.querySelector(content);
    // const closeComponentsBtn = document.querySelector('.content-close');
    let closeComponentsBtn = components.getElementsByTagName('BUTTON');
    closeComponentsBtn = closeComponentsBtn[0];
    let op = 0.2;
    let notPushed = true; //Этот флаг говорит нам о том,что Состав блюда не раскрыт

     
        openComponentsBtn.addEventListener('click', function (event) {
        
            //Если Состав блюда не раскрыт - это истина, то открываем
            if (notPushed) { 
                components.style.display = 'flex';
                components.style.opacity = 0.2;
                setTimeout(function appear() {
                    if (op < 1) {
                        op += 0.1;
                        components.style.opacity = op;
                        setTimeout(appear, 20);
                    }
                }, 20);
            }
            //Иначе - оно было раскрыто, значит, при нажатии нам его надо закрыть
            else {
                setTimeout(function close() {
                    if (op > 0) {
                        op -= 0.1;
                        components.style.opacity = op;
                        setTimeout(close, 20);
                    }
    
                    else {
                        components.style.display = "none";
                    }
                }, 20);
            }
            notPushed = !notPushed; //после завершения операции клика по кнопке. флаг раскрытости "Состава" блюда меняется на противоположное значение
    
        });
    
    

    closeComponentsBtn.addEventListener('click', function (event) {
        notPushed = true; // для данного варианта закрытия меню - флаг нажатия/ненажатия на основную кнопку "Состав" не требуется
        setTimeout(function close() {
            if (op > 0) {
                op -= 0.1;
                components.style.opacity = op;
                setTimeout(close, 20);
            }

            else {
                components.style.display = "none";
            }
        }, 20);

    });

}
openComponents('#composition1','#content1');
openComponents('#composition2','#content2');
openComponents('#composition3','#content3');
openComponents('#composition4','#content4');
openComponents('#composition5','#content5');




//
//Слайдер лдя бургеров
const left = document.querySelector('.previous-button');
const right = document.querySelector('.next-button');
const items = document.querySelector('.slider-wrapper');

let step = getComputedStyle(items.firstElementChild).width;
step = parseInt(step);
let slidesInView = 1; // 1 -1 слайд помещается за раз в слайдер
const maxRight = (items.children.length - slidesInView)*step;
const minRight = 0;
let currentRight = 0;

right.addEventListener('click', function(event){
    event.preventDefault;
    if(currentRight<maxRight)   {
        currentRight +=step;
        items.style.right = `${currentRight}px`;
    }
    else {
        currentRight=0;
        items.style.right = 0;
    }
});

left.addEventListener('click',function(event){
    event.preventDefault;
    if(currentRight>minRight)   {
        currentRight -= step;
        items.style.right = `${currentRight}px`;
    } else {
        currentRight = maxRight;
        items.style.right = maxRight;
    }
});



//
//Аккордеон секции команда

function teamOpen() {
    const items = document.querySelectorAll('.team__item');
    for(const item of items) {
        item.addEventListener('click', function(event){
            const curItem = event.currentTarget;
            if(curItem.classList.contains('team__item--active')) {
                curItem.classList.remove('team__item--active');
            } else {
                Array.from(items).forEach(function(item) {
                    item.classList.remove('team__item--active');
                } );

                curItem.classList.add('team__item--active');
            }
    });
}
}

teamOpen();

//
// Аккордеон секции МЕНЮ

function menusOpen() {
    const menuItems = document.querySelectorAll('.menus__item');
    for(const menuItem of menuItems) {
        menuItem.addEventListener('click', function(event){
            const curMenuItem = event.currentTarget;
            if(curMenuItem.classList.contains('menus__item--active')) {
                curMenuItem.classList.remove('menus__item--active');
            } else {
                Array.from(menuItems).forEach(function(menuItem) {
                    menuItem.classList.remove('menus__item--active');
                } );

                curMenuItem.classList.add('menus__item--active');
            }
    });
}
}

menusOpen();



//
//Модальные окна в отзывах
    const buttonsMore = document.querySelectorAll('.more');
    const template = document.querySelector('#modal').innerHTML;
    const modal = createModal();

    for(let i=0;i<buttonsMore.length;i++){
        const buttonMore = buttonsMore[i];
        buttonMore.addEventListener('click', e => {
            
            const parentBlock = e.target.parentNode;
            console.log(parentBlock);
            const modalTitle = parentBlock.firstElementChild.textContent;
            console.log(modalTitle);
            // const modalTextContainer = modalTitle.nextElementSibling;
            // console.log(modalTextContainer);
            const modalText = parentBlock.firstElementChild.nextElementSibling.textContent;
            console.log(modalText);

            modal.setContent(modalTitle,modalText);
            modal.open();
           

            // setTimeout(()=> {
            //     modal.close();
            // },3000);
            // document.body.appendChild(modal);
        });
    };

    function createModal() {
        const container = document.createElement('div');
        container.className = 'modal-popup';
        container.innerHTML=template;
        const titleBlock = container.querySelector('.popup__content-headline')
        const contentBlock = container.querySelector('.popup__text');
        
      

        const closeBtn = container.querySelector('.content-close');

        closeBtn.addEventListener('click', e=> {
            document.body.removeChild(container);
        });

        container.addEventListener('click', e=> {
            if (e.target==container) {
                closeBtn.click();
            }
        })
        
        // return container;

        return {
            open(){
                document.body.appendChild(container);
            },
            close() {
                closeBtn.click();
            },
            setContent(title,content) {
                titleBlock.innerHTML = title;
                contentBlock.innerHTML = content;
            }
        
        }

    }
    // const popup = document.querySelector('.reviews-popup');
    // const closePopup = document.querySelectorAll('.content-close');
    // console.log(closePopup);
    
    // for( var buttonMore of buttonsMore) {
    //     console.log(buttonMore);
    //     buttonMore.addEventListener('click',function(event){
    //     console.log(buttonMore);
    //         popup.classList.add('opened');
    // })

     
    // }

    // for(let buttonClose of closePopup) {
    //     buttonClose.addEventListener('click', function(event){
    //         popup.classList.remove('opened');
    //     });
    
    // }
   
    


//
//Работа формы заказа

const myForm = document.querySelector('.form');
const send = document.querySelector('#send');
const clear = myForm.querySelector('#clear');

myForm.addEventListener('submit', e=>{
    e.preventDefault();
    if (validateForm(myForm)) {
        const name = myForm.elements.name.value;
        const phone = myForm.elements.phone.value;
        const comment = myForm.elements.comment.value;
        const to = 'test@gmail.com';
        var formData = new FormData();
            formData.append('name',name);
            formData.append('phone', phone);
            formData.append('comment', comment);
            formData.append('to', to);
            console.log(formData);
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            // xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
            
            xhr.send(formData);
            xhr.addEventListener('load', e =>{
                if (xhr.response.status){
                    let title = 'Результат отправки данных';   
                    const response = 'Сообщение успешно отправлено. Дождитесь звонка оператора';
                    console.log(response);
                    modal.setContent(title,response);
                    modal.open();
                        // modal.setContent('',response);
                        // modal.open();
                    setTimeout(e=>{
                        
                        modal.close();
                        clear.click();
                    },3000);
                        
                } else {
                    let title = 'Результат отправки данных'; 
                    const rejected = 'Отправить письмо не удалось, повторите запрос позже';
                    console.log(rejected);
                    modal.setContent(title,rejected);
                    modal.open();
                        // modal.setContent('',response);
                        // modal.open();
                    setTimeout(e=>{
                       
                        modal.close();
                        clear.click();
                    },3000);
                    // modal.setContent('',rejected);
                    // modal.open();
                    // clearBtn.click();
                }
                
            })
    }
})

function validateForm(myForm) {
    let valid = true;
    
    if (!validateField(myForm.elements.name)) {
        valid = false;
    }

    if (!validateField(myForm.elements.phone)) {
        valid = false;
    }

    if (!validateField(myForm.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()){
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    }
    else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}