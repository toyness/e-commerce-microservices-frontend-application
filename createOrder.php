<?php
    $item = $_POST['item'];
    $quantity = $_POST['quantity'];

    $url = "http://localhost:3002/api/orders";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array("item" => $item, "quantity" => $quantity)));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
?>