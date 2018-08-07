import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-1212"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jd@gmail.com",
        phone: "555-555-1212"
      },
      {
        id: 3,
        name: "Kock Doe",
        email: "k@gmail.com",
        phone: "555-555-1212"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
