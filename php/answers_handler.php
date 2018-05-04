<?php
require('db_fns.php');


//Connect to db
$conn = connect_to_db();


//get variables
$user_id = intval($_POST['user_id']);
$last_hb = $_POST['last_hb'];
$mothers_bw = $_POST['mothers_bw'];
$fathers_bw = $_POST['fathers_bw'];
$babys_weight = $_POST['babys_weight'];
$mothers_cravings = $_POST['mothers_cravings'];
$mothers_weight  = intval($_POST['mothers_weight']);
$fathers_weight  = intval($_POST['fathers_weight']);

//insert into db
$sql = "UPDATE survey SET
  last_hb = '$last_hb',
  mothers_bw = '$mothers_bw',
  fathers_bw = '$fathers_bw',
  babys_weight = '$babys_weight',
  mothers_cravings = '$mothers_cravings',
  mothers_weight = $mothers_weight,
  fathers_weight = $fathers_weight
   WHERE user_id = $user_id";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
