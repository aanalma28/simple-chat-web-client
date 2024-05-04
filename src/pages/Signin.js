import styles from '../style/Register.module.css'
import { useEffect } from 'react'

const Signin = () => {
    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode')
        const container = document.getElementById('container')        
        const wrapper = document.getElementById('wrapper')        
        const text = document.getElementById('text')
        const inputs = document.querySelectorAll('#input')

        if(darkMode === 'enabled'){
            container.style.backgroundColor = '#1f1f1f'
            wrapper.style.backgroundColor = '#383838'
            wrapper.style.boxShadow = '0px 0px 50px rgba(170, 170, 170, 0.1)'      
            text.style.color = 'white'
            inputs.forEach((input) => {
                input.style.backgroundColor = '#303030'
                input.style.border = 'none'
                input.style.color = 'white'                
            })
            
        }else{
            container.style.backgroundColor = 'white'
            wrapper.style.backgroundColor = 'white'
            text.style.color = 'black'
            inputs.forEach((input) => {
                input.style.backgroundColor = 'white'
                input.style.color = 'black'
            })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hello")
    }

    return (
        <div className={styles.container} id="container">
            <div className={styles.wrapper} id="wrapper">                
                <h3 className={styles.title} id="text">Simple Chat Web Sign In</h3>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>                        
                        <input id="input" className={styles.input}  type='email' name='email' placeholder='Input Email' required></input>
                        <input id="input" className={styles.input} type='password' name='password' placeholder='Input Password' required></input>
                        <button type="submit" className={styles.btn}>Register Now</button>
                        <a href='/register' className={styles.link}>Dont have an account? Register here</a>
                    </form>
                </div>
            </div>
        </div>                        
    )
}

export default Signin