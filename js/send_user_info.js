function send_user_info() {
  var name = $('input[name="name"]').val(),
      phone = $('input[name="phone"]').val(),
      gender = $('input[name="gender"]:checked').val();

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
    },
   });
}
