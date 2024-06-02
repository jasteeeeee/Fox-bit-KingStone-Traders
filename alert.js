// Ensure the document is ready
$(document).ready(function() {
    // Attach the submit event handler to the form
    $('.login-form').submit(function(e) {
        // Prevent the default form submission
        e.preventDefault();

        // Trigger the Swal.fire alert
        Swal.fire({
            title: "Email Reset successfuly!",
            text: "Now Try to login",
            icon: "success"
        }).then((result) => {
            // Optionally do something after the Swal closes, like maybe submit the form via AJAX or redirect
            console.log('Swal closed');
        });
    });
});
