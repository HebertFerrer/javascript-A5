$(document).ready(function() {

    let formulario = document.form;

    // previniendo acción por defecto del enviar
    $('.btn').click(function(e) {
        e.preventDefault();
        if(nombre(formulario.name) &&
        apellido(formulario.apellido) &&
        email(formulario.email) &&
        web(formulario.web) &&
        mensaje(formulario.mensaje)) {
            document.write('<p>FORMULARIO ENVIADO</p>');
        }
    });

    function nombre(input) {
        let regEx = /^[áéíóúa-z]+$/i //regEx para nombre

        //esta vacio || expresion regular || válido
        if(input.value.trim() === '') {
            // console.log($('#nombreError'));
            document.getElementById('nombreError').classList.remove('text-hide');
            return false;
        } else if (!(regEx.test(input.value))) {
            document.getElementById('nombreError').classList.remove('text-hide');
            return false;
        } else {
            document.getElementById('nombreError').classList.add('text-hide');
            return true;
        }
    }

    function apellido(input) {
        let regEx = /^[áéíóúa-z]+$/i //regEx para nombre

        //esta vacio || expresion regular || válido
        if(input.value.trim() === '') {
            // console.log($('#nombreError'));
            document.getElementById('apellidoError').classList.remove('text-hide');
            return false;
        } else if (!(regEx.test(input.value))) {
            document.getElementById('apellidoError').classList.remove('text-hide');
            return false;
        } else {
            document.getElementById('apellidoError').classList.add('text-hide');
            return true;
        }
    }

    function email(element) {
        let regEx = /^([a-z0-9_-])+([\.a-z0-9_-])*@([a-z0-9-])+(\.[a-z0-9-]+)*\.([a-z]{2,6})*$/i;;

        //esta vacio || expresion regular || válido
        if(element.value.trim() === '') {
            document.getElementById('emailError').classList.remove('text-hide');
            return false;
        } else if (!(regEx.test(element.value))) {
            document.getElementById('emailError').classList.remove('text-hide');
            return false;
        } else {
            document.getElementById('emailError').classList.add('text-hide');
            return true;
        }
    }

    function web(element) {
        let regEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

        //esta vacio || expresion regular || válido
        if(element.value.trim() === '') {
            document.getElementById('webError').classList.remove('text-hide');
            return false;
        } else if (!(regEx.test(element.value))) {
            document.getElementById('webError').classList.remove('text-hide');
            return false;
        } else {
            document.getElementById('webError').classList.add('text-hide');
            return true;
        }
    }

    function mensaje(element) {
        //esta vacio || expresion regular || válido
        if(element.value.trim() === '' || element.value.trim().length < 10 || element.value.trim().length > 1000) {
            document.getElementById('mensajeError').classList.remove('text-hide');
            return false;
        } else {
            document.getElementById('mensajeError').classList.add('text-hide');
            return true;
        }
    }
});