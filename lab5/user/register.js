$("#signin").validate({
    rules: {
        signName: "required",
        signEmail: {
            required: true,
            email: true
        },
        signPassword: {
            required: true,
            minlength: 6
        },
        signPasswordCheck: {
            required: true,
            equalTo: '#signPassword'
        },
    },
    messages: {
        signName: "Introduceți numele!",
        signEmail: {
            required: 'Introduceți o adresă de e-mail!',
            email: 'Introduceți o adresă de e-mail validă!'
        },
        signPassword: {
            required: 'Introduceți parola!',
            minlength: 'Parola trebuie să conțină cel puțin 6 caractere!'
        },
        signPasswordCheck: {
            required: 'Introduceți parola!',
            minlength: 'Parola trebuie să conțină cel puțin 6 caractere!',
            equalTo: "Parolele nu coincid!"
        }
    },
    submitHandler: function(form) {
        let FormData = $("#signin").serialize();
        $.ajax({
            type: 'POST',
            url: 'inregistrareUtilizator.php',
            data: FormData,
            success: function(dataResult) {
                //console.log(dataResult);
                var dataResult = JSON.parse(dataResult);
                if (dataResult.status == "OK") {
                    $("#signin_form").hide();
                    var name = $("#signName").val().trim();
                    $("#signin_form_completat").html("Bine ai venit \"" + name + "\"!");
                    $("#signin_form_completat").show();
                    setTimeout(function() {
                        window.location.replace("../index.html")
                    }, 2000);
                } else if (dataResult.status == "FAIL") {
                    $("#signin_form").hide();
                    $("#signin_form_completat").html("Am intampinat o eroare!");
                    $("#signin_form_completat").show();
                    setTimeout(function() {
                        location.reload();
                    }, 1500);
                }
            }
        })
    }
});