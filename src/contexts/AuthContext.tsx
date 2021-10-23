//react
import { createContext, ReactNode, useEffect, useState } from "react"

//Firebase
import { firebase, auth } from "../services/firebase"

//Tipos
type User = {
  id: string;
  name: string;
  phoneNumber: string | null;
  avatar: string;
  providerId: string;
}

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
  const [user, setUser] = useState<User>();

  useEffect(() => { //Indentifica o usuário logado
    const unsubscribe = auth.onAuthStateChanged( user => {

      if(user){
        
        const { displayName, photoURL, uid, phoneNumber, providerId} = user;
  
        if(!displayName || !photoURL){
          throw new Error('Missing information from Google Account.')
        }
        
        setUser({
          id: uid,
          name: displayName,
          phoneNumber: phoneNumber,
          avatar: photoURL,
          providerId
        });
      }
    })
    return () => {
     unsubscribe() 
    }
  }, [])

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

