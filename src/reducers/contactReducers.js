const initialstate = { contacts:[]}
const contactReducer =(state=initialstate,action) =>{
        switch (action.type) {

            case "ADD_ALL_CONTACTS":
            let contacts = action.payload;
            return { contacts: contacts };

            case "ADD_CONTACT":
                console.log(action.payload)
                return { ...state, contacts: [...state.contacts, action.payload] };
                
            case "DELETE_CONTACT":
                var id=action.payload;
                var newContacts = state.contacts.filter((user) => user.id !==id);
                return {contacts:newContacts}
            
            case "UPDATE_CONTACT":
                var id=action.payload.id;
                var updatedinfo=action.payload.updatedcontactinfo;
                var Contactsafterupdate = state.contacts.map((user) =>{
                    if (user.id===id) {
                      return updatedinfo
                    }
                    return user
                  })
                  return{contacts:Contactsafterupdate}
                  
            default:
                return state;
        }

}
export default contactReducer;