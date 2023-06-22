$(document).ready(function(){

  $('.show_about').on('click', function(){
    var is_vis = $("#about p").is(":visible");
    if(is_vis){
      $("#about").fadeOut("fast");
    }else{
      $("#about").fadeIn("fast");
    }
  });

  $('.show_resume').on('click', function(){
    $("#resume").fadeIn("fast");
    $(".menu_options").fadeOut("fast");
    $('.resume_option').fadeIn("fast");
  });

  $('.close_resume').on('click', function(){
    $('#resume').fadeOut('fast');
    $('.resume_option').fadeOut('fast');
    $('.menu_options').fadeIn('fast');
  });

  function copyText() {
    var copyText = document.getElementById("email_to_copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

});