$( window ).on( "load", function() {
  $('#coverModal').css("display", "block");
});

$("#coverModal").click(function(){
  $('#coverModal').css("display", "none");
});


setTimeout(function() {
    $('#coverModal').css("display", "none");
}, 2750);