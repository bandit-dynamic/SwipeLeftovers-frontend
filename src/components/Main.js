import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Form from "../pages/Form"
import Show from "../pages/Show"
import ProfileList from "../pages/ProfileList"
import Login from "../pages/UserAuth"
import About from "../pages/About"
import Landing from "../pages/Landing"
import { Cookies } from "react-cookie"
const cookies = new Cookies()


const Main = (props) => {
    const token = cookies.get("TOKEN")
    console.log(token)


    const [ profile, setProfile ] = useState(null)
    const URI = `${process.env.REACT_APP_API_URI}`
    

    const getProfile = async () => {
        const response = await fetch(URI)
        const data = await response.json()
        setProfile(data.data)
        console.log(data.data)
    }

    const createProfile = async (person) =>{
        await fetch(`${URI}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),          
        })
        getProfile()
    }

    const updateProfile = async (person, id) =>{
        await fetch(URI + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        })
        getProfile()
    }

    const deleteProfile = async (id) =>{
        await fetch(URI + id, {
            method: "DELETE",
        })
        getProfile()
    }

    useEffect(() => {
        getProfile()
      }, []);



    //   let routes; //setting up routes variable


    //   if(isLoggedIn) {
    //     //authenticated routes here
    //     routes = (
    //       <Routes>
    //         <Route path="/profile/:id" element={<Show 
    //          profile={profile}
    //          updateProfile={updateProfile}
    //          deleteProfile={deleteProfile}/>}/>    
    //       <Route path="/profile/all" element={<ProfileList profile={profile}
    //         updateProfile={updateProfile}
    //         deleteProfile={deleteProfile}/>}/>
    //       </Routes>
    //     )
    //   } else {
    //     //unauthenticated routes
    //     routes = (
    //       <Routes>
    //         <Route path="/profile/register" element={<Form avatarImage={true}
    //                 center
    //                 initialState="https://i.ibb.co/2dtXpf2/blank-avatar.webp" profile={profile} createProfile={createProfile}/>}/>
    //         <Route path="/profile/login" element={<Login />}/>
    //         <Route path="/about" element={<About />} />
    //         <Route path="/" element={<Landing />}/> 

    //       </Routes>
    //     )
    //   }

        return (
            <main>
              {/* <AuthContext.Provider 
                value={{
                  isLoggedIn: !!tokenState,
                  token: tokenState,
                  login: login,
                  logout: logout,
                  userId: userId,
                }}
              >
                  {routes} */}
            
                <Routes>
                    <Route path="/profile/register" element={<Form avatarImage={true}
                    center
                    initialState="https://i.ibb.co/2dtXpf2/blank-avatar.webp" profile={profile} createProfile={createProfile}/>}/>


                    <Route path="/profile/:id" element={<Show 
                            profile={profile}
                            updateProfile={updateProfile}
                            deleteProfile={deleteProfile}/>}/>    
                    <Route path="/profile/all" element={<ProfileList profile={profile}
                            updateProfile={updateProfile}
                            deleteProfile={deleteProfile}/>}/>

                    {/* <Route path="/profile/login" element={<Login
                    isLoggedIn={ isLoggedIn }
                    handleSubmit={() => setIsLoggedIn(true)}
                     />}/>    */}
                    <Route path="/about" element={<About />} />

                    <Route path="/profile/login" element={<Login />}/>  
                    {/* <Route path="/" element={<Landing />}/>    */}
                    <Route path="/" element={<Landing />}/> 

                  </Routes>
              {/* </AuthContext.Provider> */}
            </main>
        )
}

export default Main