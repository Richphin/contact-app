const initialstate = { contacts:[]}
const contactReducer =(state=initialstate,action) =>{
        switch (action.type) {
            case "ADD_CONTACT":
                console.log(action.payload)
                return { ...state, contacts: [...state.contacts, action.payload] };
                break;
        
            default:
                return state;
        }

}
export default contactReducer;