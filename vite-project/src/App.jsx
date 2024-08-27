import './App.css'
import Button from './components/button/button'
import CurdButton from './components/curd-button/curd-button'
import JurnalItem from './components/jurnal-item/jurnal-item'
import JurnalAddButton from './components/jurnal-add-button/jurnal-add-button'
import JurnalList from './components/jurnal-list/jurnal-list'
import LeftPanel from './layouts/left-panel'
import Body from './layouts/body/body'
import { useContext, useEffect, useState } from 'react'
import JurnalForm from './components/jurnal-form/jurnal-form'
import { useLocalStorage } from './hooks/localStige.hook'
import UserSelect from './components/user_select/user_select'
import { UserContextProvider } from './context/user_context'
import { UserContext } from './context/user_context'


const KEYSTORE = "Zametka"

function App() { 
 
  const [data , setData , delitData] = useLocalStorage (KEYSTORE) 
  const isData = !!data.length; 
  const { userID }  = useContext(UserContext) 
  const [form , stetFormBody] = useState("")

  console.log(data)
  function setValueData (arg) {
    const idData = data.length + 1 ;
    setData({ id : idData , ...arg })
  } 
 
  function deleteValueData (id) {
    delitData(id)
    stetFormBody("")
  }

  function renderForm (arg) {   
    if (arg) { 
      stetFormBody("");
      return 
    }
    stetFormBody((<JurnalForm renderForm={renderForm}  onClick={setValueData}/>))
  } 

    function jurnalButton (data) {
     stetFormBody(<JurnalForm stetFormBody={stetFormBody} deleteValueData={deleteValueData} data={data}/>)
  } 

  return (
    <>
    <UserContextProvider> 
    <LeftPanel> 
    <UserSelect/>
    <JurnalAddButton onClick={renderForm} color="primary"/>
    <JurnalList jurnalButton={jurnalButton}  data={data} isData={isData}/> 
    </LeftPanel>
    <Body>   
      {form} 
    </Body>
    </UserContextProvider>
    </>
  ) 
}

export default App
