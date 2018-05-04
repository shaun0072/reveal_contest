<?php

require('db_fns.php');


//Connect to db
$conn = connect_to_db();


//get variables
$user_id = 1;
$name = $_POST['name'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];

//insert into db
$sql = "INSERT INTO survey(user_id, username, user_phone, gender) VALUES('', '$name', $phone, $gender)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

//text url with user_id

?>
