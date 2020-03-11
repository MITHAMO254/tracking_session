<?php
include 'tracking.php';
include '../metavisuo/sql_library.php';
$tracking = new tracking_assignment();
$sql = new sql\editor('developer', 'tracking_assignment');
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $tracking->show_developer();
        ?>
    </body>
</html>


