window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item  => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    const overlay = document.querySelector('.overlay'),
          btnClose = document.querySelectorAll('.modal__close'),
          btnShow = document.querySelectorAll('.btn_show');
    btnShow.forEach(i => {
        i.addEventListener('click', () => {
            overlay.classList.add('open');
             if (overlay.classList.contains('open')) {
                btnClose.forEach(i => {
                    i.addEventListener('click', () => {
                        overlay.classList.remove('open');
                    });
                });   
            }
        });
    });
    // btnClose.forEach(i => {
    //     i.addEventListener('click', () => {
    //     });
    // });
//     document.onclick = function(event) {
//         let target = event.target;
    
//         while (target != this) {
            
//             if (target.classList.contains('btn_show')) {
//             overlay.classList.add('overlay_active');
//             consultation.style.display = 'block';
                
//                 //тут то что нужно выполнить
//                 return;
//             }
    
//             target = target.parentNode;
//         }
//     };
});
 
