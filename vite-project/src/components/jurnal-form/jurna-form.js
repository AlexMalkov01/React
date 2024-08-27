export const DATA_REDUCER = {
    
    values: {
        title: "",
        data: "",
        content:"",
        post: "",
        userID: null
    } ,

    isValue: {
        title: true,
        data: true,
        content:true,
        post: true
    },

    isFormData: false ,
    acthinInput: false
}


export function reducer ( state , action) {
    switch (action.type) {

    case "SET_VVALUES": 
        return {...state , 
            values: {...state.values ,
             ...action.payloud
            }
        } 
    case "GET_VALUE": 
    console.log(action.payloud);
    
        return  {
            ...state ,
            isValue: {
                title:!!state.values.title,
                data:!!state.values.data,
                content:!!state.values.content,
                post: !!state.values.post ,
            } ,
            values: {
                ...state.values ,
                userID: Number(action.payloud)
            } ,

            isFormData: true && !!state.values.title && !!state.values.data && !!state.values.content && !!state.values.post ,
            acthinInput: true
        }

    case "RESTART": 
    return {
        ...action.payloud 
    } 
    
    case "RESTART_CASE_INPUT":
        return {...state ,
            isValue: {
                title: true,
                data: true,
                content:true,
                post: true
            },
            acthinInput: false 
        }
    }

}