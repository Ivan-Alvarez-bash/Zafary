const inputUser = window.document.querySelector('#email');
const inputPass = window.document.querySelector('#pass');
const boton = window.document.querySelector('#btningresar');
const msjErr = document.querySelector('.msj-error');
boton.addEventListener('click', comparaIngreso);
inputUser.addEventListener('focus', borraMensaje);
inputPass.addEventListener('focus', borraMensaje);

function comparaIngreso() {
    if (inputUser.value === 'ejemplo@gmail.com' && inputPass.value === '123456') {
        document.location.assign('../Zafary-Layout/Index.html');
    }
    
    else {
        msjErr.classList.remove(['hide']);
        msjErr.classList.add(['visible']);
    }
}

function borraMensaje() {
    msjErr.classList.remove(['visible']);
    msjErr.classList.add(['hide']);
}
