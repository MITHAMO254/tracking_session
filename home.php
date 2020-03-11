<?php
//include the file with our db records.
include 'tracking.php';
//
//create an instance of class trcking assignment.
$tracking = new tracking_assignment();
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="../metavisuo/library.js"></script>
        <script src="../services_ui/services.js"></script>
        <script src="../services_ui/classes.js"></script>
        <script src="../metavisuo/sql_library.php"></script>
        
        <style>
            .button{
                background-color: #33ff00;
                border: 1px solid #33ff00;
                border-radius: 5px;
                text-align: justify;
                color: whitesmoke;
                line-height: 1.2;
                padding: 10px;
                margin-top: 30px;
            }
        </style>
    <script>
        credentials = {
            name: "tracking_assignment",
            username: "root",
            password: ""
        };

        function register(){

            leader = new service_entity('leader', []);
            assignment = new service_entity('assignment', []);
            //
            assignment.run(credentials);
        }
            
        function administer(){
            //
            session = new service_entity('session', []);
            //
            name1 = new service_attribute('todo', 'name', []);
            start_date = new service_attribute('todo', 'start_date', []);
            //
            repeat = new do_('The To Do List', [name1, start_date]);

            //
            admin = new branch('To do',[session, repeat]);
            //
            admin.run(credentials);
        }
    </script>
    
    </head>
    <body>
        <button onclick="register()">Register</button>
        <button onclick="administer()">Administer</button>
        <a href="assignment.php">View Assignments</a>
        <a href="developer.php">View Developers</a>
        
        
    </body>
</html>
