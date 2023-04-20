import { useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PublishIcon from '@mui/icons-material/Publish';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NewHeader from "../components/NewHeader";

const Show = (props) => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const profile = props.profile
    const person = profile.find((p) => p._id === id)
    console.log(person.image)

    const [editForm, setEditForm] = useState(person)

    const handleChange = (event) =>{
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.updateProfile(editForm, person._id)
        navigate('/profile/all')
    }

    const removePerson = (event) =>{
        event.preventDefault()
        props.deleteProfile(person._id)
        navigate('/profile/all')
    }

    const handleToggle = () =>{
      setToggle(!toggle)
    }
    const handleToggle2 = () =>{
      setToggle2(!toggle2)
    }

    return (
      <>
      <NewHeader />
      <section>
        {/* <div className="person"> */}
          <div className="detail">
            <button className="backBtn" onClick={handleSubmit}><ArrowBackIosIcon fontSize="large"/></button>
              <div class="slideshow-container">
            <Carousel> 
          {person.image.map((img, index )=>(   
             <Carousel.Item>
          <div key={index}>
             <img className="personImg" src={img} alt={person.name}/>
               </div>
              </Carousel.Item>
           ))} 
           </Carousel>
           </div> 
           <div className="showInfo">
           <h2 className="personName">{person.name}</h2>
           <h3 className="personAge">Age: {person.age}</h3>   
           <p className="personP"><b>Bio:</b> {person.bio}</p>
           {toggle?(<h3 className="email">{person.email}</h3>) : (<button className="contactBtn" onClick={handleToggle}><MailOutlineIcon /></button>)}
           </div>
           </div>
           {/* <button id="delete" onClick={removePerson}>DELETE</button> */}
           {toggle2? (
            <div className="showForm">
           <form className="showForm" onSubmit={handleSubmit}> 
                <input 
                  className="showIndex"
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  />
                <input 
                  className="showIndex"
                  type="text"
                  value={editForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                  />
                <input 
                  className="showIndex"
                  type="text"
                  value={editForm.age}
                  name="age"
                  placeholder="age"
                  onChange={handleChange}
                  />
                <input
                  className="showIndex"
                  type="text"
                  value={editForm.email}
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  />
                <input
                  className="showIndex"
                  type="text"
                  value={editForm.bio}
                  name="bio"
                  placeholder="bio"
                  onChange={handleChange}
                  />
                  <div className="btn">
                {/* <input className="submitBtn" type="submit" value="SUBMIT" /> */}
                <button className="submitBtn" type="submit"><PublishIcon /></button>
                <button className="delBtn" onClick={removePerson}><DeleteForeverIcon /></button>
                </div>  
            </form>
            </div>
             ) : (<button className="editBtn" onClick={handleToggle2}><BorderColorIcon /></button>)}
        {/* </div> */}
       </section>
       </>
    )
}

export default Show