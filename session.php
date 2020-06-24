<?php
include 'tracking.php';
include '../metavisuo/v2.0/sql_library.php';
$tracking = new tracking_assignment();
$sql = new sql\editor('session', 'tracking_assignment');
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="developer.css">
    </head>
    <body>
        <?php
        $sql->show('tracking_assignment');
        ?>
    </body>
</html>






