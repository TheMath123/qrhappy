import { SignIn } from '../components/SignIn'
import styles from '../styles/Login.module.scss'


export function Login(){

  return(
    <div className={styles.container}>
      <h2>Faça login:</h2>
      <SignIn />
    </div>
  )
}