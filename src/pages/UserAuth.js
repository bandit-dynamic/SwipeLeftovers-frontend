// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react';

// const Login = () => {
//   const URI = `${process.env.REACT_APP_API_URI}`

//   const navigate = useNavigate()

//   const handleLogin = (e) => {
//     e.preventDefault()

//     const form = e.target;
//     const user = {
//       email: form[0].value,
//       password: form[1].value
//     }

//     fetch(`${URI}login`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(data => {
//       localStorage.setItem("token", data.token)
//     })
//   }
//   useEffect(() => {
//     fetch('/userIsAuth', {
//       headers: {
//         "token-required": localStorage.getItem("token")
//       }
//     })
//     .then(res => res.json())
//     .then(data => data.isLoggedIn ? navigate.push('profile/register'): null)
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

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const URI = process.env.REACT_APP_API_URI;

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form[0].value,
      password: form[1].value
    };

    fetch(`${URI}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      navigate('/profile/register');
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (typeof token === 'string' && token.trim().length > 0) {
      fetch('/userIsAuth', {
        headers: {
          'Authorization': `Bearer ${token.trim()}`
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to authenticate');
        }
        return res.json();
      })
      .then(data => {
        if (data.isLoggedIn) {
          navigate('/profile/register');
        }
      })
      .catch(error => {
        console.error(error);
        // Display error message to the user
      });
    }
  }, [navigate]);

  return (
    <form onSubmit={event => handleLogin(event)}>
      <input required type="email" />
      <input required type="password" />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Login;
