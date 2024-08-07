import styles from '../style/Mainview.module.css'
import Icon from '../components/Icon'
import Messages from '../components/Messages'
import Chats from '../components/Chats'
import List from '../components/List'
import Settings from '../components/Settings'
import styles2 from '../style/Sidebar.module.css'
import Profile from '../components/Profile'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import { ChatsProvider } from '../context/ChatContext'


const Mainview = () => {
    const [content, setContent] = useState('')
    const [profile, setProfile] = useState()    

    useEffect(() => {
        const auth = async() => {
            const res = await fetch('http://localhost:3030/getSpecUser', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },                
            })

            const json = await res.json()
            
            if(res.ok){
                const data = json.data
                setProfile(data)
            }else{
                window.location.href = '/signin'
            }
        }    
        
        auth()

    }, [])

    // Get token from specify user
    const [token, setToken] = useState(null)
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
    }, [])

    // Socket connection with server
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const socket = io('http://localhost:3030', {
            extraHeaders: {Cookies: `token=${token}`},
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,    
            timeout: 20000, // timeout 20 detik
        })        

        setSocket(socket)

        return () => {
            socket.disconnect()
        }
    }, [token])
    

    // Styling darkmode
    useEffect(() => {        
        const chat = document.getElementById('chat')
        const setting = document.getElementById('setting')
        const profile = document.getElementById('profile')
        const contact = document.getElementById('contact')
        const containerSidebar = document.getElementById('container-sidebar')        
        const isDarkSidebar = localStorage.getItem('darkMode')
        
        const content = document.getElementById('content')
        const text = document.querySelectorAll('#text')
        const mainlist = document.querySelectorAll('#mainlist')
        const lists = document.querySelectorAll('#list')
        const inputs = document.querySelectorAll('#input')
        const inputMsg = document.getElementById('input-message')

        const msgHeader = document.getElementById('message-header')
        const msgMain = document.getElementById('message-main')
        const msgFooter = document.getElementById('message-footer')

        const messages = document.querySelectorAll('#msg')


        // Style for MainContent and Message Page
        if(isDarkSidebar === 'enabled'){
            containerSidebar.style.backgroundColor = '#1f1f1f'                                      
            content.style.backgroundColor = '#141414'
            content.style.border = '1px solid #3d3d3d'
            text.forEach((txt) => {
                txt.style.color = 'whitesmoke'
            })
            mainlist.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#3d3d3d'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = '#141414'
                })
            })

            lists.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#3d3d3d'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = '#141414'
                })
                list.style.borderBottom = '1px solid #3d3d3d'
            })

            
            inputs.forEach((input) => {
                input.style.backgroundColor = '#3d3d3d'
                input.style.border = '1px solid #3d3d3d'
                input.addEventListener('focus', () => {
                    input.style.color = 'white'                    
                })
            })

            if(inputMsg != null && msgHeader != null && msgMain != null && msgFooter != null){
                inputMsg.style.backgroundColor = '#3d3d3d'
                inputMsg.style.border = '1px solid #3d3d3d'
                inputMsg.style.color = 'white'
    
                msgHeader.style.backgroundColor = '#1f1f1f'
                msgMain.style.backgroundColor ='#0c0c0c'
                msgFooter.style.backgroundColor = '#1f1f1f'
            }

            if(messages != null){
                messages.forEach((msg) => {
                    msg.style.backgroundColor = '#1f1f1f'
                    msg.style.color = 'white'
                })
            }            
        }else{
            containerSidebar.style.backgroundColor = '#f1f1f1'                
            content.style.backgroundColor = 'white'
            content.style.border = '1px solid #ccc'
            text.forEach((txt) => {
                txt.style.color = 'black'
            })
            mainlist.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#f1f1f1'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = 'white'
                })
            })

            lists.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#f1f1f1'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = 'white'
                })
                list.style.borderBottom = '1px solid #f1f1f1'
            })

            inputs.forEach((input) => {
                input.style.backgroundColor = '#f1f1f1'
                input.style.border = '1px solid #f1f1f1'
                input.addEventListener('focus', () => {
                    input.style.color = 'black'
                })
            })

            if(inputMsg != null && msgHeader != null && msgMain != null && msgFooter != null){
                inputMsg.style.backgroundColor = 'white'
                inputMsg.style.border = '1px solid white'
                inputMsg.style.color = 'black'

                msgHeader.style.backgroundColor = '#f1f1f1'
                msgMain.style.backgroundColor ='#ccc'
                msgFooter.style.backgroundColor = '#f1f1f1'
            }

            if(messages != null){
                messages.forEach((msg) => {
                    msg.style.backgroundColor = '#f1f1f1'
                    msg.style.color = 'black'
                })
            }
                        
        }


        // Style for sidebar Icons
        chat.addEventListener('click', () => {                                              
            if(isDarkSidebar === 'disabled'){                
                chat.style.backgroundColor = '#ccc'          
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')
                
            }else if(isDarkSidebar === 'enabled'){                
                chat.style.backgroundColor = '#383838'                
                setting.style.backgroundColor = '#1f1f1f'
                profile.style.backgroundColor = '#1f1f1f'
                contact.style.backgroundColor = '#1f1f1f'

                chat.setAttribute('name', 'clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')                
            }
            
        })

        setting.addEventListener('click', () => {            
            if(isDarkSidebar === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#ccc'                
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')
                
            }else if(isDarkSidebar === 'enabled'){
                chat.style.backgroundColor = '#1f1f1f'
                setting.style.backgroundColor = '#383838'                
                profile.style.backgroundColor = '#1f1f1f'
                contact.style.backgroundColor = '#1f1f1f'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')    
                                
            }
            
        })

        profile.addEventListener('click', () => {
            if(isDarkSidebar === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#ccc'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','clicked')     
                contact.setAttribute('name', 'not-clicked')
                                
            }else if(isDarkSidebar === 'enabled'){
                chat.style.backgroundColor = '#1f1f1f'
                setting.style.backgroundColor = '#1f1f1f'
                profile.style.backgroundColor = '#383838'
                contact.style.backgroundColor = '#1f1f1f'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','clicked')     
                contact.setAttribute('name', 'not-clicked')           
                
            }
            
        })

        contact.addEventListener('click', () => {
            if(isDarkSidebar === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#ccc'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'clicked')
                
            }else{
                chat.style.backgroundColor = '#1f1f1f'
                setting.style.backgroundColor = '#1f1f1f'
                profile.style.backgroundColor = '#1f1f1f'
                contact.style.backgroundColor = '#383838'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'clicked')
                
            }
            
        })
    })


    const handleChat = () => {        
        setContent('chat')   
    }

    const handleList = () => {        
        setContent('list')
    }

    const handleSetting = () => {
        setContent('settings')
    }

    const handleProfile = () => {
        setContent('profile')
    }

    const [dataFromChild, setDataFromChild] = useState()

    const handleData = (data) => {
        if(data){
            setDataFromChild(data)
        }
    }        

    return (
        <ChatsProvider>
            <div className={styles.container}>            
                <div className={styles.wrapper}>
                    <div className={styles2.container} id="container-sidebar">
                        <div className={styles2.wrapper}>
                            <div className={styles2.topIcon}>
                                <div className={styles2.iconT} id="chat" onClick={handleChat}>
                                    <Icon name='chat' size='23px'/>                
                                </div>
                                <div className={styles2.iconT} id="contact" onClick={handleList}>
                                    <Icon name='contact' size='23px'/>                
                                </div>                            
                            </div>
                            <div className={styles2.bottomIcon}>
                                <div className={styles2.iconB} id="setting" onClick={handleSetting}>
                                    <Icon name='setting' size='30px'/>
                                </div>
                                <div className={styles2.iconB} id="profile" onClick={handleProfile}>
                                    <Icon name='profile' size='30px'/>
                                </div>
                            </div>                
                        </div>
                    </div>
                    {content === 'settings' ? <Settings></Settings>
                    : content === 'list' ? <List userData={handleData}></List>
                    : content === 'profile' ? <Profile user={profile}></Profile>
                    // : content === 'chats' ? <Chats onData={handleData} socket={socket} user={profile}></Chats>
                    : <Chats onData={handleData} socket={socket} user={profile}></Chats>}
                    <Messages data={dataFromChild} socket={socket}></Messages>
                </div>
            </div>
        </ChatsProvider>        
    )
}

export default Mainview