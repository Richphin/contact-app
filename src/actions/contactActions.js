import React from 'react'

export  function getAllContacts() {
    return(dispatch,state,{getFirestore})=>{
       const db = getFirestore();
       db.collection('contacts')
       .onSnapshot(
        (results)=>{
            let contacts =[];
            results.forEach((doc)=>{
                contacts.push({...doc.data(), id: doc.id});
            });
            dispatch({
                type: 'ADD_ALL_CONTACTS',
                payload: contacts,
              });
        },
        (err) => {
            console.log(err);
          }
       );
       
    };
   
}

export function addContact(newContact) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('contacts').add(newContact)  
        } catch (error) {
            console.log(error);
        }
    }  
}

export  function deleteContact(id) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('contacts').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    } 
   
 }

 export  function updateContact(id,updatedcontact) {
    return async (dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        try {
           await db.collection('contacts').doc(id).update(updatedcontact);
        } catch (error) {
            console.log(error);
        }
    }
     
}




