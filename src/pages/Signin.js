import styles from '../style/Register.module.css'

const Signin = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hello")
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>                
                <h3 className={styles.title}>Simple Chat Web Sign In</h3>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>                        
                        <input className={styles.input}  type='email' id='email' name='email' placeholder='Input Email' required></input>
                        <input className={styles.input} type='password' id='password' name='password' placeholder='Input Password' required></input>
                        <button type="submit" className={styles.btn}>Register Now</button>
                        <a href='/register' className={styles.link}>Dont have an account? Register here</a>
                    </form>
                </div>
            </div>
        </div>                        
    )
}

export default Signin