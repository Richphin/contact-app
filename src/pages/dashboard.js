import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import ContactForm from '../components/contactForm'
import Contactlists from '../components/contactlists'



function Dashboard(props) {
  function handleLogout(){
    props.logout()
}
    return (
      <div>
      <div className="container">
       <div className="col-md-6 formcontainer">
         <div><ContactForm /></div>
         
       </div>
       <div className="col-md-6">
         <div>
         <button type="button" 
          name="Submit" 
          onClick={handleLogout}
          style={{backgroundColor:"tomato" , color:"white", float:"right"}}
          >Logout</button>
           <h2 className="head2">Contacts</h2>
           <Contactlists/></div>
       </div>
      </div>
        
    </div>
    )
}

export default  connect(null,{logout})(Dashboard)
