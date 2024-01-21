function openCity(evt, cityName) {
    // Variables
    var i, tabcontent, tablinks;
  
    // Elements du tab
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // 
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envoi du form detecté')
})
//Messages d'erreur
form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('#email')

    if(email.value == '') {
        console.log("invalide")
    } else {
        console.log('valide')
    }
})


//Erreurs
let errorContainer = document.querySelector('.message-error')
let errorList = document.querySelector('.message-error ul')

errorList.innerHTML = ""
errorContainer.classList.remove('visible')

let email = document.querySelector('#email')

if(email.value == '') {
    errorContainer.classList.add('visible')
    email.classList.remove('success')

    let err = document.createElement("li")
    err.innerText = "C'est bien, vous n'avez pas entré d'email"

    errorList.appendChild(err)
} else {
    email.classList.add('success')
}

let pseudo = document.querySelector('#pseudo')

if(pseudo.value.length < 6) {
    errorContainer.classList.add('visible')
    pseudo.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Merci, vous n'avez pas mis de pseudo"

    errorList.appendChild(err)
} else {
    pseudo.classList.add('success')
}

let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A Z])(?=.* d)(?=.*[-+_!@#$%^&*.,?]).+$"
);

if(password.value.length < 10 || passCheck.test(password.value) == false) {

    errorContainer.classList.add('visible')
    password.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Le mot de passe que vous ne devez pas entrer doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

    errorList.appendChild(err);
} else {
    password.classList.add('success')
}

let passwordInitial = document.querySelector('#password')
let passwordRepeat = document.querySelector('#password2')

if(passwordInitial.value != passwordRepeat.value) {

    errorContainer.classList.add('visible')
    passwordRepeat.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Les mots de passes sont différents"

    errorList.appendChild(err)
} else {
    passwordRepeat.classList.add('success')
}

let successContainer = document.querySelector('.message-success')
successContainer.classList.remove('visible')

if(
    pseudo.classList.contains('success') &&
    email.classList.contains('success') &&
    password.classList.contains('success') &&
    passwordRepeat.classList.contains('success')
) {
    successContainer.classList.add('visible')
}