<?php

include('connection.php');

$query=$mysqli->prepare('select * from news');
$query->execute();
$result=$query->get_result();

while($object=$result->fetch_assoc()){
    $data[]=$object;
};

$response['response']=$data;

echo json_encode($response);

?>