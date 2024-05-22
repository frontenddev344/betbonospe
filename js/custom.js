function openNav() {
    document.getElementById("mySidenavs").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}

$(document).ready(function () {
    // Check if the modal has been shown before
    if (!localStorage.getItem('modalShown')) {
        $('#myModal').modal('show'); // Trigger the modal
        localStorage.setItem('modalShown', true); // Set flag to indicate modal has been shown
    }
});


