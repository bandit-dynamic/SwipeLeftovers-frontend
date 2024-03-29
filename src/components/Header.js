import { Link } from "react-router-dom";
import MenuBar from "./Menu";

const Header = (props) => {
  return (
      <nav className='nav'>
       <Link to="/">
        <div className='logoSlogan'> 
        <img class='logo' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
            <img class='slogan' src="https://i.imgur.com/UjF2NHp.png" alt="slogan" />
        </div> 
       </Link> 
         <MenuBar />
      </nav>
  );
}

export default Header;