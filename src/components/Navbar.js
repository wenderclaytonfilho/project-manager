import styles from './Navbar.module.css'

function Navbar(){

    return(
        <div className={styles.navbar}>
            <h1>Faça login para continuar</h1>
            <button>Login</button>
        </div>
    )
}

export default Navbar