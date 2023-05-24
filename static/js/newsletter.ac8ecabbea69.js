const emailInput = document.getElementById("email")

const validateEmail = function(email) {
    var formData = new FormData();
    formData.append('email', email)

    fetch('/newsletter/validate_email',{
        method: "POST",
        body: formData,
        headers: {
            "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value
          },
    })
    .then(data=>data.json())
    .then(json=>{
        if (json.is_valid) {
            document.querySelector('.form-error').innerHTML = ''
            makeInputValid()
        }else{
            document.querySelector('.form-error').innerHTML = json.msg
            makeInputInvalid(json.msg)
        }

    })
    .catch(error=>{
        console.log(error);
    })

};

const subscribeUser = function(email, name) {
    var formData = new FormData();
    formData.append('email', email);

    fetch('/newsletter/subscribe',{
        method: "POST",
        body: formData,
        headers: {
            "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value
          },
    })
    .then(data=>data.json())
    .then(json=>{
        document.querySelector('.success').innerHTML = json.msg
        emailInput.value = ""
    })
    .catch(error=>{
        console.log(error);
    })
};



document.getElementById("email_form").addEventListener('submit', (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#email').value
    if (userEmail ) {
        subscribeUser(userEmail);
    }
});

emailInput.addEventListener('input', (event) => {
    event.preventDefault();
    const email = event.target.value;
    validateEmail(email);
});


function makeInputInvalid(msg) {
    emailInput.setCustomValidity(msg)
}

function makeInputValid() {
    emailInput.setCustomValidity("");
}