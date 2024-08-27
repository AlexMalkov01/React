import "./curd-button.css"
import JurnalItem from "../jurnal-item/jurnal-item"
import JurnalForm from "../jurnal-form/jurnal-form"


function CurdButton ( {data, jurnalButton , onClick , color, children, className }) {

    const isJurnalButton = !!jurnalButton

    const cardColor = `card_button ${ color ?? "" } ${ className ?? "" }`
    
    if (onClick) {
        return <button onClick={(e)=> onClick()} className={cardColor}> {children} </button> 
    } 

    if (isJurnalButton) {
        return <button onClick={(e)=>{jurnalButton(data)}}  className={cardColor}> {children} </button> 
    }


    return <button className={cardColor}> {children} </button> 

}




export default CurdButton
