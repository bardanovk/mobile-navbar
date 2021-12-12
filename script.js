const slidebarMain = document.querySelector('.slidebar-main')
const slidebarBrands = document.querySelector('.slidebar-brands')
const slidebarHairs = document.querySelector('.slidebar-hairs')
const slidebarDecorative = document.querySelector('.slidebar-decorative')
const slidebarMakeup = document.querySelector('.slidebar-makeup')
const slidebarCare = document.querySelector('.slidebar-makeup')
const slidebarBody = document.querySelector('.slidebar-body')
const slidebarAround = document.querySelector('.slidebar-around')
const cartInd = document.querySelector('.cart-ind')

window.onload = () => {
    checkCart()
}
const cookie = document.cookie

const cartButtons = document.querySelectorAll('.add_to_cart_button')

cartButtons.forEach(element => {
    element.addEventListener('click', checkCart())
});

document.querySelector('.slidebar-around').addEventListener('click', () => {
    slidebarsHide()
})



function slidebarShow(target) {
    slidebarAround.classList.add('showed')
    target.classList.add('showed')
}

function slidebarHide(target) {
    target.classList.remove('showed')
}

function slidebarsHide() {
    slidebarMain.classList.remove('showed')
    slidebarBody.classList.remove('showed')
    slidebarBrands.classList.remove('showed')
    slidebarCare.classList.remove('showed')
    slidebarHairs.classList.remove('showed')
    slidebarMakeup.classList.remove('showed')
    slidebarDecorative.classList.remove('showed')
    slidebarAround.classList.remove('showed')
}

function checkCart() {
    const indShow = cookie.indexOf('woocommerce_items_in_cart=1')
    if (indShow >= 0)
        cartInd.style.display = 'block'
}