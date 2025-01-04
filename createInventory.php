<?php
    $item = $_POST["item"];
    $stock = $_POST["stock"];

    $url = "http://localhost:3001/api/inventory";
    $data = array("item" => $item, "stock" => $stock);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
?>