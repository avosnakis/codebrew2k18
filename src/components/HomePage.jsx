import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.jsx';
import OrganisationCard from './OrganisationCard.jsx';


export default function HomePage(props) {
  return (
    <div>
      <NavBar/>
      <OrganisationCard data={{
        img: "../images/unhrc.svg",
        orgName: "UNHRC",
        desc: "The UNHRC is the United Nations Human Rights commission, a body for" +
        " defending human rights worldwide",
      }}/>
    </div>
  );
}