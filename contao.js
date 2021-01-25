$(document).ready(function() {
    $('#btn-envio').click(function() {

        $.ajax({
            type: "POST",
            url: "https://api.staticforms.xyz/submit",
            data: {
                'name': $('#nome').val(),
                'email': $('#email').val(),
                'message': $('#mensagem').val(),
                'honeypot': $('#honeypot').val(),
                'accessKey': $('#accessKey').val(),

            },
            dataType: "json",
            success: function(response) {
                if (response.success == true) {
                    alert('Email enviado!');
                } else {
                    alert('ocorreu um erro ')
                }
            }
        });

    });
});