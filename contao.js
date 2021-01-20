$(document).ready(function() {
    $('#btn-envio').click(function() {

        $.ajax({
            type: "POST",
            url: "https://api.staticforms.xyz/submit",
            data: {
                'name': $('#name').val(),
                'email': $('#email').val(),
                'message': $('#message').val(),
                'honeypot': $('#honeypot').val(),
                'accessKey': $('#accessKey').val(),
                'subject': $('#subject').val()
            },
            dataType: "json",
            success: function(response) {
                if (response.success == true) {
                    alert('Email enviado!');
                }
            }
        });

    });
});