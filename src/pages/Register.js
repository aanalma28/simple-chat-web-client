import styles from '../style/Register.module.css'
import { useState } from 'react'

const Register = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)

        try{
            const res = await fetch('http://localhot:3030/register', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })

            const json = await res.json()
            console.log(json)
            
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>                
                <h3 className={styles.title}>Simple Chat Web Register</h3>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} onChange={(e) => setData({...data, username: e.target.value})} type='username' id='username' name='username' placeholder='Input Username' required></input>
                        <input className={styles.input}  onChange={(e) => setData({...data, email: e.target.value})} type='email' id='email' name='email' placeholder='Input Email' required></input>
                        <input className={styles.input} onChange={(e) => setData({...data, password: e.target.value})} type='password' id='password' name='password' placeholder='Input Password' required></input>
                        <button type="submit" className={styles.btn}>Register Now</button>
                        <a href='/signin' className={styles.link}>Already have an account? Sign in here.</a>
                    </form>
                </div>
            </div>
        </div>                        
    )
}

export default Register