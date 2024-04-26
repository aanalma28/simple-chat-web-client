import styles from '../style/Mainview.module.css'
import Icon from '../components/Icon'
import Messages from '../components/Messages'
import Chats from '../components/Chats'
import List from '../components/List'
import Settings from '../components/Settings'
import styles2 from '../style/Sidebar.module.css'
import Profile from '../components/Profile'
import { useState, useEffect } from 'react'

const Mainview = () => {
    const [content, setContent] = useState('')
    const isDark = localStorage.getItem('darkMode')   

    useEffect(() => {
        const chat = document.getElementById('chat')
        const setting = document.getElementById('setting')
        const profile = document.getElementById('profile')
        const contact = document.getElementById('contact')
        const containerSidebar = document.getElementById('container-sidebar')
        
        if(isDark === 'enabled'){
            containerSidebar.style.backgroundColor = '#1f1f1f'                                      
        }else{
            containerSidebar.style.backgroundColor = '#f1f1f1'                
        }

        chat.addEventListener('click', () => {
            if(isDark === 'disabled'){
                chat.style.backgroundColor = '#ccc'                
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')
            }else{
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
            if(isDark === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#ccc'                
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')
            }else{
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
            if(isDark === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#ccc'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','clicked')     
                contact.setAttribute('name', 'not-clicked')        
            }else{
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
            if(isDark === 'disabled'){
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

    return (
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
                : content === 'list' ? <List></List>
                : content === 'profile' ? <Profile></Profile>
                : <Chats></Chats>}
                <Messages></Messages>
            </div>
        </div>
    )
}

export default Mainview