import { useState } from "react"
import { Link } from "react-router-dom"

const Index = (props) => {
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
    setNewform({
        name: "",
        image: "",
        age: "",
        bio: "",
        email: "",
        password: "",
    })
}

const loaded = () =>{
    return props.profile.map((person) => {
        return (
        <div key={person._id} className="person"> 
        <img src={person.image} alt={person.name}/>
        <Link to={`/profile/${person._id}`}><h1>{person.name}</h1></Link>
        <h3>{person.age}</h3>   
        <p>{person.bio}</p>
        <h3>{person.email}</h3>
            
        </div>
        )
})
}

const loading = () =>{
    return <h1>Loading...</h1>
}

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  value={newForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  />
                <input 
                  type="text"
                  value={newForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                  />
                <input 
                  type="text"
                  value={newForm.age}
                  name="age"
                  placeholder="age"
                  onChange={handleChange}
                  />
                <input
                  type="text"
                  value={newForm.email}
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  />
                <input
                  type="text"
                  value={newForm.bio}
                  name="bio"
                  placeholder="bio"
                  onChange={handleChange}
                  />
                <input
                  type="text"
                  value={newForm.password}
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  />
                <input type="submit" value="Create" />
            </form>
            {props.profile ? loaded() : loading()}
        </section>
    )
}

export default Index