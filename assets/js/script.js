$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


function enviarMensaje() {
    alert("Mensaje enviado con éxito");
    
}

$(document).ready(function () {
    $(".card-clickable").click(function () {
        // Oculta solo el texto dentro de la card al hacer clic
        $(this).find('.card-text').hide();
    });
});