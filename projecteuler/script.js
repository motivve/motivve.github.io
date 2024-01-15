for (let i = 1; i <= 30; i++) {
    // Add event listener for showing popup
    document.getElementById('showPopup' + i).addEventListener('click', function() {
        showPopup('codePopup' + i);
    });

    // Add event listener for closing popup
    document.getElementById('closePopup' + i).addEventListener('click', function() {
        closePopup('codePopup' + i);
    });
}
