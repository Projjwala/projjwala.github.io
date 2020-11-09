const scriptURL = 'https://script.google.com/macros/s/AKfycbyv30_UPDjKzC_D-yhlP3kQTA2W0oXKS7o0JIhQza2ul9-TFt4/exec'

const form = document.forms['form-reg']
const submit = document.getElementById("submit")

submit.addEventListener('click', e => {
    e.preventDefault()
    $('#form-box').fadeOut(700);

    $.ajax({
        url: "/file_uploader.php",
        type: "POST",
        data: new FormData(form),
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function() {},
        success: function(data) {
            if (data == "DONE") {
                fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form)
                    })
                    .then(response => window.location.replace("success.php"))
                    .catch(error => window.location.replace("error.php"))
            } else {
                window.location.replace("error.php");
            }
        },
        error: function(e) {
            console.log("error");
        },
    });
})