import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">

        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Sarah Peng</NavLink>
            </li>
            <li>
              <NavLink to="/taskTracker">Task Tracker</NavLink>
            </li>
            <li>
              <NavLink to="calendar">Upcoming</NavLink>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
