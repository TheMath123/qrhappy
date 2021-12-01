import { FormEvent, useState } from 'react';
import styles from '../styles/Home.module.scss';

import { database } from '../services/firebase';
import { useUsers } from '../hooks/useUsers';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import imgDefaultAvatar from '../assets/avatar.svg'

export function Home(){
  const history = useHistory() //Reedicionamento de pages

  const [ name, setName] = useState('')
  const [ surname, setSurname ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ email, setEmail ] = useState('')

  const { user : userLogged, authLogout } = useAuth()

  const users = useUsers()
  console.log(users)

  //Chamado para deslogar da conta
  function logout(){
    authLogout()
    history.push('/')
  }

  //Cadastrar pessoa
  function handlerSubmit(event: FormEvent) {
    event.preventDefault()

    writeUserData()
  }

  //Salvar dado no bd
  async function writeUserData() {
    await database.collection("users").add({
      name: {
        first: name,
        last: surname,
      },
      phoneNumber,
      email, 
    })

    
  }

  //Definir o avatar da conta 
  function getImg(){

    if(userLogged?.photoURL !== null){
      return userLogged?.photoURL
    }

    return imgDefaultAvatar
  }

  //Pagina home
  return(
    <div className={styles.container}>

      <div className={styles.boxUserInfo}>
        <img src={getImg()} alt="Imagem avatar"/>
        <span>{userLogged?.displayName ? userLogged?.displayName : userLogged?.phoneNumber}</span>
        <button onClick={logout}>Sair</button>
      </div>

      <form className={styles.boxCreate} onSubmit={handlerSubmit}>
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

      <div className={styles.regularBox}>
        <h2>Lista de usuário:</h2>
        <div className={styles.list}>
          {/* { users.map(user => {
            return(
              <li key={user.id}>
                <div>
                  <span>{user.name} </span>
                  <span>{user.surname}</span>
                </div>
                <p>{user.email}</p>
                <p>{user.phoneNumber}</p>
              </li>
            )
          })} */}
        </div>
      </div>
      
    </div>
  )
}