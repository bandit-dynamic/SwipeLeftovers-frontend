import { useState, useEffect} from "react"
import { Link, useNavigate} from "react-router-dom"
import Header from "../components/Header"
import "../components/ImageUploader.css"

const Form = (props) => {
    const navigate = useNavigate()
    const [ newForm, setNewform ] = useState({
        name: "",
        image: "",
        age: "",
        bio: "",
        email: "",
        password: "",
        
    })

    //----------------imageupload state 💎
    const initialState = props.initialState; //initialState is just blank-avatar hosted on ibb
    const [imageState, setImageState] = useState(); //state and state-setter for image
    const [previewUrl, setPreviewUrl] = useState(() => initialState); //state and state-setter for img preview src url
    const [imgUrl, setImgUrl] = useState("")
        //----------------imageupload state💎

    //----------------imageupload 💎
    useEffect(() => {
      if (!imageState) {
        return;
      }
      const fileReader = new FileReader(); //lets us read files on the pc
  
      //As soon as it's done loading the file, set the preview img src url state to the result
      fileReader.onload = () => {
          console.log(fileReader.result)
        setPreviewUrl(fileReader.result); //setting src to result.
      };
  
      console.log("inside useeffect");
      fileReader.readAsDataURL(imageState);
    }, [imageState]);
  
    //selected image handler
    const onChangeImageHandler = (event) => {
      const filesArray = event.target.files;
      let imageFile;
      if (filesArray && filesArray.length === 1) {
        imageFile = filesArray[0];
        console.log("inside onChangeImageHandler");
        console.log(imageFile);
        setImageState(() => imageFile);
      }
    };
  
    const onHandleSubmit = (e) => {
      e.preventDefault();
  
      console.log("submitting image");

  
      const postdata = JSON.stringify({
        base64string: previewUrl.split("base64,")[1],
      });
  
      const url = "http://localhost:4000/imageupload";
  
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log("eventlistener thingyyyyyyyyyy");
          console.log(JSON.parse(this.responseText));
          const userImg = JSON.parse(this.responseText).image
          console.log(userImg)
          setImgUrl(userImg);
          setNewform({...newForm, image: userImg});
        }
      });
  
      xhr.open("POST", url, true);
  
      xhr.setRequestHeader("content-type", "application/json");
  
      xhr.onload = function () {
        console.log("onload thing happened!!!!!!!!!!");
      };
      xhr.send(postdata);
    };

    //----------------imageupload 💎

const handleChange = (event) =>{
    setNewform({...newForm, [event.target.name]: event.target.value})
}    

const handleSubmit = (event) =>{
    event.preventDefault()
    props.createProfile(newForm)
    navigate('/profile/all')
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
          {/* <img className='logo1' src="https://i.imgur.com/Qaotw9A.png" alt="logo" /> */}
        <div className="header">
          <p className="registerH3">Create your profile</p>
          </div>
            <form onSubmit={handleSubmit} className="formContainer" id="form" encType="multipart/form-data">
              <div className="registerForm">
                <input 
                required
                  className="registerInput"
                  type="text"
                  value={newForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  />
                {/* <input  
                  className="registerInput"
                  type="text"
                  value={newForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
                  /> */}
                <input 
                required
                  className="registerInput"
                  type="text"
                  value={newForm.age}
                  name="age"
                  placeholder="age"
                  onChange={handleChange}
                  />
                <input
                required
                  className="registerInput"
                  type="text"
                  value={newForm.email}
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  />        
                <input
                required
                  className="registerInput"
                  type="text"
                  value={newForm.bio}
                  name="bio"
                  placeholder="bio"
                  onChange={handleChange}
                  />
                 <input
                 required
                  className="registerInput"
                  type="text"
                  value={newForm.password}
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  />


                  //--------------image upload ⭐
                  <input
                  id="imageUpload"
                  type="file" 
                  multiple
                  accept=".jpg, .png, .jpeg"
                  onChange={(e) => onChangeImageHandler(e)}
                  />

                <input 
                hidden
                name="image"
                value={imgUrl}
                />

                <div id="prev"></div>
                <div className={`image-upload ${props.center && "center"}`}>
                  <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="preview" />}
                    {!previewUrl && <p>please pick an image</p>}
                  </div>
                </div>

                <button onClick={(e) => onHandleSubmit(e)}>SUBMIT</button>
                  //---------------image upload ⭐

                  </div>
                  
                  <div className="registerInput">
                {/* <input className="signUp" type="submit" value="SignUp" /> */}
              
                <button className="signUp" type="submit" >SIGNUP</button>
                </div>
                <p className="registerP"><span className="spanP">Already create your profile?</span> <Link className="loginLink" to="/profile/login">Log in</Link></p> 
            </form> 
            </div>
            <div className="leftContainer">
        <img className="signupImg" src="https://assets3.thrillist.com/v1/image/1706913/1584x1056/crop;jpeg_quality=60;progressive.jpg" alt="" />
           </div>            
        </section>
        </>
    )
}

export default Form
