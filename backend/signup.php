<?php
    require 'database_2.php';
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json");

    //Get post data
    $data = json_decode(file_get_contents("php://input"), true);
    $username = filter_var($data['username'], FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $password = filter_var($data['password'], FILTER_SANITIZE_SPECIAL_CHARS);


    //Insert user data
    if ($username || $email || $password){
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users1 (username, email, password) VALUES (?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        $stmt->bind_param("sss", $username, $email, $hashed_password);
        if ($stmt->execute()){
            echo json_encode(["status" => "success", "message" => "User saved successfully."]);
        }
        else{
            echo json_encode(["status" => "error", "message" => "Insert failed"]);
        }
    };
    
?>

