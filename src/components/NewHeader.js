import { Link } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const NewHeader = (props) => {
    const auth = useContext(AuthContext)

  return (
      <nav className='nav'>
       <Link to="/profile/all">
        <div className='logoSlogan'> 
        <img class='logo' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
            <img class='slogan' src="https://i.imgur.com/UjF2NHp.png" alt="slogan" />
        </div> 
       </Link> 
       
       

        {/* {auth.isLoggedIn && ( */}
        <Link to="/profile/login">
            <button className="logout" onClick={() => auth.logout()}>LOGOUT</button>
        </Link>
         {/* )} */}
        
      </nav>
  );
}

export default NewHeader;