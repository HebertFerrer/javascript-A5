$(document).ready(function(){
    // bienvenido
    $('#bienvenido').click(function() {
        $('#contenido').html(`<header> <h1 class="display-4 text-center">¡Organizate!</h1> </header> <hr> <article> <p class="text-justify">Pensando en esas personas que nunca tienen tiempo o sienten que el día debería tener más horas. Traemos esta página para ustedes.</p></article>`);

        $('#contenido').addClass('p-2');
    });
    //  ¿Que te ofrecemos?
    $('#ofrecemos').click(function() {
        $('#contenido').html(`<header> <h1 class="display-4 text-center">Orden</h1> </header> <hr> <article> <p class="text-justify">Una sencilla herramienta ligera destinada para usuarios con dificultad para organizar sus actividades diarias y llevar un control sobre lo que hicieron. Lleva el control de tus actividades, ¡no pierdas mas tu tiempo!</p></article>`);

        $('#contenido').addClass('p-2');
    });
    //  Tutorial
    $('#tutorial').click(function() {
        $('#contenido').css('visibility', 'visible');
        $('#contenido').html(`<header> <h1 class="display-4 text-center">¡Es sencillo!</h1> </header> <hr> <article> <p class="text-center"><span class="numero">1</span> Arriba a la izquierda encontraras la opción "Organiza", da click allí.</p><img class="img-thumbnail mx-auto d-block" src="./assets/img/guia1.PNG" alt=""> <hr> <p class="text-center"><span class="numero">2</span> Te enviará a esta página, aqui solo tienes que ingresar el nombre de la actividad y dar click en el boton con el simbolo "+".</p><img class="img-thumbnail mx-auto d-block" src="./assets/img/guia2.PNG" alt=""> <hr> <p class="text-center"><span class="numero">3</span> Por ultimo, tienes dos opciones: </p><ol> <li>Eliminar la actividad: presiondando en el icono de la papelera.</li><li>Completar actividad: Presionando en el icono de la paloma</li></ol> <p class="text-center"><strong>PD: Notese que cuando completas una actividad esta pasa a la sección de abajo.</strong></p><img class="img-thumbnail mx-auto d-block" src="./assets/img/guia3.PNG" alt=""> </article>`);
        

        $('#contenido').addClass('p-2');
    });
    //  Acerca de
    $('#acerca').click(function() {
        $('#contenido').html(`<header> <h1 class="display-3 text-center">Autor:</h1> </header> <hr> <p class="text-center display-4">Hebert Ferrer</p>`);

        $('#contenido').addClass('p-2');
    });


});
