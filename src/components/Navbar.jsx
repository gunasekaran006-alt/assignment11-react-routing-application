import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* NavLink will automatically apply 'active' class when clicked */}
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/users" className="nav-link">Users</NavLink>
    </nav>
  );
};

export default Navbar;