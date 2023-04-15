import { useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'

const Show = (props) => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const profile = props.profile
    const person = profile.find((p) => p._id === id)
console.log(person.image)
const tu = person.image.map(img=>{
  console.log(img)
})
    const [editForm, setEditForm] = useState(person)

    const handleChange = (event) =>{
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.updateProfile(editForm, person._id)
        navigate('/profile/register')
    }

    const removePerson = (event) =>{
        event.preventDefault()
        props.deleteProfile(person._id)
        navigate('/profile/register')
    }

    const handleToggle = () =>{
      setToggle(!toggle)
    }
    const handleToggle2 = () =>{
      setToggle2(!toggle2)
    }

    return (
        <div className="person">
          <div className="detail">
          {/* <div class="slideshow-container">
          {person.image.map((img, index )=>(
            <div key={index}>
             <img src={img} alt={person.name}/>
             </div>
           ))} */}
          {/* </div> */}
          {/* <Carousel>
          <Carousel.Item> */}
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            /> */}
              <div class="slideshow-container">
            <Carousel> 
          {person.image.map((img, index )=>(   
             <Carousel.Item>
          <div key={index}>
             <img src={img} alt={person.name}/>
               </div>
              </Carousel.Item>
           ))} 
           </Carousel>
           </div> 
           
          {/* </Carousel.Item> 
        </Carousel> */}
          {/* <img src={person.img} alt={person.name}/> */}
           <h2>{person.name}</h2>
           <h3>Age: {person.age}</h3>   
           <p><b>Bio:</b> {person.bio}</p>
           {toggle?(<h3>{person.email}</h3>) : (<button className="contactBtn" onClick={handleToggle}>contact</button>)}
           </div>
           {/* <button id="delete" onClick={removePerson}>DELETE</button> */}
           {toggle2? (
            <div className="showForm">
           <form className="showForm" onSubmit={handleSubmit}> 
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
                  <div className="btn">
                <input className="submitBtn" type="submit" value="SUBMIT" />
                <button className="delBtn" onClick={removePerson}>DELETE</button>
                </div>  
            </form>
            </div>
             ) : (<button onClick={handleToggle2}>EDIT</button>)}
        </div>
       
    )
}

export default Show