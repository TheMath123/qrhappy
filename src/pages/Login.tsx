import { SignIn } from '../components/SignIn'
import styles from '../styles/Login.module.scss'


export function Login(){

  return(
    <div className={styles.container}>
      <SignIn />
    </div>
  )
}