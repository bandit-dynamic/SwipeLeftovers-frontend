import { useState } from "react";
import axios  from "axios";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import Header from "../components/Header";

// import { useEffect } from 'react';

// const Login = (props) => {
//   const URI = `${process.env.REACT_APP_API_URI}`

//   const handleLogin = (e) => {
//     e.preventDefault()

//     const form = e.target;
//     const profile = {
//       email: form[0].value,
//       password: form[1].value
//     }

//     fetch(`${URI}login`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify(profile)
//     })
//     .then(res => res.json())
//     .then(data => {
//       localStorage.setItem("token", data.token)
//     })
//   }
//   useEffect(() => {
//     fetch('/userIsAuth', {
//       headers: {
//         "token-required": `${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => res.json())
//     .then(data => data.isLoggedIn ? redirect('profile/register/'): null)
//   }, [])

//   return (
//     <form onSubmit={event => handleLogin(event)}>
//       <input required type="email"/>
//       <input required type="password"/>
//       <input type="submit" value="submit"/>
//     </form>
//   )
// }

// export default Login;


const Login = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate()
  const URI = `${process.env.REACT_APP_API_URI}`
  const cookies = new Cookies()
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "POST",
      url: `${URI}login`,
      data: {
        email,
        password,
      },
    };
    
    axios(configuration)
      .then((result) => {

        setLogin(true)
        navigate('/')
        

        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path:"/",
        })
        console.log(result.data.token)

      })
      .catch((error) => {
        error = new Error();
      });
  
}
return(
  <>
  <Header />
  <section>
     <div className="loginLeft">
        <img className="loginImg" src="https://assets3.thrillist.com/v1/image/1901417/1584x1056/crop;jpeg_quality=60;progressive.jpg" alt="" />
      </div>
      <div className="loginRight">
        <div className="loginHeader">
        <img class='logo2' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
          <p className="welcome">Welcome back</p>
        </div>
        {/* <div className="loginForm"> */}
  <form className="loginForm" onSubmit={(e)=>handleSubmit(e)}>
    <div className="loginInputs">
  <input className="loginInput" 
  required value={email} type="email" 
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"/>
  <input className="loginInput" 
  required value={password} type="password" 
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"/>
  </div>
  <div className="loginInput">
  {/* <input className="loginInput" type="submit" value="submit" onClick={(e) => handleSubmit(e)}/> */}
  <button className="loginButton" type="submit" onClick={(e) => handleSubmit(e)}>LOGIN</button>
  {login ? (
          navigate('/')
        ) : (
          <p className="warnP">You Are Not Logged in</p>
        )}
        </div>

         <p className="loginP"><span className="spanP">Don’t you have an account?</span> <Link className="registerLink" to="/profile/register">Sign up</Link></p> 
  
  </form>
  </div>
  </section>
  </>
  )

}

export default Login;


