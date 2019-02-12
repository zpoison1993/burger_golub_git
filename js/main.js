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


function openComponents() {
    const openComponentsBtn = document.querySelector('.composition');
    const closeComponentsBtn = document.querySelector('.content-close');
    const components = document.querySelector('.composition-content');
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

openComponents();