$( document ).ready(function() {
    console.log( "ready!" );
    $( "header" ).addClass( "active" );
    $( ".first_contain .top_side .info" ).addClass( "active" );
    $( ".bottom_side" ).addClass( "active" );
    $( ".centre" ).addClass( "active" );
    $( ".titre_tel" ).addClass( "active" );
});

//burger
$('.burger').click(function(){
    $('nav').toggleClass('active')
})





//Scrollmagic
var controller = new ScrollMagic.Controller();

// build scenes
new ScrollMagic.Scene({triggerElement: "#team"})
                .setClassToggle("#team", "active") // add class toggle
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);