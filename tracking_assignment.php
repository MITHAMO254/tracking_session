
<?php
include 'tracking.php';
include '../metavisuo/v2.0/sql_library.php';
$tracking = new tracking_assignment();
$sql = new sql\editor('session', 'tracking_assignment');
?>

<html>
    <head> 
        <link rel="stylesheet" href="style.css" type="text/css"/>
        <link rel="stylesheet" href="page_review.css" type="text/css"/>
        <script src="page_record.js"></script>
        <script src="../metavisuo/v2.0/library.js"></script>
        <title>Grid Layout</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body class="wrapper">
        
        
        <div class="one">
            <img src="images/mutall_track.jpg"  alt="" >
            </div>
        <div class="one_b">
            <h1 align="center">  TRACKING ASSIGNMENT </h1>
        </div>
        <div class="two">Two
            <h3> DESCRIPTION OF SERVICES </h3>
            <P>This is a system that helps in managing the task of a large project effectively, efficiently on the actual schedule.</P>
        </div>
        <div class="three">Three
            <img align = "right" src="images/chris.jpg"  alt="" >
            <h3 align = "right"> <a href="./resume_pdf/chris_mithamo.pdf">By Christopher Mithamo</a> </h3>
        </div>
        <div id="four">Four
            <h3 align = "center"> SESSION </h3>
            <?php
            $sql->show('tracking_assignment');
            ?>
            <input type="submit" value="add session" name="add session" />
        </div>

        <div class="five" id="to_do">Five
            <h4 align = "center"> TO DO </h4>
            <form>
                <input type="text" id="description" name="description">
                <label for="description">Description</label><br>
                <input type="text" id="start_date" name="startdate">
                <label for="start_date">Start date</label><br>
                <input type="text" id="end_date" name="end date">
                <label for="end_date">End date</label>
            </form>
            
            <input type="submit" value="to do" name="to do"onclick="record.view_todos()" />

        </div>
    </body>
</html>

