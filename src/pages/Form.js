import { useState} from "react"
import { Link, useNavigate} from "react-router-dom"
import Header from "../components/Header"

const Index = (props) => {
    const navigate = useNavigate()
    const [ newForm, setNewform ] = useState({
        name: "",
        image: "",
        age: "",
        bio: "",
        email: "",
        password: "",
        
    })

const handleChange = (event) =>{
    setNewform({...newForm, [event.target.name]: event.target.value})
}    

const handleSubmit = (event) =>{
    event.preventDefault()
    props.createProfile(newForm)
    navigate('/profile/register')
    setNewform({
        name: "",
        image: "",
        age: "",
        bio: "",
        email: "",
        password: "",
    })
}

// const loaded = () =>{
//     return props.profile.map((person) =>{
//         return(
//         <div key={person._id} className="person"> 
//         <img src={person.image} alt={person.name}/>
//         <Link to={`/profile/${person._id}`}><h1>{person.name}</h1></Link>
//         <h3>{person.age}</h3>   
//         <p>{person.bio}</p>
//         <h3>{person.email}</h3>     
//         </div>
//     )
//     })
// }

// const loading = () =>{
//     return <h1>Loading...</h1>
// }

    return (
    <> 
    <Header />
        <section>
         
          <div className="rightContainer">
          <img class='logo1' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
        <div className="header">
          <p className="registerH3">Create your profile</p>
          </div>
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="registerForm">
                <input 
                  className="registerInput"
                  type="text"
                  value={newForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  />
                <input  
                  className="registerInput"
                  type="text"
                  value={newForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                  />
                <input 
                  className="registerInput"
                  type="text"
                  value={newForm.age}
                  name="age"
                  placeholder="age"
                  onChange={handleChange}
                  />
                <input
                  className="registerInput"
                  type="text"
                  value={newForm.email}
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  />        
                <input
                  className="registerInput"
                  type="text"
                  value={newForm.bio}
                  name="bio"
                  placeholder="bio"
                  onChange={handleChange}
                  />
                 <input
                  className="registerInput"
                  type="text"
                  value={newForm.password}
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  />
                  </div>
                  <div className="registerInput">
                {/* <input className="signUp" type="submit" value="SignUp" /> */}
                <button className="signUp" type="submit">SIGNUP</button>
                </div>
                <p className="registerP"><span className="spanP">Already have an account?</span> <Link className="loginLink" to="/profile/login">Log in</Link></p> 
            </form> 
            </div>
            <div className="leftContainer">
        <img className="signupImg" src="https://assets3.thrillist.com/v1/image/1706913/1584x1056/crop;jpeg_quality=60;progressive.jpg" alt="" />
           </div>            
        </section>
        </>
    )
}

export default Index
