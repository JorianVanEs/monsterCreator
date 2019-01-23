<?php
    include "db_connect.php";

    $sql = "INSERT INTO users (user_email, user_name, user_password) VALUES (?,?,?)";
    $stmt= $db->prepare($sql);
    $stmt->execute([$_GET["email"], $_GET["name"], $_GET["password"]]);
?>
