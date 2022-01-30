import {AppBar,Toolbar,Typography,Menu,MenuItem,Button,IconButton} from '@mui/material/'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-primary">
        <a className="navbar-brand mx-3" href="#">
          Navbar
        </a>
        <button data-bs-toggle="collapse" data-bs-target="#navbarCollapse" className="btn navbar-toggler mx-3">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse ">
        <ul className="navbar-nav mx-3">
          <li className="nav-item" > <a href="#" className="nav-link">LINK </a> </li>
          <li className="nav-item" > <a href="#" className="nav-link">LINK </a> </li>
          <li className="nav-item" > <a href="#" className="nav-link">LINK </a> </li>
          <li className="nav-item" > <a href="#" className="nav-link">LINK </a> </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
