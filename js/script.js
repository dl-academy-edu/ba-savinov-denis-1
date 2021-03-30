let modalOpenBtn = document.querySelector(".dlk-info-btn"),
    popupOverlay = document.querySelector(".modal-overlay"),
    modalWindow = document.querySelector(".modal-window"),
    modalCloseBtn = document.querySelector(".popup-close"),
    modalInput = modalWindow.querySelector("#contact-name"),
    checkboxAgrement = modalWindow.querySelector("#agreement"),
    modalSubmitBtn = modalWindow.querySelector(".modal-window-btn"),
    sliderToggleBtn = document.querySelectorAll(".slider-toggle-btn"),
    sliderCounter = document.querySelector(".slider-counter"),
    starRating = document.querySelectorAll(".hov_star");


// Modal window open

modalOpenBtn.addEventListener('click', () => {
    popupOverlay.classList.add('popup-visible');
    modalWindow.classList.add('popup-visible');
    modalInput.focus();
})

// Modal window close

modalCloseBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('popup-visible');
    modalWindow.classList.remove('popup-visible');
})

window.addEventListener('keydown', (event) => {


    if (event.key === 'Escape') {
        popupOverlay.classList.remove('popup-visible');
        modalWindow.classList.remove('popup-visible');
    }

})

// Modal window unlock submit button

checkboxAgrement.addEventListener('change', () => {

    if (checkboxAgrement.checked) {
        modalSubmitBtn.disabled = false;
    } else {
        modalSubmitBtn.disabled = true;
    }
})

// slider control

sliderToggleBtn.forEach((itemBtn) => itemBtn.addEventListener(`click`, (event) => {
    sliderCounter.textContent = event.target.dataset.slidenumber;
    removeClassActiveBtn(sliderToggleBtn);
    event.target.classList.add('slider-toggle-active');
}));

function removeClassActiveBtn(arr) {
    arr.forEach((item) => {
        item.classList.remove('slider-toggle-active');
    })
}


//star rating accessibility

starRating.forEach((starRating) => starRating.addEventListener(`focus`, (event) => {
    selectStar = event.target;
    selectStar.addEventListener('keydown', (ev) => {
        if (ev.code === "Space") {
            selectStar.click();
        }
    });
}));