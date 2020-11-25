import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';

const App = () =>{
  const [contacts, setcontacts] = useState([]);

  useEffect(() =>{

    axios.get("https://randomuser.me/api/?results=3")
    .then(item =>{
    console.log(JSON.stringify(item.data.results));
    setcontacts(item.data.results);
  })

  },[]);
  
  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.First}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );
};
export default App;