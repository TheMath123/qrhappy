//react
import { createContext, ReactNode, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

//Firebase
import { firebase, auth } from "../services/firebase"

//Tipos
type User = firebase.User

type AuthContextType = {
  user: User | undefined;
  authLogout: () => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

//Contexto
export const AuthContext = createContext({} as AuthContextType)

//Provider
export function AuthContextProvider(props: AuthContextProviderProps){
  const [user, setUser] = useState<firebase.User>();
  const history = useHistory()

  useEffect(() => { //Identifica o usuário logado
    auth.onAuthStateChanged( user => {
      console.log(user)

      if(user){
      
        // const { displayName, photoURL, uid, phoneNumber, providerId} = user;
  
        // if(!displayName || !photoURL){
        //   throw new Error('Missing information from Google Account.')
        // }
        
        setUser(user);
        
        history.push('/home') //Caso o usuário estiver logado pula a tela de login.
      }else{
        history.push('/') //Caso não estiver logado, retorna o usuário para tela de login.
      }
    })

  }, [history])

  function authLogout(){
    firebase.auth().signOut()
  }

  return(
    <AuthContext.Provider 
    value={{
      user,
      authLogout,
    }}
  >
    { props.children }
  </AuthContext.Provider>
  )
}

