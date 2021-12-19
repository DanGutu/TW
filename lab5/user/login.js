$("#login").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 4 //trebuie 6, insa am pus 4 pentru a arata ca exista si verificare pe back-end
        }
    },
    messages: {
        email: {
            required: 'Introduceți o adresă de e-mail!',
            email: 'Introduceți o adresă de e-mail validă!'
        },
        password: {
            required: 'Introduceți parola!',
            minlength: 'Parola trebuie să conțină cel puțin 6 caractere!'
        }
    },
    submitHandler: function(form) {
        let FormData = $("#login").serialize();
        $.ajax({
            type: 'POST',
            url: 'autentificareUtilizator.php',
            data: FormData,
            success: function(dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.status == "OK") {
                    $("#login_form").hide();
                    $("#login_form_completat").html("Autentificare cu succes!");
                    $("#login_form_completat").show();
                    setTimeout(function() {
                        window.location.replace("../index.html")
                    }, 2000);
                } else if (dataResult.status == "FAIL") {
                    $("#login_form").hide();
                    $("#login_form_completat").html("Email/parola invalida!");
                    $("#login_form_completat").show();
                    setTimeout(function() {
                        location.reload();
                    }, 1500);
                }
            }
        })
    }
});