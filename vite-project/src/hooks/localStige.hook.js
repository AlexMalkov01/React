import { useEffect, useState } from "react";

export function useLocalStorage (key) {
    const [data, setData] = useState ([]);
    
    
    useEffect(()=>{  
        let itams = localStorage.getItem(key) 
        if (itams) {
        setData(JSON.parse(itams)) 
    }
    },[key]) 

    const saveData = (Data) => { 
        setData(prev => {
            const updatedData = [...prev, Data];
            localStorage.setItem(key, JSON.stringify(updatedData));
            return updatedData;
        }); 
    } 

    const delitData = (id) => {
        let idRed = 0;
        const newData = data.reduce((acc,obj)=>{ 
        if (obj.id === id) {
            return acc
        } 
        acc.push({
        id: idRed,
        title: obj.title,
        data: obj.data,
        content: obj.content,
        userID: obj.userID
        }) 
        idRed++ 
        return acc
        },[]);
        localStorage.setItem(key, JSON.stringify(newData));
        setData( prev => newData);
        } 

    return [data , saveData , delitData] 
} 
