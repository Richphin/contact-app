import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllContacts } from "../actions/contactActions";
import Contact from "./contact";




function Contactlists(props) {
     useEffect(()=>{
          props.getAllContacts();
      },[]);
            return(
                <div >
                     {props.contacts.map((user) => (<Contact user={user} delete={props.delete} updatecontact={props.updatecontact}/> ))}
                 
                </div>
               )
    
}
function mapStateToProps(state){
     return{
          contacts: state.contacts,
     }
}

const mapDispatchToProps = {
     getAllContacts,
   };
export default connect(mapStateToProps,mapDispatchToProps)(Contactlists);



