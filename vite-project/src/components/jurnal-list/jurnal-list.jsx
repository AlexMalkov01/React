import "./jurnal-list.css"
import JurnalItem from "../jurnal-item/jurnal-item";
import CurdButton from "../curd-button/curd-button"; 
import { useContext , useMemo } from "react";
import { UserContext } from "../../context/user_context";


function JurnalList ({ jurnalButton,data, isData, children}) { 
    const {userID} = useContext(UserContext) 
    console.log(userID);
    const filteredAndMappedData = useMemo(() => 
        data.filter(el => el.userID === userID).map(el => (
          <CurdButton data={el} jurnalButton={jurnalButton} key={el.id}>
            <JurnalItem data={el} />
          </CurdButton>
        )),
        [data, userID, jurnalButton] )

    if (isData) {
        return ( 
            <>
            <div className="jurnal-list">
            {  filteredAndMappedData } 
            </div>
            </>
        )
    } 

    return (
        <span>Нет данных</span>
    )
    
}

export default JurnalList