$(document).ready(function () {

    $(".emailForm").submit(async function (event) {
        event.preventDefault();

        const email = $(this)[0][0].value;

        if (email == "") {
            $("#error").text("Invalid email");
            $("#error").css("display", "block");
        } else {
            $.ajax({
                url: "https://calypso-responses-api.herokuapp.com/users",
                type: 'POST',
                data: {
                    email
                },
                success: function (data) {
                    Swal.fire({
                        title: '<strong>Success!</strong>',
                        html: 'Thank you for your interest in Calypso!',
                        showCloseButton: true,
                        focusConfirm: false,
                        confirmButtonText: 'Great!'
                    });
                },
                error: function (xhr, status, error) {
                    $("#error").text("Something went wrong. Try again later.");
                    $("#error").css("display", "block");
                },
                complete: function () {
                    $("input").val("");
                }
            });

        }

    });

    $("#learnMore").click(function () {
        $('html,body').animate({
                scrollTop: $(".features-page").offset().top - 30
            },
            1500);
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex',
                                '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});
