import styles from "./jurnal-form.module.css"
import classNames from "classnames"
import Button from "../button/button"
import Input from '../input/input';
import React , { useEffect, useReducer, useRef , useContext} from "react"
import { DATA_REDUCER } from "./jurna-form" 
import { reducer } from "./jurna-form" 
import { UserContext } from "../../context/user_context";

function JurnalForm ({stetFormBody,deleteValueData, data, renderForm , onClick }) { 
    const setData = onClick 
    const isData = !!data;
    const [state , dispatch] = useReducer( reducer ,DATA_REDUCER);
    const renderInput = Object.keys(state.values).filter(el=> el!=="post") 
    const titleRef = useRef(null)
    const dateRef = useRef(null)
    const contentRef = useRef(null)
    const postRef = useRef(null)
    const { userID } = useContext(UserContext) 
    
    function resRef () {
        switch(true) {
            case !state.isValue.title:
              titleRef.current.focus()
                break;
            case !state.isValue.data:
                dateRef.current.focus()
                break
            case !state.isValue.content: 
                contentRef.current.focus()
                break
            case !state.isValue.post:
                postRef.current.focus()
                break 
            default :
            break
        }
    }

    useEffect(()=>{
        dispatch({type:"RESTART" ,payloud:DATA_REDUCER })  
    },[isData]);
    console.log("RENDER");
    
    useEffect(()=>{  
        if (isData)return;
        if (state.isFormData) {
            setData(state.values);
            renderForm(true) 
            return
        }  
        resRef() 
            const resID = setTimeout(()=>{dispatch({type:"RESTART_CASE_INPUT"})},2000); 
       return (()=>{ 
        clearTimeout(resID)
       })

        },[state.isFormData , state.acthinInput]); 

        function chengeValue(e) { 
            const key = e.target.name 
            const value = e.target.value  
            dispatch({type:"SET_VVALUES" , payloud:{[key] :value}}) 
        } 

        function onSubmitForm (e) {
            e.preventDefault()
            dispatch({type:"GET_VALUE", payloud:userID})
        } 

    return (
        <>
        <form onSubmit={isData ? (e)=>{e.preventDefault()}: onSubmitForm} className={styles["jurnal-form"]}>
            <input
            ref={titleRef}
            onChange={chengeValue} 
            className={classNames(styles.title,{
                [styles.invalid]: !state.isValue.title
            })} 
            value={isData ? data.title : state.values.title} 
            type="text" name="title" 
            disabled={ isData}
            placeholder="Введите название" 
            autoComplete="off"/>
            <label htmlFor="data">
                <img src="../src/assets/Calendar.svg" alt="" />
            Дата:
            <input 
             id="data" onChange={chengeValue} 
             ref={dateRef}
            className={ isData ? styles.data : classNames(styles.data,{
                [styles.invalid]: !state.isValue.data
            })}  
            value={isData ? data.data : state.values.data} 
            type="date" name="data" 
            disabled={isData}
            autoComplete="off"/>
            </label> 
            <label htmlFor="content">
            <img src="../src/assets/Tag.svg" alt="" />
                Метка:
            <input id="content" onChange={chengeValue} 
            ref={contentRef}
            className={isData? styles.content: classNames(styles.content,{
                [styles.invalid]: !state.isValue.content
            })}  
            value={isData ? data.content : state.values.content} 
            type="text" name="content"
            placeholder="Введите о чем" 
            disabled={ isData }
            autoComplete="off"/>
            </label>
            <textarea onChange={chengeValue} 
            ref={postRef}
            className={isData ? styles.post : classNames("",{
                [styles.invalid]: !state.isValue.post
            })}   
            value= {isData ? data.post : state.values.post} 
            name="post" 
            id="" 
            placeholder="Введите текст"
            disabled={isData}
            autoComplete="off"> 
            </textarea>
            { isData && (
            <div className={styles["wrapper-btn_form"]}>
            < Button stetFormBody={stetFormBody} data={data} >
                Выйти
            </Button>
            <Button deleteValueData={deleteValueData} data={data} color="primaryButton">
                Удалить
            </Button> 
            </div> )} 
            
            { !isData &&(
            <Button >
                Отправить
            </Button> 
            )
        }
        </form> 
        {/* {renderInput.map((el,idx)=>
            <Input 
            onChange={chengeValue}
            key={idx}
            className={ classNames(styles[el],{
                [styles.invalid]: !state.isValue[el]
            })}
            variant={el}
            value={isData ? data[el] : state.values[el]}
            name={el} 
            disabled={isData}
            placeholder="Введите название" 
            autoComplete="off" 
            /> 
        )} */}
        </>
    )
}

export default JurnalForm