"use strict";
function openMenu() {
    const openBtn = document.querySelector('.hamburger-menu-link');
    const closeBtn = document.querySelector('.mobile-close');
    const menu = document.querySelector('.mobile-menu');
    let opacity = 0.2;

        openBtn.addEventListener('click', function(event) {
            // console.log('Это работает!');
          
            menu.style.display = "flex";
            menu.style.opacity = 0.2;

            setTimeout(function fade()  {
                while(opacity<1) {
                    opacity += 0.05;
                    menu.style.opacity = opacity;

                }; 
                }, 500);
        }
        );

        closeBtn.addEventListener('click', function(event) {
            // console.log('Это работает!');
            setTimeout(function close(){
                // while(opacity>0) {
                //     opacity -= 0.05;
                //     menu.style.opacity = opacity;

                // };
                // menu.style.display = "none";

                if (opacity > 0 ) {
                    opacity -= 0.1;
                    menu.style.opacity = opacity;
                    setTimeout(close(),1000);
                }

                else {
                    menu.style.display = "none";
                }
            },1000);
            
        });

        document.addEventListener('keydown',function(event){
            if(event.keyCode == 27){
                menu.style.display = "none";
            }
        });

        // opacity = 0.2;

}

openMenu();