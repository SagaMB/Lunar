import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "../Styles/header.scss";
export const Header = () => {
  return (
    <>
        <nav>
            <h1>Lunar</h1>
            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <HashLink to={"/#what"}>what</HashLink>
                <HashLink to={"/#why"}>Why</HashLink>
                <Link to={"/phases"}>Phases</Link>
                <Link to={"/contact"}>Query</Link>
                
            </main>
        </nav>
    </>
  )
}
