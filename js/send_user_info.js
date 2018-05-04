function send_user_info() {
  var name = $('input[name="name"]').val(),
      phone = $('input[name="phone"]').val(),
      gender = $('input[name="gender"]').val();

  $.ajax({
    url:"./php/user_info_handler.php",
    method:"POST",
    dataType: 'json',
    data: {
      name: name,
      phone : phone,
      gender: gender
    },
    success: function(response) {
      console.log(response.name);
    }
   });
}
