function send_user_info() {

  var name = $('input[name="name"]').val(),
      phone = $('input[name="phone"]').val(),
      gender = '';

  $.ajax({
    url:"./php/user_info_handler.php",
    method:"POST",
    dataType: 'json',
    data: {
      name: name,
      phone : phone,
      gender: gender
    },
    complete: function(response) {
      console.log(response);
      $('input[name="name"]').val("");
      $('input[name="phone"]').val("");
      gender = '';
      $('.boy, .girl').find('svg').css("opacity", "0.5");
      $('.get_info_submit').removeClass("btn-success");
      $('.get_info_submit').addClass("btn-light");
    },
   });
}

$(document).on('click', '.boy, .girl', function() {
  if($(this).attr("id") === "girl") {
    gender = 0;
    $(this).find('svg').css("opacity", "1");
    $('.boy').find('svg').css("opacity", "0.5");
    $('.get_info_submit').removeClass("btn-light");
    $('.get_info_submit').addClass("btn-success");
  }
  if($(this).attr("id") === "boy") {
    gender = 1;
    $(this).find('svg').css("opacity", "1");
    $('.girl').find('svg').css("opacity", "0.5");
    $('.get_info_submit').removeClass("btn-light");
    $('.get_info_submit').addClass("btn-success");
  }
})
