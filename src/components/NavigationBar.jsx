import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">

      
<Link className="navbar-brand text-light" to="/">APPLICATION FORM</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
                
              <Link className="nav-link text-light" to="/">
                ADD CARS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/delete">
                DELETE CARS
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link text-light" to="/view">
                VIEW CARS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/search">
                SEARCH CARS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavigationBar