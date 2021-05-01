import React from "react"

function UserItem(props) {
    
    return(
        <div className="row useritem">
           <div><strong>Name : </strong>   {props.user.Username}</div>
           <div><strong>Email : </strong>   {props.user.Email}</div>
           <div><strong>Country : </strong>   {props.user.Country}</div>
           <div className="btn">
               <button className="updatebtn">Update</button>
               <button className="deletebtn" onClick={()=>props.delete(props.user.id)}>Delete</button>
           </div>
        </div>
    )
    
    
    
    }
    export default UserItem;