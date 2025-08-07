<?php 
    require 'database_2.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json");
    $users = [];
    $found = false;

    //Get front end data
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data["username"];
    $password = $data["password"];

    //Get database data
    $stmt = $conn->prepare("SELECT password FROM users1 WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if($row = $result->fetch_assoc()) {
        if(password_verify($password, $row['password'])){
            echo json_encode(["status" => "success", "message" => "You are already log in"]);
        }
        else{
            echo json_encode(["status" => "error", "message" => "incorrect password or username"]);
        }
    }
    else{
        echo json_encode(["status" => "error", "message" => "incorrect password or username"]);
    }
    
    $conn->close();
?>