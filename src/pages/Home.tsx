import { FormEvent, useState } from 'react'
import styles from '../styles/Home.module.scss'

import { getDatabase, ref, set } from "firebase/database";

export function Home(){
  const [ name, setName] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ email, setEmail ] = useState('')

  //Gerar hash
  function getHash(){
    return Math.floor(Math.random()*3123312)
  }

  //Cadastrar pessoa
  function handlerSubmit(event: FormEvent) {
    event.preventDefault()

    writeUserData()
  }

  //Salvar dado no bd
  function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'users/' + getHash()), {
      name,
      surname,
      phoneNumber,
      email
    });
  }
  

  return(
    <div className={styles.container}>

        <form className={styles.create} onSubmit={handlerSubmit}>
          <div className={styles.dName}>
            <input 
              type="text"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={e => {setName(e.target.value)}}
            />
            <input
              type="text"
              id="sobrenome"
              placeholder="Sobrenome"
              value={surname}
              onChange={e => {setSurname(e.target.value)}}
            />
          </div>

          <input 
            type="number"
            id="numero"
            placeholder="Num. Telefone"
            value={phoneNumber}
            onChange={e => {setPhoneNumber(e.target.value)}}
          />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
          />

          <button type="submit">Cadastrar</button>
        </form>

        
    </div>
  )
}