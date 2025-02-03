<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include 'connection.php';

if (isset($_GET['get_data'])) {
    get_data($conn);
}



function get_data($conn)
{
    $query = "SELECT 
                wallet, 
                SUM(point) AS point, 
                pool_id, 
                SUM(worker) AS worker, 
                SUM(speed) AS speed 
            FROM eterchain_db.`user` 
            GROUP BY wallet";

    $stmt = $conn->prepare($query);
    $stmt->execute();

    $result = $stmt->get_result();

    if (mysqli_num_rows($result) > 0) {
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

        echo json_encode($data);
    } else {
        echo json_encode(['msg' => 'No Data!', 'status' => false]);
    }
}

$conn->close();
