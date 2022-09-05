import React from 'react'
import { Contact } from '../components/Contact'
import Contactstate from '../components/Contactstate'

const ContactList=()=> {

    const newContact = new Contact('Esteban', 'Mazzolari', false, 'esteban@esteban.com') 

  return (
    <div>
        <Contactstate contact={newContact}></Contactstate> 
    </div>
  );
};
 
export default ContactList;
