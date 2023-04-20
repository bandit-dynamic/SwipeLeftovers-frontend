import { Link } from "react-router-dom"
import Header from "../components/Header"


const Landing = ()=>{
    return(
       <>
        <Header /> 
        <section>
        <div className="landLeft">
        {/* <img className="landImg" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2M1Yjc3OTY3NjU3ZjBlYjFjYTJjN2JjYTAxZWE1MTBhYTg2NjE1YyZjdD1n/l44Qs8YkYSH4uVtWE/giphy.gif" alt="" /> */}
           {/* <img className="landImg" src="https://assets3.thrillist.com/v1/image/2296546/1584x1054/crop;jpeg_quality=60.jpg" alt="" /> */}
           {/* <img className="landImg" src="https://media4.giphy.com/media/1daIjZDdkHPmflXUEj/giphy.gif?cid=ecf05e47vyyyztu5rcpj7rfbn5vp3yiqu6hswta2fhgvuxi3&rid=giphy.gif&ct=g"/> */}
           <img className="landImg" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzkzZmEzOWQ2ZDY2NjViMjBkYTk1MWQ2OWEzMmRjNDhhZGE0Nzg2OCZjdD1n/3o7TKLqFDsjgWlT2O4/giphy.gif"/>
        </div>
        <div className="landRight">
           <h1 className="land">About</h1>
           <button><Link to="/profile/login">Log in</Link></button>
           <button><Link to="/profile/register">Sign up</Link></button>
        </div> 
         </section>
        </>
    )
}

export default Landing