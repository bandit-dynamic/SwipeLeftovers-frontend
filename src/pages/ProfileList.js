import { Link } from "react-router-dom"
import NewHeader from "../components/NewHeader"

const ProfileList = (props)=>{
    const loaded = () =>{ 
    
    return(
        <main className="indexMain">
         <NewHeader />
        <div className="indexContainer">
       { props.profile.map((person) =>{ 
        return( 
        <div key={person._id} className="people">
          <img className="peopleImg" src={person.image[0]} alt={person.name}/>
          <div key={person._id}> 
          <Link className="linkH1" to={`/profile/${person._id}`}><h1 className="name">{person.name},<span>&nbsp;&nbsp;</span>{person.age}</h1></Link>
        {/* <h3>Age: </h3>    */}
        {/* <p>{person.bio}</p> */}
        {/* <h3>{person.email}</h3> */}
        </div>
        </div>
        )})}
        </div>
        </main>
    )
}

const loading = () =>{
    return <h1>Loading...</h1>
}

return(
    <>
      {props.profile ? loaded() : loading()}
      </>
)
}

export default ProfileList