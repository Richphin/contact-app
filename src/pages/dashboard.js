import React from 'react'
import ContactForm from '../components/contactForm'
import Contactlists from '../components/contactlists'

function Dashboard() {
    return (
      <div>
      <div className="container">
       <div className="col-md-6 formcontainer">
         <div><ContactForm /></div>
       </div>
       <div className="col-md-6">
         <div>
           <h2 className="head2">Contacts</h2>
           <Contactlists/></div>
       </div>
      </div>
        
    </div>
    )
}

export default Dashboard
