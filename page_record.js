//
//Set as global variables because they are passe froom one window to another 
var current_dbase=null, entity_= null ;

class record{    
    //
    //Retrieves and sets the current database that is saved at the window object 
    static get dbase(){
        //
        //Test if the the current database 
        if(current_dbase===null || current_dbase===undefined){
            //
            //Get the dbase saved at the window object 
            current_dbase=window.__dbase__;
            //
            //Return the dbase 
            return current_dbase;
        }
        //
        //Return the already set dbase
        else{
            
            return current_dbase;
        }
    }
    
    //
    //Get the current entity of operation whose record is being edited
    static get entity(){
        //
        //test if the entity is already set
        if(entity_===null || entity_===undefined) {
            //
            //get the current database 
            const dbase = this.dbase;
            //
            //Get the table dom element
            const table= document.querySelector("table");;
            //
            //Get the name of the entity that is involved
            const name=table.getAttribute('name');
            //
            //Get the alterable entity from the alterable database
            entity_= dbase.entities[name];
            //
            //return the entity
            return entity_;
        }
        //
        //Return the set entity
        else {
            return entity_;
        }
    }
    
    //
    //Selects a row on the table for further processing 
    static select(tr){
        //
        //remove any previous selection 
        const prev = document.querySelector(".clicked");
        if(prev !== null){
          prev.classList.remove('clicked');
        }
        //
        //Add a classlist of selected to the tr
        tr.classList.add('clicked');
    }
    
    //
    //updates the to do list based on the seleted cell it can be either based on 
    //leader, date, session,assignment
    static view_todos(){
        //
        //Get the selected td 
        const td = document.querySelector(".selected");
        //
        //Note we can only update the todo list if there was a cell that was clicked
        //alert an error if no cell was clicked
        if(td === null){
          alert('Please select the cell that drives your tod list');
        }
        //
        //retrive the option that was clicked to update the todo
        const type= td.getAttribute('name');
        //
        //update the todo based on the leader
        if(type==='leader'){
            this.todo_leader(td);
        }
        //
        //update the todo based on the date 
       if(type==='date'){
            //
            this.date_todos(td);
        }
        //
        //update the todo based on the assignment
        if(type==='assignment'){
            this.assignment_todos(td);
        }
        //update the todo based on the session
        if(type==='session'){
            this.session_todos(td);
        }
        else{}
    }
    
    //
    //creates a table of the todo based on the leader
    static async session_todos(td){
        console.log(document.querySelector('#to_do'));
        const name = "tracking_assignment";
        const username='root';
        const password="";
        //
        //Get the text content 
        const session = td.textContent;
        //
        //Create an sql to retieve the todos based on theis leader
        const sql="select `todo`.`description`, `todo`.`start_date`, `todo`.`end_date`"
                +"from `todo`" 
                +"inner join `session` on `todo`.`session`=`session`.`session`"
                +"where `session`.`session`"
               +`=${session}`;
        //
        //fetch the retrieved data
        const data= await mutall.fetch('database', 'get_sql_data',
        {name,username,password, sql});
        //
        //display the data in a table 
        const table = document.createElement('table');
        //
        //create the headings 
        const th= document.createElement('th');
        th.innerHTML="<th><td>description</td><td>start_date</td><td>end_date</td></th>"
        table.appendChild(th);
        data.forEach(function(option){
           // 
           const tr =document.createElement('tr');
           const td=`<td>${option['description']}</td>`
                     +`<td>${option['start_date']}</td>`
                     +`<td>${option['end_date']}</td>`;
            tr.innerHTML=td;
            table.appendChild(tr);
        });
        //
        //display the todo 
        const div = document.querySelector("#to_do");
        console.log(div);
        div.appendChild(table);
    }

    //
    //creates a table of the todo based on the leader
    static async date_todos(td){
        const name = "tracking_assignment"; 
        //
        //Get the text content 
        const date_required = td.textContent;
        //
        //Create an sql to retieve the todos based on theis leader
        const sql="select todo.description, todo.start_date, todo.end_date"
                +"from todo" 
                 +`where leader.username=${date_required} `;
        //
        //fetch the retrieved data
        const data= await mutall.fetch('database', 'get_sql_data', {name, sql});
        //
        //display the data in a table 
        const table = document.createElement('table');
        //
        //create the headings 
        const th="<th><td>description</td><td>start_date</td><td>end_date</td></th>"
        table.appendChild(th);
        (data.objectValues).forEach(function(option){
           // 
           const tr =document.createElement('tr');
           const td=`<td>${option['description']}</td>`
                     +`<td>${option['start_date']}</td>`
                     +`<td>${option['end_date']}</td>`;
            tr.innerHTML=td;
            table.appendChild(tr);
        });
        //
        //display the todo 
        const div = document.getElementById('to_do');
        div.innerHTML=table;
    }

    
    //
    //creates a table of the todo based on the leader
    static async todo_leader(td){
        const name = "tracking_assignment";
        //
        //Get the text content 
        const leader_name = td.textContent;
        //
        //Create an sql to retieve the todos based on theis leader
        const sql="select todo.description, todo.start_date, todo.end_date"
                +"from todo" 
                +"inner join session on todo.session=session.session"
                +"inner join leader on session.leader=leader.leader"
                +`where leader.username=${leader_name} `;
        //
        //fetch the retrieved data
        const data= await mutall.fetch('database', 'get_sql_data', {name, sql});
        //
        //display the data in a table 
        const table = document.createElement('table');
        //
        //create the headings 
        const th="<th><td>description</td><td>start_date</td><td>end_date</td></th>"
        table.appendChild(th);
        (data.objectValues).forEach(function(option){
           // 
           const tr =document.createElement('tr');
           const td=`<td>${option['description']}</td>`
                     +`<td>${option['start_date']}</td>`
                     +`<td>${option['end_date']}</td>`;
            tr.innerHTML=td;
            table.appendChild(tr);
        });
        //
        //display the todo 
        const div = document.getElementById('to_do');
        div.innerHTML=table;
    }
    
    //
    //creates a table of the todo based on the assignment
    static async assignment_todos(td){
        const name = "tracking_assignment";
        //
        //Get the text content 
        const ass = eval(td.getAttribute('title'));
        const assignment=ass[0];
        //
        //Create an sql to retieve the todos based on theis leader
        const sql="select todo.description, todo.start_date, todo.end_date"
                +"from todo" 
                +"inner join session on todo.session=session.session"
                +"inner join assignment on session.assignment=assignment.assignment"
                +`where assignment.assignment=${assignment} `;
        //
        //fetch the retrieved data
        const data= await mutall.fetch('database', 'get_sql_data', {name, sql});
        //
        //display the data in a table 
        const table = document.createElement('table');
        //
        //create the headings 
        const th="<th><td>description</td><td>start_date</td><td>end_date</td></th>"
        table.appendChild(th);
        (data.objectValues).forEach(function(option){
           // 
           const tr =document.createElement('tr');
           const td=`<td>${option['description']}</td>`
                     +`<td>${option['start_date']}</td>`
                     +`<td>${option['end_date']}</td>`;
            tr.innerHTML=td;
            table.appendChild(tr);
        });
        //
        //display the todo 
        const div = document.getElementById('to_do');
        div.innerHTML=table;
    }

    //
    //Get the data to be saved as a key value pair of the following structure
    //{ename,primary [{cname:value}...]}
    static data($status){
        //the data to be returned
        var data, ename, primary;
        //
        //Get the selected tr inwhich the salected data is found  
        const tr = document.querySelector('.clicked');
        //
        //1.THE ENAME
        //Get the entity's name as ename saved as the id of the tr
        ename= tr.getAttribute('id');
        //
        //2. THE PRIMARY
        //
        //Get the tds that have the data to be saved  
        const tds= tr.childNodes; 
        //
        //Loop through the tds to extract the information saved by the type of the 
        //column
        //start with an empty array to store the various attibutes
        const attributes=[];
        for(let i=0; i<tds.length; i++){
            //
            //Get the ith td
            const td=tds[i];
            //
            //Get the type of the column
            const type= td.getAttribute('type');
            //
            //Test for the primary
            if(type==='primary'){
                const pri= td.textContent;
                primary= eval(pri);
            }
            //
            //3 GET THE OTHER COMPONENT COLUMNS
            //Get the attributes
            if(type==='attribute'){
                //get the cname
                const name=td.getAttribute('name');
                //get the updated value
                const value= td.textContent;                
                //
                attributes.push({name, value});
            }
            //Get the foreigns
           if(type==='foreign'){
               //get the cname
                const name=td.getAttribute('name');
                //
                //Get the updated value
                const title=td.getAttribute('title'); 
                const value1= eval(title);
                const value= value1[0];
                //
                attributes.push({name, value});
           }
           data={ename,primary,attributes};
        }
        const values=JSON.stringify(attributes);
        if($status){
            //
            //save update in php first test it using 
            //pass the parameters in the query string
            const win = window.open(`update.php?ename=${ename}&dbname=mullco_rental&primary=${primary}&attributes=${values}`);
        }
        else{
            const win = window.open(`delete.php?ename=${ename}&dbname=mullco_rental&primary=${primary}&attributes=${values}`);
        }
    }
    
    //update the new window marking as selected the given field
    static selector_update(pri){
        const primary= eval(pri);
        //Get the selected raw and mark it as selected 
        const tr = this.page_selector.document.getElementById(`${primary[0]}`);
        //
        //Add a classlist of selected to the tr
        tr.classList.add('clicked'); 
    }
    //
    //retrieves any data that was passed by the widow as selected
    static get_selector_data(){
        //
        //get the primary 
        return {primary, friendly, ref_table_name} = page_selector.selected_;
    }
    
    //
    //creates a record from the editor by inserting a blank row showing all the 
    //a) attributes as editable fiekds and b) foreign columns as buttons. 
    static create(){
       //
       //Get the alterable entity 
       const entity= this.entity;
       //
       //Get the tr created by the alterable entity 
       const tr = entity.create_td();
       //
       //Insert the tr after the first child since the first child is a header 
       //and the newly created should be after the header
       const table_body = document.querySelector("table").querySelector("tbody");
       table_body.insertBefore(tr,table_body.childNodes[0]); 
    }
    
    //
    //Marks a td as selected 
    static select_td(td){
        //remove any previous selection 
        const prev = document.querySelector(".selected");
        if(prev !== null){
          prev.classList.remove('selected');
        }
        //
        //Add a classlist of selected to the tr
        td.classList.add('selected');
        //
        //focus on the selected td 
        td.autofocus;
        td.focus();
    }
    
    //
    //Create a new record for the selected entity using a new window
    static create_selector_record() {
        //
        //Get the entity of operation 
        const entity= this.entity;
        //
        //Open an empty brand new window that displays the label format
        let $win = window.open("page_create.php");
        //
        //save the database at the window object 
        $win.__dbase__=this.dbase;
        //
        //Onloading the window loop through all the columns in this entity 
        //displaying their inputs 
        $win.onload = () => {
            //
            //Get the $body element of $win (window).
            let body = $win.document.querySelector('form');
            //
            //looping through all the columns to create a label inputs
            for (let cname in entity.columns) {
                //
                //Get the named column
                let column = entity.columns[cname];
                //
                //Append all the column as lables appended to the body of the new window 
                column.inputs(body);
            };
        };
        //
        //Set the database as a property of the creator
        $win.__dbase__=this.dbase;
        //
        //set it as a property of the class so as to access using other methords
        this.creator= $win;
        
        

    }
    
    //
    //Collects all the data in the label layout of the select sql in the following 
    //format{ename, [{attribute,value}......]}
    static label_data(){
        //
        //Start by getting the affected entity
        const entity= this.entity;
        //Retieve the name of the entity 
        const ename= entity.name;
        //
        //Get the form from creator window 
        const form = this.creator.querySelector('form');
        //
        //Get the inputs for every column from  the form 
        const inputs= Array.of(form.querySelectorAll('input'));
        //
        //Begin with an empty array of attributes
        const attributes=[];
        //
        //loop through all the inputs creating a name and a value pair abject
        inputs.forEach(input=>{
           //
           //Get the name of the column with the input
           const name= input.textContent;
           const value= entity.columns[name].get_value();
           //
           //Push the pair in the attributes array
           attributes.push({name,value});
        });
        //
        const values=JSON.stringify(attributes);
        //
        //save update in php first test it using 
        //pass the parameters in the query string
        const win = window.open(`update.php?ename=${ename}&dbname=mullco_rental&attributes=${attributes}`);      
    }
    //
    //displays the o dos of the selected row 
    static get_todo(){
        //
        //Get the selected row 
        const selected_row = document.querySelector(".clicked");
        //
        //Get the session of the selected row
         
        //
        //prepare the sql to retrieve the todos of the selected row 
        //
        //fetch the resjult from the database 
        //
        //display the result n a table format
    }
}