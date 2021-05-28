import { connect } from "react-redux";
import Contact from "./contact";



function Contactlists(props) {
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
export default connect(mapStateToProps,{})(Contactlists);



