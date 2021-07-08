import { Modal } from "react-bootstrap";
import { useState } from "react";
import EditContactform from "./Editcontactform";
import { connect } from "react-redux";
import { deleteContact } from "../actions/contactActions";


function Contact(props) {
    const [displaymodal,setshowmodal] =useState(false);
    function showModal() {
        setshowmodal(true);
    }

    function hideModal() {
        setshowmodal(false);
    }
       
           
    return(
     <div >
          
              <div  className="row useritem">
                  <p><strong>Name : </strong>{props.user.Name}</p>
                  <p><strong>Phone number : </strong>{props.user.Phonenumber}</p>
                 <p><strong>Location : </strong>{props.user.Location}</p>
                 <button className="updatebtn" onClick={showModal} >Edit</button>
                 <Modal show={displaymodal} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditContactform
                            user={props.user}
                            
                            hideModal={hideModal}
                        />
                    </Modal.Body>


                </Modal>

                 <button className="deletebtn" onClick={() => {props.deleteContact(props.user.id)}}>Delete</button>
                 
                 
              </div>
    
     </div>
    )

}
let mapDispatchToProps ={
    deleteContact,
}
let mapStateToProps=() =>{}


export default connect(mapStateToProps, mapDispatchToProps)(Contact)
;