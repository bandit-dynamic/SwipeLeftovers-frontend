import { Link } from "react-router-dom";

const Header = (props) => {
  return (
      <nav className='nav'>
          <Link className="link" to="/">
              <div>Register</div>
          </Link>
          <Link className="link" to="/profile/register">
              <div>Index</div>
          </Link>
          <Link className="link" to="/profile">
              <div>LogOut</div>
          </Link>
    
      </nav>
  );
}

export default Header;