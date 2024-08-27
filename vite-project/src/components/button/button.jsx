import { memo } from "react";
import "./button.css"

function Button({stetFormBody, deleteValueData, data , color , children }) {
    const isdeleteValueData = !!deleteValueData
    const isStetFormBody = !!stetFormBody
    console.log("TEST2");
    
    const primaryClass = `button ${color ?? ""}` 
    if (isdeleteValueData) {
        return <button onClick={(e)=>{deleteValueData(data.id)}} className={primaryClass}>{children}</button>; 
    }

    if (isStetFormBody) {
        return <button onClick={(e)=>{stetFormBody((prev)=>{!prev})}} className={primaryClass}>{children}</button>;
    }
    

    return <button className={primaryClass}>{children}</button>; 
}

export default Button;
