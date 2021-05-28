import React from 'react'

function addContact(newContact) {
    return{
        type:"ADD_CONTACT",
        payload: newContact
    }
}

export default addContact
