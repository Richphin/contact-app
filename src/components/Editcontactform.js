import { useState } from "react";
import { connect } from "react-redux";
import { updateContact } from "../actions/contactActions";

function EditContactform(props) {
    const[state,userstate]=useState({
        Name:props.user.Name,
        Phonenumber:props.user.Phonenumber,
        Location:props.user.Location,
    })
    function handleonChange(event){
                userstate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                
            }
    function handleonclick() {
        let user={...state , id:props.user.id}
        props.updateContact(props.user.id, user)
        props.hideModal()
        console.log('err')
    }
    return(
        <div >
        <div className="row" className="form">
                <label>Name</label><br/>
                <input type="text" name="Name" value={state.Name} className="inputfield" onChange={handleonChange}/>
        </div>
        <div className="row" className="form">
                <label >Phone number</label><br/>
                <input type="Number" name="Phonenumber" value={state.Phonenumber} className="inputfield" onChange={handleonChange}/>
        </div>
        <div className="row" className="form">
                <label >Location</label><br/>
                <input type="Location" name="Location" value={state.Location} className="inputfield" onChange={handleonChange}/>
        </div><br/>
        <div className="row" className="form">
            <button type="Submit" className="createbtn" onClick={handleonclick}>Update</button>
             
        </div>
    </div>
    )
}
let mapDispatchToProps={
    updateContact
}
let mapStateToProps=()=>{}
export default connect(mapStateToProps, mapDispatchToProps)(EditContactform);