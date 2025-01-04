<?php
    $orderId = 1;

    $url = "http://localhost:3002/api/orders/$orderId";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
?>