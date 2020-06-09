//
//
<?php
//
//adding libraries. 
include 'tracking.php';
include '../metavisuo/v1.0/sql_library.php';
$tracking = new tracking_assignment();
$sql = new sql\editor('application', 'tracking_assignment');
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        
    </head>
    <body>
        <?php
        $sql->show('tracking_assignment');
        ?>
    </body>
</html>
