import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


const Main = (props) => {
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
            body: JSON.stringify(person)
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

    return (
        <main>
            <Routes>
                <Route path="/" element={<Index profile={profile} createProfile={createProfile}/>}/>
                <Route path="/profile/:id" element={<Show 
                         profile={profile}
                         updateProfile={updateProfile}
                         deleteProfile={deleteProfile}/>}/>               
            </Routes>
        </main>
    )
}

export default Main
