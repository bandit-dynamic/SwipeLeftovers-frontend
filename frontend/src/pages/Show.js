import { useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

const Show = (props) => {
  
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const profile = props.profile
    const person = profile.find((p) => p._id === id)

    const [editForm, setEditForm] = useState(person)

    const handleChange = (event) =>{
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.updateProfile(editForm, person._id)
        navigate('/')
    }

    const removePerson = (event) =>{
        event.preventDefault()
        props.deleteProfile(person._id)
        navigate('/')
    }

    return (
        <div className="person">
           <img src={person.image} alt={person.name}/>
           <h2>{person.name}</h2>
           <h3>{person.age}</h3>   
           <p>{person.bio}</p>
           <h3>{person.email}</h3>
           <button id="delete" onClick={removePerson}>DELETE</button>
           <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  />
                <input 
                  type="text"
                  value={editForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                  />
                <input 
                  type="text"
                  value={editForm.age}
                  name="age"
                  placeholder="age"
                  onChange={handleChange}
                  />
                <input
                  type="text"
                  value={editForm.email}
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  />
                <input
                  type="text"
                  value={editForm.bio}
                  name="bio"
                  placeholder="bio"
                  onChange={handleChange}
                  />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default Show