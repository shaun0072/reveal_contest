<?php
require('db_fns.php');


$results_obj = [];

//Connect to db
$conn = connect_to_db();


$sql = "SELECT * FROM survey";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      array_push($results_obj, [
          "username" => $row["username"],
          "last_hb"=> $row["last_hb"],
          "mothers_bw"=> $row["mothers_bw"],
          "fathers_bw"=> $row["fathers_bw"],
          "babys_weight"=> $row["babys_weight"],
          "mothers_cravings"=> $row["mothers_cravings"],
          "mothers_weight"=> $row["mothers_weight"],
          "fathers_weight"=> $row["fathers_weight"],
          "gender"=> $row["gender"],
          "score"=>0
        ]);
    }
    echo json_encode($results_obj);
} else {
    echo "0 results";
}



$conn->close();


?>
