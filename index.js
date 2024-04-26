const noLinkModal = document.querySelector('#no-link-modal')
const noLinkButtons = document.querySelectorAll('.open-link-modal')
const closeLinkModal = document.querySelector('#close-link-modal')

const contactModal = document.querySelector('#contact-modal')
const openContactModal = document.querySelector('#open-contact-modal')
const closeContactModal = document.querySelector('#close-form-modal')
const submitContactModal = document.querySelector('#submit-form-modal')

const newsletterModal = document.querySelector('#newsletter-modal')
const openNewsModal = document.querySelector('#open-news-modal')
const closeNewsModal = document.querySelector('#close-news-modal')
const subscribeNewsModal = document.querySelector('#subscribe-news-modal')

const addToCartBtn = document.querySelector('.add-to-cart')

const navButton = document.querySelector('#nav-expander')
const navItems = document.querySelectorAll('.toggled-nav')

// ////////////////////////// NO-LINK MODAL //////////////////////////////

noLinkButtons.forEach(button => {
    button.onclick = () => {
        noLinkModal.style.display = 'block'
    }
})

closeLinkModal.onclick = () => noLinkModal.style.display = 'none'

// ////////////////////////// CLOSE ANY MODAL BY CLICKING OUTSIDE OF IT ////////////////////////////////

window.onclick = (e) => {
    const classes = [...e.target.classList]

    if (classes.includes('modal')) {
        e.target.style.display = 'none'
    }
}

// ////////////////////////// CONTACT MODAL //////////////////////////////

const sendMessage = () => {
    submitContactModal.textContent = 'Message Sent'

    setTimeout(() => {
        contactModal.style.display = 'none'
    }, 500)

    setTimeout(() => {
        submitContactModal.textContent = 'Send'
    }, 1500)
}

if (openContactModal) { openContactModal.onclick = () => contactModal.style.display = 'block' }

if (submitContactModal) { submitContactModal.onclick = sendMessage }

if (closeContactModal) { closeContactModal.onclick = () => contactModal.style.display = 'none' }

// ////////////////////////// NEWSLETTER MODAL //////////////////////////////

const subscribe = () => {
    subscribeNewsModal.textContent = 'You have been Subscribed'

    setTimeout(() => {
        newsletterModal.style.display = 'none'
    }, 500)

    setTimeout(() => {
        subscribeNewsModal.textContent = 'Subscribe'
    }, 1500)
}

if (openNewsModal) { openNewsModal.onclick = () => newsletterModal.style.display = 'block' }

if (subscribeNewsModal) { subscribeNewsModal.onclick = subscribe }

if (closeNewsModal) { closeNewsModal.onclick = () => newsletterModal.style.display = 'none' }

// ////////////////////////// ADD TO CART BUTTON //////////////////////////////

const addToCart = () => {
    addToCartBtn.textContent = 'Item Has Been Added'

    setTimeout(() => {
        addToCartBtn.textContent = 'Add to Cart'
    }, 1500)
}

if (addToCartBtn) { addToCartBtn.onclick = addToCart }

// ////////////////////////// EXPAND COLLAPSED MENU (for small/mobile screens) //////////////////////////////

const expandNav = () => {
    navItems.forEach(item => item.classList.toggle('expanded-menu'))
}

navButton.onclick = expandNav