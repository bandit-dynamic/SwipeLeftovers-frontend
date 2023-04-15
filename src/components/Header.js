import { Link } from "react-router-dom";
// import logo from '../images/image.png';

// function Logo () {
//     return (
//         <div className="logo">
//             <br></br>
//             <img src = {logo} width={100} height={100} />
//         </div>
//     )
// }


const Header = (props) => {
  return (
      <nav className='nav'>
        <div className='logoSlogan'> 
        <img class='logo' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
            <img class='slogan' src="https://i.imgur.com/UjF2NHp.png" alt="slogan" />
        </div>

          <Link className="link" to="/">
              <div>Register</div>
          </Link>
          <Link className="link" to="/profile/register">
              <div>Index</div>
          </Link>
          <Link className="link" to="/profile">
              <div>LogOut</div>
          </Link>
          <Link className="link" to="/profile/login">
              <div>LogIn</div>
          </Link>
    
      </nav>
  );
}

export default Header;