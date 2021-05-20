const initialstate = ({name:"Richard",
                       contactId:"123456", 
                       number: "0012367678488" 
                    })
const contactReducer =(state=initialstate,action) =>{
        switch (action.type) {
            case "ADD_CONTACT":
                
                break;
        
            default:
                return state;
        }

}
export default contactReducer;