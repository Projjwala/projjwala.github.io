const scriptURL = 'https://script.google.com/macros/s/AKfycbyv30_UPDjKzC_D-yhlP3kQTA2W0oXKS7o0JIhQza2ul9-TFt4/exec'

const form = document.forms['form-reg']
const submit = document.getElementById("submit")

submit.addEventListener('click', e => {
    e.preventDefault()
    $('#loader').fadeIn(300);
    $('#form-box').fadeOut(700);

    fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form)
                    })
                    .then(response => window.location.replace("success.html"))
                    .catch(error => window.location.replace("error.html"))
})
