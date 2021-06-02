import React from 'react'

export function addContact(newContact) {
    return{
        type:"ADD_CONTACT",
        payload: newContact
    }
}

export  function deleteContact(id) {
     
    return{
       type:"DELETE_CONTACT",
       payload: id
    }
}

export  function updateContact(id,updatedcontact) {
     
    return{
       type:"UPDATE_CONTACT",
       payload:{ id:id , updatedcontactinfo:updatedcontact}
    }
}


