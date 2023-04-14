import { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router";

// import { redirect} from 'react-router-dom'
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
        navigate('/profile/register')
        
      })
      .catch((error) => {
        error = new Error();
      });
  
}
return(
  <form onSubmit={(e)=>handleSubmit(e)}>
  {/* email */}
  <input required value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>

  {/* password */}
  <input required value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>

  {/* submit button */}
  <input type="submit" value="submit" onClick={(e) => handleSubmit(e)}/>

  {login ? (
          <p>Welcome back!</p>
        ) : (
          <p>You Are Not Logged in</p>
        )}
</form>
  )

}


export default Login;


