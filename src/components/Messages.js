import styles from '../style/Messages.module.css'
import Icon from './Icon'
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'

const Messages = ({data}) => {
    useEffect(() => {
        const containerNoMsg = document.getElementById('container-no-msg')
        const txt = document.getElementById('wrapper-no-msg')
        const isDark = localStorage.getItem('darkMode')

        if(containerNoMsg != null && txt != null){
            if(isDark === 'enabled'){
                containerNoMsg.style.backgroundColor = '#0c0c0c'
                txt.style.color = '#fff'
            }else{
                containerNoMsg.style.backgroundColor = '#ccc'
                txt.style.color = '#f1f1f1'
            }
        }

    })

    const [token, setToken] = useState()
    const socket = io('http://localhost:3030', {extraHeaders: {Cookies: `token=${token}`}})
    const [msg, setMsg] = useState()
    const [allMsg, setAllMsg] = useState()

    useEffect(() => {
        // console.log(data.user_id)
        const res = async() => {
            const response = await fetch('http://localhost:3030/getToken', {
                method: 'GET',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'}
            })

            const json = await response.json()
            console.log(json)
            if(response.ok){
                return json
            }
        }

        res().then(json => {
            const token = json.data
            if(token){
                setToken(token)
            }else{
                setToken(null)
            }
        })

        socket.on('connect', () => {
            console.log('Connected to server')
        })       

        socket.on('disconnect', () => {
            console.log('Disconnect from server')
        })

        socket.on('error', (err) => {
            console.error('Socket error: ', err)
        })

        if(data){
            socket.emit('getAllChats', data.user_id)
    
            socket.on('getAllChats', (allMessage) => {
                setAllMsg(allMessage)
            })        
        }  

        return () => {
            socket.close()
        }
    })      

    const handleSubmit = (e) => {
        e.preventDefault()        
        socket.emit('chat', msg)
        setMsg('')
    }

    console.log(allMsg)

    if(data !== undefined){
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.header} id="message-header">
                        <div className={styles.info}>
                            <Icon name="profile" size="45px"/>
                            <h3 id="text">{data.username}</h3>           
                        </div>
                        <div className={styles.action}>
                            
                        </div>
                    </div>
                    <div className={styles.main} id="message-main">

                    </div>
                    <div className={styles.footer} id="message-footer">
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input value={msg} onChange={(e) => setMsg(e.target.value)} id="input-message" type="text" name="message" placeholder='Type message here' required/>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={styles.container} id="container-no-msg">
                <div className={styles.wrapper2}>
                    <div className={styles.text} id="wrapper-no-msg">
                        <h1 id="text">Get ready for chatting with other users</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messages