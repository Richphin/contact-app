import { useState } from 'react';
import './App.css';
import ContactForm from './components/contactForm';
import Contactlists from './components/contactlists';


function App() {
  const[users,setstate]=useState([])

  function handleAddContacts(user) {
    setstate([
      ...users, user
    ])
    
  }

  function handleDelete(id) {
   let newContacts = users.filter((user) => user.id !==id);
   console.log(newContacts)
   setstate(newContacts)
  }

  function handleUpdate(id , updatedinfo) {
    let newContacts = users.map((user) =>{
      if (user.id===id) {
        return updatedinfo
      }
      return user
    })
    setstate(newContacts)
  }
  

 return(
   <div>
     <div className="container">
      <div className="col-md-6 formcontainer">
        <div><ContactForm handleAddContacts={handleAddContacts}/></div>
      </div>
      <div className="col-md-6">
        <div>
          <h2 className="head2">Contacts</h2>
          <Contactlists  delete={handleDelete} updatecontact={handleUpdate}/></div>
      </div>
     </div>
       
   </div>
  
 )
}

export default App;
