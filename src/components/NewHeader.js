import { Link } from "react-router-dom";

const NewHeader = (props) => {
  return (
      <nav className='nav'>
       <Link to="/profile/all">
        <div className='logoSlogan'> 
        <img class='logo' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
            <img class='slogan' src="https://i.imgur.com/UjF2NHp.png" alt="slogan" />
        </div> 
       </Link> 
       <Link className="logout" to="/">
              <div className="log0utLink">LOGOUT</div>
          </Link>
      </nav>
  );
}

export default NewHeader;