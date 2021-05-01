import React from "react";
import UserItem from "./useritems";

function Userlist(props) {
    
    return(
        <div>
            {props.allUsers.map((user) => (<UserItem user={user} delete={props.delete}/>))}   
        </div>
    );
    }
    export default Userlist;