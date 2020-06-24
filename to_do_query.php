<?php
//
include_once 'tracking.php';
//
//include the tracking library that defineds the tracking assignment class
$dbase= new tracking_assignment();
//
//Get the element that was selected to how its todo
$_GET[session]=$session;
//
//compose the sql that select the to do of this developer 
//note the sessio is user as the where condition sa pass it exactly as 
//it appears on the database
$sql = "select `description`, `start_date`,`end_date` from `todo` where `session`"
        . "=$session";
//
//query the database to retrieve its to do
$array=$dbase->get_sql_data($sql)
//
//echo back a html table
$result= json_encode($array);
echo $array;