import React from 'react'
import "../Styles/footer.scss"
import foo from "../Resources/footerMoon.png";

export const Footer = () => {
  return <footer>
        <div>
            <h1>Lunar</h1>
            <p>@All Rights Reserved</p>
        </div>
        <div>
            <img src={foo} alt="Moon" />
        </div>
  </footer>
}
