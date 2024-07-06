import styles from '../style/Register.module.css'
import { useState, useEffect } from 'react'

const Register = () => {
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

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)

        try{
            const res = await fetch('http://localhost:3030/register', {
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
        <div className={styles.container} id="container">
            <div className={styles.wrapper} id="wrapper">                
                <h3 className={styles.title} id="text">Simple Chat Web Register</h3>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input id="input" className={styles.input} onChange={(e) => setData({...data, username: e.target.value})} type='username' name='username' placeholder='Input Username' required></input>
                        <input id="input" className={styles.input} onChange={(e) => setData({...data, email: e.target.value})} type='email' name='email' placeholder='Input Email' required></input>
                        <input id="input" className={styles.input} onChange={(e) => setData({...data, password: e.target.value})} type='password' name='password' placeholder='Input Password' required></input>
                        <button type="submit" className={styles.btn}>Register Now</button>
                        <a href='/signin' className={styles.link}>Already have an account? Sign in here.</a>
                    </form>
                </div>
            </div>
        </div>                        
    )
}

export default Register