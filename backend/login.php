<?php 
    require 'database_2.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $sql = 'SELECT username, email, password FROM users1';
    $result = $conn->query($sql);

    $users = [];

    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            $users[] = $row;
        }
    }

    echo json_encode($users);
    $conn->close();
    exit;
?>