import "./user_select.css"
import { useContext} from "react"
import { UserContext } from "../../context/user_context"

function UserSelect () {
    const { setUserID } = useContext(UserContext) 
    const getValue = (e) => setUserID(Number(e.target.value)) 
    return (
        <select onChange={getValue} name="" id="">
            <option value="1">Alex</option>
            <option value="2">Nastya</option>
        </select> 
    ) 
}

export default UserSelect