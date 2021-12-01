//React e Hook externos
// import { useEffect, useState } from "react"

//Database
import { database } from '../services/firebase';

//Tipos
// type FirebaseUsers = Record<string, {
//   email: string,
//   name: string,
//   surname: string,
//   phoneNumber: number
// }>

type UsersType = {
  id: string,
  name: {
    first: string,
    last: string,
  },
  email: string,
  phoneNumber: number
}

//Hook
export async function useUsers(){
  // const [ users, setUsers ] = useState<UsersType[]>([])
  const users:UsersType[] = [];

  getUsersBD()
  
  async function getUsersBD(){
    database.collection("cities").doc("SF")
    .onSnapshot((doc) => {
        const user = {
        id: doc.id,
        name: {
          first: doc.data().name.first,
          last: doc.data().name.last,
        },
        email: doc.data().email,
        phoneNumber: doc.data().phoneNumber,
        }
        users.push(user)
    });
  }

  return users;
}