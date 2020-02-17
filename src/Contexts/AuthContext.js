import React ,{createContext, useReducer, useState, useEffect} from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    console.log('this is reducer', state, action)
    switch (action.type) {
      case 'setAuth':
        return [...state,action.payload]
      case 'unSetAuth':
        return [];
        case 'getAuth':
        return init();
      default:
        return state;
    }
  } 

 const initial = AsyncStorage.getItem('authData').then(localData=>{
    console.log('this is local data', localData)
    return localData?[JSON.stringify(localData)]:[]
})
  

const AuthContextProvider =  (props) => {
    // const [auth, dispatch] = useReducer(authReducer, [])
    const [auth, dispatch]=  useReducer(authReducer,[])
    
    // const addAuth=(authData)=>{
    //     setAuth([{id:authData.id, email:authData.email, auth_token:authData.auth_token}],()=>{
    //         AsyncStorage.setItem('authData', JSON.stringify(auth))
    //     })
    // }

    // const unSetAuth=()=>{
    //     setAuth([])
    // }
    return (  
        <AuthContext.Provider value={{auth, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;