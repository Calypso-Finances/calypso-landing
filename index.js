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
                data: { email },
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
                complete: function() {
                    $("input").val("");
                }
            });

        }

    });

    // $(".institutions").autocomplete({
    //     source: function (request, response) {
    //         $.getJSON(
    //             "http://universities.hipolabs.com/search?name=" + request.term,
    //             function (data) {
    //                 response(data);
    //             }
    //         );
    //     },
    //     minLength: 3
    // });

    // $(".institutions").autocomplete("option", "delay", 100);
});