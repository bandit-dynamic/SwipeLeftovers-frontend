import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../LandingButton.css'

const Landing = ()=>{
  return(
     <>
      <Header /> 
      <section>
      <div className="landLeft">
         <img className="landImg" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzkzZmEzOWQ2ZDY2NjViMjBkYTk1MWQ2OWEzMmRjNDhhZGE0Nzg2OCZjdD1n/3o7TKLqFDsjgWlT2O4/giphy.gif"/>
      </div>
      <div className="landRight">
         <p className="landP"> Find someone<br />who loves you like <br /><span className="kanye">Kanye </span> loves<span className="kanye"> Kanye</span> </p>
         <p className="landingP">Disclaimer: We cannot promise anyone will love you that much...</p><br/><p className="landingP2">...but we think eventually someone might</p>
         {/* <button><Link to="/about">about</Link></button> */}
        <div className="signupDiv"> 
          <p className="ppp">Ready to Swipe Leftovers</p>
          <button className="landBtn"><Link className="landSP" to="/profile/register">SIGNUP</Link></button>
        </div>
      </div> 
       </section>
       <Footer />
      </>
  )
}

export default Landing