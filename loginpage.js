
var email = document.getElementById("email")
var err = document.getElementById("emailerror")
function validateForm(event) {
    event.preventDefault()

    if (email.value === "") {
        err.innerHTML = "**enter your email"


    }
    else {
        err.innerHTML = ""

    }


    var password = document.getElementById("pass")
    var word = document.getElementById("passerror")

    if (password.value === "") {
        word.innerHTML = "**enter your password"
    }
    else {
        word.innerHTML = ""
    }


}