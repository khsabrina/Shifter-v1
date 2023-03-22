import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
    const logo = require('./Logo.png');
  return (
    <div>
         <Link to="/">
            <img src={logo} style={{height:'80%'}} />
        </Link>
    </div>
  )
}

export default Logo