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
    $('#menu_columns').css('float', 'left');
    $('#about').hide();
  });

  $('.close_resume').on('click', function(){
    $('#resume').fadeOut('fast');
    $('.resume_option').fadeOut('fast');
    $('.menu_options').fadeIn('fast');
    $('#menu_columns').css('float', '');
  });

  $('.copy_email').on('click', function(){
    navigator.clipboard.writeText('evan.m.berg@gmail.com');
  });

});