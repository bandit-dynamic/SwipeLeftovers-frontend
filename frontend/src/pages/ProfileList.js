import { Link } from "react-router-dom"


const ProfileList = (props)=>{
    const loaded = () =>{ 
    
    return(
        <container>
       { props.profile.map((person) =>{ 
        return( 
        <div key={person._id} className="people">
          <img src={person.image} alt={person.name}/>
          <div key={person._id}> 
          <Link className="linkH1" to={`/profile/${person._id}`}><h1>{person.name},<span>&nbsp;&nbsp;</span>{person.age}</h1></Link>
        {/* <h3>Age: </h3>    */}
        {/* <p>{person.bio}</p> */}
        {/* <h3>{person.email}</h3> */}
        </div>
        </div>
        )})}
        </container>
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