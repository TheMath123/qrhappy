//React e Hook externos
import { useEffect, useState } from "react"

//Database
import { database } from '../services/firebase';

//Tipos
type FirebaseUsers = Record<string, {
  email: string,
  name: string,
  surname: string,
  phoneNumber: number
}>

type UsersType = {
  id: string,
  email: string,
  name: string,
  surname: string,
  phoneNumber: number
}

//Hook
export function useUsers(){
  const [ users, setUsers ] = useState<UsersType[]>([])

  useEffect(()=>{
    const usersRef = database.ref('users/')

    usersRef.on('value', room => { //Fica escutando alterações no banco de dados
      const databaseUsers = room.val();
      const firebaseUsers: FirebaseUsers = databaseUsers ?? {};


      const parseUsers = Object.entries(firebaseUsers).map(([key, value]) => { //Converte o objeto em array
        return {
          id: key,
          name: value.name,
          surname: value.surname,
          email: value.email,
          phoneNumber: value.phoneNumber
        }
      })

      setUsers(parseUsers)
    })

    return () => {
      usersRef.off('value')
    }
  },[])

  return { users };
}