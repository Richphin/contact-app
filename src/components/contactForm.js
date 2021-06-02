import { Component , } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {addContact} from "../actions/contactActions";




// class ContactForm extends Component {
//     constructor(){
//         super();
//         this.state={
//             Name:"",
//             Phonenumber:"",
//             Location:""
//         }
//     }

//      handleonChange = (event) => {
//         this.setstate({
//             ...this.state,
//             [event.target.name]:event.target.value,
//         })
//     }
//     render(){
//         return(
//             <div >
//             <div className="row" className="form">
//                     <label className="formlabel">Name</label><span className="required">*</span><br/>
//                     <input type="text" name="Name" value={this.state.Name} className="inputfield" onChange={this.handleonChange}/>
//             </div>
//             <div className="row" className="form">
//                     <label  className="formlabel">Phone number</label><span className="required">*</span><br/>
//                     <input type="Number" name="Phonenumber" value={this.state.Phone} className="inputfield" onChange/>
//             </div>
//             <div className="row" className="form">
//                     <label  className="formlabel">Location</label><span className="required">*</span><br/>
//                     <input type="Location" name="Location" value={this.state.Location} className="inputfield" onChange/>
//             </div><br/>
//             <div className="row" className="form">
//                 <button type="Submit" className="createbtn" onClick>Save</button>
                 
//             </div>
//         </div>
//         )
//     }
// }

function ContactForm(props) {
    const[state,userstate]=useState({
        Name:"",
        Phonenumber:"",
        Location:"",
    })
    function handleonChange(event){
                userstate({
                    ...state,
                    [event.target.name]:event.target.value,
                })
                
            }
    function handleonclick() {
        let userId=10000 + Math.random() * 100000000 ;
        let user={...state , id:userId}
        console.log(user)
        props.addContact(user)
    }
    return(
        <div >
            <h2 className="head1">Add Contact</h2>
        <div className="row" className="form">
                <label className="formlabel">Name</label><span className="required">*</span><br/>
                <input type="text" name="Name" value={state.Name} className="inputfield" onChange={handleonChange}/>
        </div>
        <div className="row" className="form">
                <label  className="formlabel">Phone number</label><span className="required">*</span><br/>
                <input type="Number" name="Phonenumber" value={state.Phonenumber} className="inputfield" onChange={handleonChange}/>
        </div>
        <div className="row" className="form">
                <label  className="formlabel">Location</label><span className="required">*</span><br/>
                <input type="Location" name="Location" value={state.Location} className="inputfield" onChange={handleonChange}/>
        </div><br/>
        <div className="row" className="form">
            <button type="Submit" className="createbtn" onClick={handleonclick}>Save</button>
             
        </div>
    </div>
    )
}
export default connect(null,{addContact})(ContactForm);