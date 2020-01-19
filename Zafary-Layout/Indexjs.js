const Home = window.document.querySelector('#Home');
const Whatzapp = window.document.querySelector('#WhatZ');
const Zpotify = window.document.querySelector('#Zpoti');
const newPag = document.querySelector('#seleccion');

Home.addEventListener('click', GoToHome);
Whatzapp.addEventListener('click', GoToWhatz);
Zpotify.addEventListener('click', GoToZpoti);


function GoToHome() {
    newPag.setAttribute('src', '../Home/Index.html');
}
 
function GoToWhatz() {
    newPag.setAttribute('src', '../WhatzApp/Index.html');
}

function GoToZpoti() {
    newPag.setAttribute('src', '../Zpotify/Index.html');
}
