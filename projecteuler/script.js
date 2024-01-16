for (let i = 1; i <= 30; i++) {
    // Using IIFE to capture the current value of i
    (function(index) {
        document.getElementById('showPopup' + index).addEventListener('click', function() {
            showPopup('codePopup' + index);
        });

        document.getElementById('closePopup' + index).addEventListener('click', function() {
            closePopup('codePopup' + index);
        });
    })(i);
}
