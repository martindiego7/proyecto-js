$(document).ready(()=>{

    //Sliders
    if(window.location.href.indexOf('index')> -1){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          responsive: true,
          pager: true
        });
}
    //post
    if(window.location.href.indexOf('index')> -1){
    var post = [
        {titulo: 'prueba de titulo 1',
         fecha: "Publicado el dia: "+ moment().date()+ " de " + moment().format("MMMM")+" del "+moment().format("YYYY"),
         contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {titulo: 'prueba de titulo 2',
        fecha: "Publicado el dia: "+ moment().date()+ " de " + moment().format("MMMM")+" del "+moment().format("YYYY"),
        contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
       },
       {titulo: 'prueba de titulo 3',
       fecha: "Publicado el dia: "+ moment().date()+ " de " + moment().format("MMMM")+" del "+moment().format("YYYY"),
         contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {titulo: 'prueba de titulo 4',
        fecha: "Publicado el dia: "+ moment().date()+ " de " + moment().format("MMMM")+" del "+moment().format("YYYY"),
         contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {titulo: 'prueba de titulo 5',
        fecha: "Publicado el dia: "+ moment().date()+ " de " + moment().format("MMMM")+" del "+moment().format("YYYY"),
         contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {titulo: 'prueba de titulo 6',
        fecha: "Publicado el dia: "+ moment().date()+ " de " + moment().format("MMMM")+" del "+moment().format("YYYY"),
         contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
    ];

    post.forEach((item, index)=>{
        var p = `
        <article class="post">
        <h2>${item.titulo}</h2>
        <span class="date">
            ${item.fecha}
        </span>
        <p>${item.contenido}</p>
        <a href="#" class="button-more">Leer mas</a>
    </article>
        `;
        $("#posts").append(p);
    });
}

//selector de temas
var theme = $("#theme")
$("#to-green").click(function(){
    theme.attr("href","css/green.css")
});

$("#to-red").click(function(){
    theme.attr("href","css/red.css")
});

$("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
});

//scroll arriba de la web
$(".subir").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    },500);
    return false;
});

//login falso

$("#login form").submit(function(){
    var nombre = $("#form_name").val();
    localStorage.setItem("nombre",nombre);
});

var form_nombre = localStorage.getItem("nombre");
if(form_nombre != null && form_nombre != undefined){
var about_parrafo = $("#about p");
about_parrafo.html("<br><strong>Bienvenido, "+form_nombre+"</strong>");
about_parrafo.append("<br><a href='#' id='logout'>Cerrar Sesion</a>");
$("#login form").hide();

$("#logout").click(function(){
    localStorage.clear();
    location.reload();
});
}

//acordeon

if(window.location.href.indexOf('about')> -1){
$("#acordeon").accordion();
}

//reloj

if(window.location.href.indexOf('reloj')> -1){
    setInterval(function(){
        var reloj = moment().format("h:mm:ss");
        $("#reloj").html(reloj);
    },1000);
    
}


//validacion
if(window.location.href.indexOf('contacto')> -1){
    $('form input[name="date"]').datepicker({
        dateFormat: 'dd-mm-yy'
    });

$.validate({
    lang: 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true
});
}
});