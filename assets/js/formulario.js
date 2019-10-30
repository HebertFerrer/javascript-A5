"use strict";
// Todos los elementos del formulario
let Formulario = {
    formulario: document.form,
    nombre: this.formulario.nombre,
    apellido: this.formulario.apellido,
    usuario: this.formulario.usuario,
    email: this.formulario.email,
    pass: this.formulario.pass,
    passR: this.formulario.passR,
    pais: this.formulario.pais,
    estado: this.formulario.estado,
    codigoPostal: this.formulario.codigoP,
    telefono: this.formulario.telefono,
    membresia: this.formulario.membresia,
    terminos: this.formulario.terminos
}

//--------------FUNCIONES ÚTILES--------------
let utilidades = {
    //Inserta el mensaje de invalido con un texto enviado por parametro (text)
    isInvalidMessage: function(parent, text) {
        parent.appendChild(invalidElement);
        invalidElement.innerText = text;
    },
    // elimina el elemento enviado por parametro
    removeItem: function (target) {
        target.parentNode.removeChild(target);
    },
    // crea un elemento con una clase
    createElementWithClass: function (tag, clase) {
        let element = document.createElement(tag);
        element.classList.add(clase);
        return element;
    },
    //Cambia el color del borde a rojo
    isInvalidColour: function (element) {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    },
    //Cambia el color del borde a verde
    isValidColour: function (element) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    },
    // elimina el elemento del mensaje de error
    removeInvalidElement: function (element) {
        if(element.nextElementSibling !== null) this.removeItem(element.nextElementSibling);
    },
    // verifica si el campo esta vacio
    isEmpty: function (element) {
        this.isInvalidColour(element);
        this.isInvalidMessage(element.parentNode, 'Campo requerido');
    },
    // verifica si la expresion regular no se cumple
    regExNotMatch: function (element, text) {
        this.isInvalidColour(element);
        this.isInvalidMessage(element.parentNode, text);
    },
    // pinta el campo de verde y elimna el mensaje de error
    isValid: function (element) {
        this.isValidColour(element);
        this.removeInvalidElement(element);
    },
    // valida el maximo de caracteres y no deja ingresar mas
    maxLength: function (element, max) {
        if(element.value.length > max) element.value = element.value.substr(0, max);
    },
    // no deja ingresar espacios en blanco
    noWhiteSpace: function (element) {
        for(let i = 0; i < element.value.length; i++) {
            if(element.value[i] === ' ') element.value = element.value.substr(0, i);
        }
    },
    // valida que haya algo seleccionado en un select
    somethingSelected: function (element) {
        return (element.selectedIndex !== 0);
    },
    // agrega opciones al select
    addOptions: function(array, select) {
        select.remove(select.selectedIndex);

        for (let value of array) {
            let option = document.createElement("option");
            option.text = value;
            select.add(option);
        }
    },
    // -----------INTRODUCE LOS ESTADOS SEGUN EL PAIS SELECCIONADO-----------
    argentina: function (element) {
        element.innerHTML = `<option value="" disabled selected>Seleccione su estado</option> <option>Buenos Aires</option> <option>Catamarca</option> <option>Chaco</option> <option>Chubut</option> <option>Córdoba</option> <option>Corrientes</option> <option>Entre Ríos</option> <option>Formosa</option> <option>Jujuy</option> <option>La Pampa</option> <option>La Rioja</option> <option>Mendoza</option> <option>Misiones</option> <option>Neuquén</option> <option>Río Negro</option> <option>Salta</option> <option>San Juan</option> <option>San Luis</option> <option>Santa Cruz</option> <option>Santa Fe</option> <option>Santiago del Estero</option> <option>Tierra del Fuego, Antártida e Isla del Atlántico Sur</option> <option>Tucumán</option>`;
        element.disabled = false;
    },
    brasil: function (element) {
        element.innerHTML = `<option value="" disabled selected>Seleccione su estado</option> <option>Acre</option> <option>Alagoas</option> <option>Amapá</option> <option>Amazonas</option> <option>Bahía</option> <option>Ceará</option> <option>Distrito Federal</option> <option>Espírito Santo</option> <option>Goiás</option> <option>Maranhão</option> <option>Mato Grosso</option> <option>Mato Grosso del Sur</option> <option>Minas Gerais</option> <option>Pará</option> <option>Paraíba</option> <option>Paraná</option> <option>Pernambuco</option> <option>Piauí</option> <option>Río de Janeiro</option> <option>Río Grande del Norte</option> <option>Río Grande del Sur</option> <option>Rondônia</option> <option>Roraima</option> <option>Santa Catarina</option> <option>São Paulo</option> <option>Sergipe</option> <option>Tocantins</option>`;
        element.disabled = false;
    },
    chile: function (element) {
        element.innerHTML = ``;
        element.disabled = false;
    },
    colombia: function (element) {
        element.innerHTML = ``;
        element.disabled = false;
    },
    ecuador: function (element) {
        element.innerHTML = ``;
        element.disabled = false;
    },
    peru: function (element) {
        element.innerHTML = ``;
        element.disabled = false;
    },
    venezuela: function (element) {
        element.innerHTML = `<option disabled selected>Seleccione su estado</option> <option>Amazonas</option> <option>Anzoátegui</option> <option>Apure</option> <option>Aragua</option> <option>Barinas</option> <option>Bolívar</option> <option>Barinas</option> <option>Carabobo</option> <option>Cojedes</option> <option>Delta Amacuro</option> <option>Distrito Capital</option> <option>Guárico</option> <option>Lara</option> <option>Mérida</option> <option>Miranda</option> <option>Monagas</option> <option>Nueva Esparta</option> <option>Portuguesa</option> <option>Sucre</option> <option>Tachira</option> <option>Trujillo</option> <option>Vargas</option> <option>Yaracuy</option> <option>Zulia</option>`;
        element.disabled = false;
    },
    // -----------VALIDA TODOS LOS CAMPOS-----------
    allExceptPais: function() {
        return nombreApellido(Formulario.nombre) && nombreApellido(Formulario.apellido) && usuario(Formulario.usuario) && email(Formulario.email) && pass(Formulario.pass) && passR(Formulario.passR);
    },
    allExceptEstado: function() {
        return this.allExceptPais() && paisVerificar(Formulario.pais);
    },
    allExceptMembresia: function() {
        return this.allExceptEstado() && estado(Formulario.estado) && codigoTelefono(Formulario.codigoPostal) && codigoTelefono(Formulario.telefono);
    },
    allExceptTerminos: function() {
        return this.allExceptMembresia() && membresia();
    },
    all: function() {
        return this.allExceptTerminos() && terminos(Formulario.terminos);
    }
}

// creando el elemento para el mensaje de error
let invalidElement = utilidades.createElementWithClass('div', 'invalid-tooltip');

//-------------VALIDANDO FORMULARIO-------------

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    // Si todo esta validado, envia
    if(utilidades.all()) {
        // console.log('todo esta validado, FELICIDADES!!!');
        document.write('EL FORMULARIO HA SIDO ENVIADO');
    }
    // Si todo esta validado antes del país, muestra que falta el país
    else if(paisVerificar(Formulario.pais) === false && utilidades.allExceptPais()) {
        utilidades.isEmpty(Formulario.pais);
    }
    // Si todo esta validado antes del estado, muestra que falta el estado
    else if(estado(Formulario.estado) === false && utilidades.allExceptEstado()) {
        utilidades.isEmpty(Formulario.estado);
    }
    // Si todo esta validado antes de la membresia, muestra que falta la memberesia
    else if(membresia() === false && utilidades.allExceptMembresia()) {
        Formulario.membresia.forEach( (radio) => utilidades.isInvalidColour(radio) );
    }
    // Si todo esta validado antes de los terminos, muestra que falta aceptar los terminos
    else if(terminos(Formulario.terminos) === false && utilidades.allExceptTerminos()) {
        utilidades.isInvalidColour(Formulario.terminos);
    }
});

// -----------EVENTOS-----------
// nombre
Formulario.nombre.addEventListener('input', function(){nombreApellido(this)});
// apellido
Formulario.apellido.addEventListener('input', function(){nombreApellido(this)});
// usuario
Formulario.usuario.addEventListener('input', function(){usuario(this)});
// email
Formulario.email.addEventListener('input', function(){email(this)});
// contraseña
Formulario.pass.addEventListener('input', function(){pass(this)});
// repetir contraseña
Formulario.passR.addEventListener('input', function(){passR(this)});
// pais
Formulario.pais.addEventListener('change', function(){paisEvento(this)});
// estado
Formulario.estado.addEventListener('change', function(){estado(this)});
// código postal
Formulario.codigoPostal.addEventListener('input', function(){codigoTelefono(this)});
// telefono
Formulario.telefono.addEventListener('input', function(){codigoTelefono(this)});
// membresia
Formulario.membresia.forEach( (radio) => radio.addEventListener('change', function(){membresia()}) );
// terminos
Formulario.terminos.addEventListener('change', function(){terminos(this, 'evento')});


// -----------FUNCIONES PARA VALIDAR-----------
// NOMBRE, APELLIDO
function nombreApellido(element) {
    let validado = false;
    let regEx = /^[áéíóúa-z]+$/i //regEx para nombre
    utilidades.maxLength(element, 25);
    utilidades.noWhiteSpace(element);

    //esta vacio || expresion regular || válido
    if(element.value.trim() === '') {
        utilidades.isEmpty(element);
        validado = false;
        element.focus();
    } else if (!(regEx.test(element.value))) {
        utilidades.regExNotMatch(element, 'No se pueden introducir números ni caracteres especiales');
        validado = false;
        element.focus();
    } else {
        utilidades.isValid(element);
        validado = true;
    }

    return validado;
}
// USUARIO
function usuario(element) {
    let validado = false;
    utilidades.maxLength(element, 10);
    utilidades.noWhiteSpace(element);

    //esta vacio || válido
    if(element.value.trim() === '') {
        utilidades.isEmpty(element);
        validado = false;
        element.focus();
    } else {
        utilidades.isValid(element);
        validado = true;
    }

    return validado;
}
// EMAIL
function email(element) {
    let validado = false;
    let regEx = /^([a-z0-9_-])+([\.a-z0-9_-])*@([a-z0-9-])+(\.[a-z0-9-]+)*\.([a-z]{2,6})*$/i;
    utilidades.maxLength(element, 40);
    utilidades.noWhiteSpace(element);

    //esta vacio || expresion regular || válido
    if(element.value.trim() === '') {
        utilidades.isEmpty(element);
        validado = false;
        element.focus();
    } else if (!(regEx.test(element.value))) {
        utilidades.regExNotMatch(element, 'Por favor, introduzca un correo válido');
        validado = false;
        element.focus();
    } else {
        utilidades.isValid(element);
        validado = true;
    }

    return validado;
}
// CONTRASEÑA
function pass(element) {
    let validado = false;
    let regEx = /^([\w]{6,})+$/i;
    utilidades.maxLength(element, 25);
    utilidades.noWhiteSpace(element);

    //esta vacio || expresion regular || válido
    if(element.value.trim() === '') {
        utilidades.isEmpty(element);
        validado = false;
        element.focus();
    } else if (!(regEx.test(element.value))) {
        utilidades.regExNotMatch(element, 'Su contraseña debe tener como mínimo 6 caracteres');
        validado = false;
        element.focus();
    } else {
        utilidades.isValid(element);
        validado = true;
    }

    return validado;
}
// REPETIR CONTRASEÑA
function passR(element) {
    let validado = false;
    utilidades.maxLength(element, 25);
    utilidades.noWhiteSpace(element);

    //esta vacio || expresion regular || válido
    if(element.value.trim() === '') {
        utilidades.isEmpty(element);
        validado = false;
        element.focus();
    } else if (element.value !== Formulario.pass.value) {
        utilidades.regExNotMatch(element, 'Las contraseñas no coinciden');
        validado = false;
        element.focus();
    } else {
        utilidades.isValidColour(element);
        validado = true;
    }

    return validado;
}
// PAIS EVENTO
function paisEvento(element) {
    let indice = element.selectedIndex;
    let estado = Formulario.estado;
    // console.log('entre de nuevo indice ' + indice);
    switch(indice) {
        case 1: utilidades.argentina(estado);
        break;
        case 2: utilidades.brasil(estado);
        break;
        case 3: utilidades.venezuela(estado)
        break;/*utilidades.chile(estado);
        break;
        case 4: utilidades.colombia(estado);
        break;
        case 5: utilidades.ecuador(estado);
        break;
        case 6: utilidades.peru(estado);
        break;
        case 7: ;
        break;*/
    }
    // si hay algo seleccionado, esta validado
    if(utilidades.somethingSelected(element)) utilidades.isValid(element);
}
// PAIS VERIFICAR
function paisVerificar(element) {
    if(utilidades.somethingSelected(element)) {
        utilidades.isValid(element);
        return true;
    } else {
        element.focus();
        return false;
    }
}
// ESTADO
function estado(element) {
    // si hay algo seleccionado, esta validado
    if(utilidades.somethingSelected(element)) {
        utilidades.isValid(element);
        return true;
    } else {
        element.focus();
        return false;
    }
}
// CODIGO POSTAL, TELEFONO
function codigoTelefono(element) {
    let validado = false;
    let regEx = /^([0-9])+$/i;
    utilidades.maxLength(element, 25);
    utilidades.noWhiteSpace(element);

    //esta vacio || expresion regular || válido
    if(element.value.trim() === '') {
        utilidades.isEmpty(element);
        validado = false;
        element.focus();
    } else if (!(regEx.test(element.value))) {
        utilidades.regExNotMatch(element, 'Solo se admiten números');
        validado = false;
        element.focus();
    } else {
        utilidades.isValid(element);
        validado = true;
    }

    return validado;
}
// MEMBRESIA
function membresia() {
    // este método se llama en dos sitios, el evento de clickear los radio y de clickear "enviar", para eso se valida con este ciclo y condicional
    for(let radio of Formulario.membresia) {
        if(radio.checked) {
            for(let i = 0; i < Formulario.membresia.length; i++) {
                Formulario.membresia[i].classList.remove('is-valid', 'is-invalid');
            }
            utilidades.isValidColour(radio);
            return true;
        }
    }

    return false;
}
// TERMINOS
function terminos(element, text) {
    if(element.checked) {
        utilidades.isValidColour(element);
    } else if(text !== undefined) {
        utilidades.isInvalidColour(element);
    }
    return element.checked;
}

// TESTING
// Formulario.nombre.value = 'hebert';
// Formulario.apellido.value = 'ferrer';
// Formulario.usuario.value = 'hebert1';
// Formulario.email.value = 'hebert@gmail.com';
// Formulario.pass.value = '123456';
// Formulario.passR.value = '123456';
// Formulario.pais.selectedIndex = 1;
// Formulario.estado.selectedIndex = 1;
// Formulario.codigoPostal.value = '123456';
// Formulario.telefono.value = '123456';
// Formulario.membresia[0].checked = true;
// Formulario.terminos.checked = true;