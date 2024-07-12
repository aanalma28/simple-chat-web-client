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
    
    useEffect(() => {        
        const chat = document.getElementById('chat')
        const setting = document.getElementById('setting')
        const profile = document.getElementById('profile')
        const contact = document.getElementById('contact')
        const containerSidebar = document.getElementById('container-sidebar')
        const isDark = containerSidebar.getAttribute('name')
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

            inputMsg.style.backgroundColor = '#3d3d3d'
            inputMsg.style.border = '1px solid #3d3d3d'
            inputMsg.style.color = 'white'

            msgHeader.style.backgroundColor = '#1f1f1f'
            msgMain.style.backgroundColor ='#0c0c0c'
            msgFooter.style.backgroundColor = '#1f1f1f'
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

            inputMsg.style.backgroundColor = 'white'
            inputMsg.style.border = '1px solid white'
            inputMsg.style.color = 'black'

            msgHeader.style.backgroundColor = '#f1f1f1'
            msgMain.style.backgroundColor ='#ccc'
            msgFooter.style.backgroundColor = '#f1f1f1'
        }

        chat.addEventListener('click', () => {
            console.log(isDark)
            console.log(isDarkSidebar)                                
            if(isDark === 'light' || isDarkSidebar === 'disabled'){                
                chat.style.backgroundColor = '#ccc'          
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')
                
            }else if(isDark === 'dark' || isDarkSidebar === 'enabled'){                
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
            if(isDark === 'light' || isDarkSidebar === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#ccc'                
                profile.style.backgroundColor = '#f1f1f1'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'clicked')                
                profile.setAttribute('name','not-clicked')     
                contact.setAttribute('name', 'not-clicked')
                
            }else if(isDark === 'dark' || isDarkSidebar === 'enabled'){
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
            if(isDark === 'light' || isDarkSidebar === 'disabled'){
                chat.style.backgroundColor = '#f1f1f1'
                setting.style.backgroundColor = '#f1f1f1'
                profile.style.backgroundColor = '#ccc'
                contact.style.backgroundColor = '#f1f1f1'

                chat.setAttribute('name', 'not-clicked')
                setting.setAttribute('name', 'not-clicked')                
                profile.setAttribute('name','clicked')     
                contact.setAttribute('name', 'not-clicked')
                                
            }else if(isDark === 'dark' || isDarkSidebar === 'enabled'){
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
            if(isDark === 'light' || isDarkSidebar === 'disabled'){
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
                : content === 'list' ? <List ></List>
                : content === 'profile' ? <Profile user={profile}></Profile>
                : <Chats></Chats>}
                <Messages></Messages>
            </div>
        </div>
    )
}

export default Mainview