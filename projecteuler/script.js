for (let i = 1; i <= 30; i++) {
    createEventListeners(i);
}

function createEventListeners(index) {
    document.querySelector('#showPopup' + index).addEventListener('click', function() {
        showPopup('codePopup' + index);
    });

    document.querySelector('#closePopup' + index).addEventListener('click', function() {
        closePopup('codePopup' + index);
    });
}
