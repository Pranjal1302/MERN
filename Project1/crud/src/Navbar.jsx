import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <li>
            <Link to='/show'>Show</Link>
            <Link to='/add'>Add</Link>
        </li>
    </div>
  )
}

export default Navbar