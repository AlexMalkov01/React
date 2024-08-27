import "./jurnal-item.css"
const JurnalItem = (props) => {
    const { data } = props 
    const resFormatData = data.data.split("-")
    const [one,two,three] = resFormatData
    const res = [three , two, one].join(".") 

    return (
        <>
            <h2 className="jurnal_item__title">{data.title}</h2>
            <div className="jurnal_item__wrapper">
                <span className="jurnal_item__data">{res}</span>
                <p className="jurnal_item__text">{data.content}</p>
            </div>
        </>
    )
}

export default JurnalItem