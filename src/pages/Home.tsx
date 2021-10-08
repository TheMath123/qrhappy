import styles from '../styles/Home.module.scss'

export function Home(){

  function handlerSubmit() {
    console.log('Hello world')
  }

  return(
    <div className={styles.container}>

        <form className={styles.create} onSubmit={handlerSubmit}>
          <div className={styles.dName}>
            <input type="text" id="name" placeholder="Nome" />
            <input type="text" id="sobrenome" placeholder="Sobrenome" />
          </div>

          <input type="number" id="numero" placeholder="Num. Telefone"/>
          <input type="text" id="email" placeholder="E-mail" />

          <button type="submit">Cadastrar</button>
        </form>

        
    </div>
  )
}