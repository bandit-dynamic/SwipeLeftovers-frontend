import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../LandingButton.css'

const Landing = () => {
   return (
     <>
       <Header />
       <link href="https://fonts.googleapis.com/css?family=Kanit:900" rel="stylesheet"></link>
       <section>
         <div className="landLeft">
           <img
             className="landImg"
             src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzkzZmEzOWQ2ZDY2NjViMjBkYTk1MWQ2OWEzMmRjNDhhZGE0Nzg2OCZjdD1n/3o7TKLqFDsjgWlT2O4/giphy.gif"
           />
         </div>
         <div className="landRight">
           <p>
             <span class="quote">
               Find someone<br />
               who loves you like<br />
               Kanye loves Kanye
             </span>
           </p>
           <div className="buttons-container">
             <button id="login-btn">
               <span style={{ marginRight: "auto" }}>Have an account?</span>
               <Link to="/profile/login">Log in</Link>
             </button>
             <button id="signup-btn">
               <Link to="/profile/register">Sign up</Link>
             </button>
           </div>
         </div>
       </section>
          <Footer />
     </>
   );
 };


export default Landing