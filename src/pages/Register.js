import styles from '../style/Register.module.css'

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hello")
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>                
                <h3 className={styles.title}>Simple Chat Web Register</h3>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} type='username' id='username' name='username' placeholder='Input Username' required></input>
                        <input className={styles.input}  type='email' id='email' name='email' placeholder='Input Email' required></input>
                        <input className={styles.input} type='password' id='password' name='password' placeholder='Input Password' required></input>
                        <button type="submit" className={styles.btn}>Register Now</button>
                        <a href='/signin' className={styles.link}>Already have an account? Sign in here.</a>
                    </form>
                </div>
            </div>
        </div>                        
    )
}

export default Register