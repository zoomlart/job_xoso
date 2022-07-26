$(document).ready(function() {
    $(".show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('.show_hide_password input').attr("type") == "text"){
            $('.show_hide_password input').attr('type', 'password');
            $('.show_hide_password .bi').addClass( "bi-eye-slash-fill" );
            $('.show_hide_password .bi').removeClass( "bi-eye-fill" );
        }else if($('.show_hide_password input').attr("type") == "password"){
            $('.show_hide_password input').attr('type', 'text');
            $('.show_hide_password .bi').removeClass( "bi-eye-slash-fill" );
            $('.show_hide_password .bi').addClass( "bi-eye-fill" );
        }
    });
});
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = day+'/'+month+'/'+year+'<br/>'+hour+':'+minute+':'+second;   
     return dateTime;
}

// example usage: realtime clock
setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);
$('.input-number-increment').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    $input.val(val + 1);
  });
  
  $('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    $input.val(val - 1);
  });
  $(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip(); 
});
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "bi-eye-slash-fill" );
            $('#show_hide_password i').removeClass( "bi-eye-fill" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "bi-eye-slash-fill" );
            $('#show_hide_password i').addClass( "bi-eye-fill" );
        }
    });
});
const allPlatform = document.querySelector('.all-platform')
allPlatform.addEventListener('click', function(){
    allPlatform.classList.toggle('is_active')
}) 