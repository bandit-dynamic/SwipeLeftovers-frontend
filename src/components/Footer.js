import { Link } from "react-router-dom"

const Footer = ()=>{
    return(
        <div className="footer">
               <div className='logoSlogan2'> 
        <img class='logo3' src="https://i.imgur.com/Qaotw9A.png" alt="logo" />
             <p>@2023 SwipeLeftovers. All rights reserved</p>
        </div>     
          
            <div className="ghImg">  
            <p>contact us</p>   
            <Link to="https://github.com/Jojozhou0715"><img className="gitHub" src="https://avatars.githubusercontent.com/u/92937414?v=4"/></Link>
             <Link to="https://github.com/Hellosu3"><img className="gitHub" src="https://avatars.githubusercontent.com/u/119162007?v=4"/></Link>
            <Link to="https://github.com/bandit-dynamic"><img className="gitHub" src="https://avatars.githubusercontent.com/u/116988743?v=4"/></Link>          
            <Link to="https://github.com/krezman"><img className="gitHub" src="https://avatars.githubusercontent.com/u/119069145?v=4"/></Link>
            </div>
        </div>
    )
}

export default Footer