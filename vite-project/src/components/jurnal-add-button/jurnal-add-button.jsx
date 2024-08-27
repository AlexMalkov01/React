import "./jurnal-add-button.css"
import CurdButton from "../curd-button/curd-button"
import JurnalForm from "../jurnal-form/jurnal-form"


function JurnalAddButton ({color ,onClick}) {

    
    return (
     <>
     <CurdButton onClick={onClick} color={color} className="add_button">
        + Новое вопспоминание 
     </CurdButton>
     </>
    )
} 


export default JurnalAddButton