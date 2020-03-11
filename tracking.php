<?php
//
//iclude the file that has connection credentials.
include './config.php';
//inclue the ile that has the database connection that extends PDO.
include '../metavisuo/library.php';
//
//
class tracking_assignment extends database{
    //
    //create a static instance of this database.
    static $current;
    public $assignment=[];
    public $application=[];
    public $developer=[];
    public function __construct() {
        //
        $this->assignment = [];
        parent::__construct(config::dbname, config::username, config::password);
        //
        tracking_assignment::$current = $this;
        //
        $this->set_assignment();
        $this->set_application();
        $this->set_developer();
        
}
    function set_assignment(){
        //fetch records from the database.
        $sql = "select * from `assignment`";
        $result = tracking_assignment::$current->query($sql);
        $this->assignment = $result->fetchall(PDO::FETCH_CLASS,'assignment');
}
    //
    function set_application(){
        $sql = "select * from `application`";
        $result = tracking_assignment::$current->query($sql);
        $this->application = $result->fetchall(PDO::FETCH_CLASS,'application'); 
    }
    function show_application(){
        foreach ($this->application as $application){
            echo "<div>$application->name<div>";
        }
    }
    function set_developer(){
        $sql = "select * from `developer`";
        $result = tracking_assignment::$current->query($sql);
        $this->developer =$result->fetchall(PDO::FETCH_CLASS,"developer");
    }
    function show_developer(){
        foreach ($this->developer as $devoloper){
            echo "<div>$devoloper->username</div>";
        }
    }
  
}
class developer{
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