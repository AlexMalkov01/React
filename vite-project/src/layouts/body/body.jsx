import "./body.css"
import { UserContext } from "../../context/user_context"
import { useContext } from "react"


function Body ( {children} ) {

    return (
       <div className="body"> 
       {/* { userID } */}
        {children}
       </div>
    )
}

export default Body