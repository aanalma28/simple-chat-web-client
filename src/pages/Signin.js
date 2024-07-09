import styles from '../style/Register.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


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
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await fetch('http://localhost:3030/signin', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })        

        if(res.ok){            
            navigate('/main')
        }
    }

    return (
        <div className={styles.container} id="container">
            <div className={styles.wrapper} id="wrapper">                
                <h3 className={styles.title} id="text">Simple Chat Web Sign In</h3>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>                        
                        <input id="input" className={styles.input}  onChange={(e) => setData({...data, email: e.target.value})}type='email' name='email' placeholder='Input Email' required></input>
                        <input id="input" className={styles.input} onChange={(e) => setData({...data, password: e.target.value})}type='password' name='password' placeholder='Input Password' required></input>
                        <button type="submit" className={styles.btn}>Signin Now</button>
                        <a href='/register' className={styles.link}>Dont have an account? Register here</a>
                    </form>
                </div>
            </div>
        </div>                        
    )
}

export default Signin