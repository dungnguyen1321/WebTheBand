
// Hiển thị đóng mở modal 
const buyBtns =document.querySelectorAll('.js-buy-ticket');

const modal = document.querySelector('.js-modal');
const modalContainer =document.querySelector('.js-modal-container')
const modalClose =document.querySelector('.js-modal-close');

function showBuyTickets() {
    modal.classList.add('open');
}

function closeBuyTickets() {
    modal.classList.remove('open');
}

buyBtns.forEach(function(buyBtn) {
    buyBtn.addEventListener('click',showBuyTickets)
});


modalClose.addEventListener('click',closeBuyTickets)
modal.addEventListener('click',closeBuyTickets);
modalContainer.addEventListener('click',function(event) {
    event.stopPropagation();
})


// Đóng/mở menu 
var header =document.querySelector('#header');

var  mobileMenu =document.querySelector("#mobile-menu");
var  headerHeight =header.clientHeight;
mobileMenu.addEventListener('click',function() {
    var isClose =header.clientHeight === headerHeight;

    if(isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
})

// tự động đóng khi chọn menu 

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for (var  i =0 ; i< menuItems.length ; i++)
{
    var menuItem =menuItems[i];

    
    menuItem.addEventListener('click', function(event) {
        var  isParentMenu =this.nextElementSibling && 
                                menuItem.nextElementSibling.classList.contains('.subnav');
                        console.log(isParentMenu)
        if(!isParentMenu) {
            header.style.height =null;
        }
        else {
            event.preventDefault
        }

    })

}