import React from 'react'

export  function getAllContacts() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('contacts')
       .get()
       .then((results)=>{
           let contacts =[];
           results.forEach((doc)=>{
               contacts.push(doc.data());
           });
           dispatch({
               type: 'ADD_ALL_CONTACTS',
               payload: contacts,
             });
       })
       .catch((err) => {
           console.log(err);
         });
    };
   
}

export function addContact(newContact) {
    return(dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        db.collection('contacts')
        .add(newContact)
        .then(()=>{
            dispatch(
                {
                    type: "ADD_CONTACT",
                    payload: newContact,
                }
            );
        })
        .catch((err) => {
            console.log(err);
          });

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


