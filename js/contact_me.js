$(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        $.ajax({
            url: 'https://formspree.io/f/mayrwgvp',
            method: 'POST',
            dataType: 'json',
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                if (response.success) {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                } else {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + name + ", there was an issue. Please try again later!</strong>");
                    $('#success > .alert-danger').append('</div>');
                }

                // Clear all fields
                $('#contactForm').trigger('reset');
            },
            error: function() {
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Sorry " + name + ", there was an issue. Please try again later!</strong>");
                $('#success > .alert-danger').append('</div>');

                // Clear all fields
                $('#contactForm').trigger('reset');
            }
        });
    });
});
