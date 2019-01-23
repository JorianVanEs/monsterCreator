<?php
    include "db_connect.php";

    // $stmt = $db->query("SELECT user_id, user_email, user_name FROM users ORDER BY user_id");
    // $user = $stmt->fetch();
    //
    // foreach($user as $result) {
    //     echo $result, '<br>';
    // }

    $sth = $db->prepare("SELECT user_email, user_name FROM users");
    $sth->execute();

    $result = $sth->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($result);

?>
