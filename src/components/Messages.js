import styles from '../style/Messages.module.css'
import Icon from './Icon'
import { useEffect, useState } from 'react'
import { useChats } from '../context/ChatContext'

const Messages = ({data, socket}) => {
    const {setChatsData} = useChats()
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

    // const [token, setToken] = useState()
    // const [socket, setSocket] = useState(null)
    const [msg, setMsg] = useState()
    const [allMsg, setAllMsg] = useState()        

    if(socket != null){
        socket.on('connect', () => {
            console.log('Connected to server')
        })       
    
        socket.on('disconnect', () => {
            console.log('Disconnect from server')
        })
    
        socket.on('error', (err) => {
            console.error('Socket error: ', err)
        })
        
        socket.on('messageReceived', (msg) => {
            console.log(msg);
        });
        
        socket.on('messageError', (msg) => {
            console.error(msg);
        });
    
        if(data){
            socket.emit('getAllMsg', data.user_id)
    
            socket.on('getAllMsg', (allMessage) => {
                setAllMsg(allMessage)                
            })

            socket.on('getAllChats', (chats) => {
                setChatsData(chats)
            })
        }
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (socket && socket.connected) {
            socket.emit('chat', msg, data.user_id, data.username);
            setMsg('');
        } else {
            console.error('Socket is not connected');
        }
    };    

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
                        {allMsg ? allMsg.chats_data.map((index) => {
                            if(index.from.user_id === data.user_id){
                                return <div className={styles.messageContainer}>
                                    <div className={styles.message} id="msg">
                                        <p>{index.message}</p>
                                    </div>
                                </div>
                            }else{
                                return <div className={styles.messageContainerFrom}>
                                    <div className={styles.messageFrom}>
                                        <p>{index.message}</p>
                                    </div>
                                </div>
                            }
                        }) : 'No Chats Found'}
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