<?php
//
//include the file that has connection credentials.
include './config.php';
//
//include the file that has the database connection that extends PDO.
include '../metavisuo/v2.0/library.php';
//
//
class tracking_assignment extends database{
    //
    //create a static instance of this database.
    static $current;
    public $assignment=[];
    public $application=[];
    public $developer=[];
    function __construct() {
        //
        //set up a connection between php file and database it connects.
        $this->assignment = [];
        parent::__construct(config::dbname, config::username, config::password);
        //
        // return values from tracking_assingment database
        tracking_assignment::$current = $this;
        //
        //select the following variables from the database.
        $this->set_assignment();
        $this->set_application();
        $this->set_developer();
        
}
    function set_assignment(){
        //
        //fetch records from the database.
        $sql = "select * from `assignment`";
        $result = tracking_assignment::$current->query($sql);
        $this->assignment = $result->fetchall(PDO::FETCH_CLASS,'assignment');
}
    //
    // sql statement to select application from tracking assignment
    function set_application(){
        $sql = "select * from `application`";
        $result = tracking_assignment::$current->query($sql);
        $this->application = $result->fetchall(PDO::FETCH_CLASS,'application'); 
    }
    //
    //function to show developers applications
    function show_application(){
        foreach ($this->application as $application){
            //echo "<a href = '$application->link'>application->link</a>";
        }
    }
    //
    //function to select developers from tracking assignment
    function set_developer(){
        //
        //sql statement to select developers from tracking assignment database.
        $sql = "select * from `developer`";
        $result = tracking_assignment::$current->query($sql);
        $this->developer =$result->fetchall(PDO::FETCH_CLASS,"developer");
            
        }
    }
    //
    //function to display developers
    function show_developer(){
        foreach ($this->developer as $developer){
            echo "<div class='app'>$developer->username<div>";
                  
            
                    
        }
    }
  

class developer {
    //
    public function __construct(){
        
    }
 
}
class todo{
    
}

class leader{
    
}


class session{
    
}

class assignment{
    
}

class application{
    
}