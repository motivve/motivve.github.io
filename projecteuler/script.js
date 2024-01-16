document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "popup"
    var popups = document.querySelectorAll('.popup');

    // Function to show a specific popup
    function showPopup(popupId) {
        var popup = document.getElementById(popupId);
        popup.style.display = 'block';
    }

    // Function to hide a specific popup
    function hidePopup(popupId) {
        var popup = document.getElementById(popupId);
        popup.style.display = 'none';
    }

    // Add click event listeners to show popups
    document.getElementById('showPopup1').addEventListener('click', function () {
        showPopup('codePopup1');
    });

    document.getElementById('showPopup2').addEventListener('click', function () {
        showPopup('codePopup2');
    });

    // Add click event listeners to close popups
    document.getElementById('closePopup1').addEventListener('click', function () {
        hidePopup('codePopup1');
    });

    document.getElementById('closePopup2').addEventListener('click', function () {
        hidePopup('codePopup2');
    });

    // Close popups if the user clicks outside the content
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup')) {
            hidePopup(event.target.id);
        }
    });
});
