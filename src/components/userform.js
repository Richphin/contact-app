import React,{ useState } from "react";


function Userform(props) {

    const[state,userstate]=useState({
        Username:"",
        Email:"",
        Country:"",
        Password:"",
    })

    function handleonChange(event) {
        userstate({
            ...state,
            [event.target.name]:event.target.value,
        })
    }

    function handleonSubmit() {
        let userid= 10000 + Math.random() * 10000000000;
        let user= {...state, id:userid}
        console.log(user)
        props.adduser(user);
    }

    return(
        <div >
            <div className="row" className="form">
                    <label className="formlabel">Username</label><span className="required">*</span><br/>
                    <input type="text" name="Username" value={state.Username} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label  className="formlabel">Email</label><span className="required">*</span><br/>
                    <input type="Email" name="Email" value={state.Email} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label  className="formlabel">Country</label><br/>
                    <input type="text" name="Country" value={state.Country} className="inputfield" onChange={handleonChange}/>
            </div>
            <div className="row" className="form">
                    <label  className="formlabel">Password</label><span className="required">*</span><br/>
                    <input type="Password" name="Password" value={state.Password} className="inputfield" onChange={handleonChange}/>
            </div><br/>
            <div className="row" className="form">
                <button type="Submit" className="createbtn" onClick={handleonSubmit}>Create User</button>
                 
            </div>
        </div>
    )
}
export default Userform;