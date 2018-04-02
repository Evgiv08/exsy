  $('.slider').slick({
    prevArrow: '<div class="sq-left"></div>',
    nextArrow: '<div class="sq-right"></div>'
  });

function initMap() {
  var uluru = {lat: 54.211410, lng: 36.612012};
  var map = new google.maps.Map(document.getElementById('googlemaps'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$(document).ready(function() { 
  $('#go').click( function(event){ 
    event.preventDefault(); 
    $('#overlay').fadeIn(400, 
      function(){
        $('#modal_form') 
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
    });
  });
  $('#modal_close, #overlay').click( function(){ 
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400); 
        }
      );
  });
});
$('.sendform').click( function(){
  if ($('.inputname').val() === '' || $('.inputnumber').val() === '') {
    $('.alert').css({'display' : 'block'});
  } else {
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400);
          $('.alert').css({'display' : ''});
          $('.inputname').val('');
          $('.inputnumber').val('');
        });
  }   
});