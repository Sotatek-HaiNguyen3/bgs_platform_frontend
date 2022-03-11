import React from 'react'
import { Link } from 'react-router-dom'

export default function Component({ components }) {
  return (
    <>
      <div className='main-menu'>
        <ul>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
          |
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      { components }
    </>
  )
}
