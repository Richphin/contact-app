import Contact from "./contact";


function Contactlists(props) {
   
       
           
               return(
                <div >
                     {props.allUsers.map((user) => (<Contact user={user} delete={props.delete} updatecontact={props.updatecontact}/> ))}
                   
                  
                
                </div>
               )
           
       
   
    
        

}

export default Contactlists;



