<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $promise = $data["promise"];
    
    $to = "danishhusain7808@outlook.com";  // Replace with your email
    $subject = "Aapi's Promise Message";
    $message = "Aapi sent a promise: \n\n" . $promise;
    $headers = "From: cio890@proton.me";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "fail";
    }
}
?>