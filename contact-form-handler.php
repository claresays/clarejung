<?php
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];

 $email_subject = "New Form Submission";

 $email_body = "Name: $name.\n". 
        "Email: $email.\n". 
        "Message: $message.\n";
$to = "clare.jung@hotmail.com";

mail($to,$email_subject,$email_body);
header("Location: index.html");
?>