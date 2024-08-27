
import "./input.css"

function Input ({ variant , ...props }) {

    const isDataType = variant === "data" ? "date" : null 
    return (
        <input type= {isDataType ?? "text"}
        {...props} 
        />
    ) 
}

export default Input