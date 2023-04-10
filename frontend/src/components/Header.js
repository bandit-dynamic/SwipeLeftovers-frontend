import { Link } from "react-router-dom";

const Header = (props) => {
  return (
      <nav className='nav'>
          <Link to="/">
              <div>Swipe Leftovers App</div>
          </Link>
    
      </nav>
  );
}

export default Header;
