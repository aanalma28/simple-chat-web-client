import Content from "./Content"
import styles from '../style/Settings.module.css'
import { useEffect } from "react"

const Contact = () => {
    const isDark = localStorage.getItem('darkMode')    

    useEffect(() => {
        const containerSidebar = document.getElementById('container-sidebar')
        const chat = document.getElementById('chat')
        const setting = document.getElementById('setting')
        const profile = document.getElementById('profile')
        const contact = document.getElementById('contact')

        let count = 0
        const circle = document.getElementById('circle')
        const longCircle = document.getElementById('long-circle')
        circle.addEventListener('click', () => {
            if(count % 2 === 0) {
                circle.style.transform = 'translate(18px, -2px)'
                circle.style.border = '1px solid #41B06E'
                longCircle.style.backgroundColor = '#41B06E'
                localStorage.setItem("darkMode", "enabled")
                containerSidebar.style.backgroundColor = '#1f1f1f'

                if(chat.getAttribute('name') === 'clicked'){
                    chat.style.backgroundColor = '#383838'                
                    setting.style.backgroundColor = '#1f1f1f'
                    profile.style.backgroundColor = '#1f1f1f'
                    contact.style.backgroundColor = '#1f1f1f'
                }else{
                    chat.style.backgroundColor = '#1f1f1f'
                }

                if(setting.getAttribute('name') === 'clicked'){
                    chat.style.backgroundColor = '#1f1f1f'                
                    setting.style.backgroundColor = '#383838'
                    profile.style.backgroundColor = '#1f1f1f'
                    contact.style.backgroundColor = '#1f1f1f'
                }else{
                    setting.style.backgroundColor = '#1f1f1f'
                }

                if(profile.getAttribute('name') === 'clicked'){
                    chat.style.backgroundColor = '#1f1f1f'                
                    setting.style.backgroundColor = '#1f1f1f'
                    profile.style.backgroundColor = '#383838'
                    contact.style.backgroundColor = '#1f1f1f'
                }else{
                    profile.style.backgroundColor = '#1f1f1f'
                }

                if(contact.getAttribute('name') === 'clicked'){
                    chat.style.backgroundColor = '#1f1f1f'                
                    setting.style.backgroundColor = '#1f1f1f'
                    profile.style.backgroundColor = '#1f1f1f'
                    contact.style.backgroundColor = '#383838'
                }else{
                    contact.style.backgroundColor = '#1f1f1f'
                }

                count+=1
            }else{
                circle.style.transform = 'translate(0, -2px)'                
                circle.style.border = '1px solid #ccc'
                longCircle.style.backgroundColor = '#ccc'
                localStorage.setItem("darkMode", "disabled")
                containerSidebar.style.backgroundColor = '#f1f1f1'

                if(chat.getAttribute( 'name' ) !== 'clicked'){
                    chat.style.backgroundColor = '#ccc'               
                    setting.style.backgroundColor = '#f1f1f1'
                    profile.style.backgroundColor = '#f1f1f1'
                    contact.style.backgroundColor = '#f1f1f1'
                }else{
                    chat.style.backgroundColor = '#f1f1f1'               
                }

                if(setting.getAttribute( 'name' ) !== 'clicked'){
                    chat.style.backgroundColor = '#f1f1f1'               
                    setting.style.backgroundColor = '#ccc'
                    profile.style.backgroundColor = '#f1f1f1'
                    contact.style.backgroundColor = '#f1f1f1'
                }else{
                    setting.style.backgroundColor = '#f1f1f1'               
                }

                if(profile.getAttribute( 'name' ) !== 'clicked'){
                    chat.style.backgroundColor = '#f1f1f1'               
                    setting.style.backgroundColor = '#f1f1f1'
                    profile.style.backgroundColor = '#ccc'
                    contact.style.backgroundColor = '#f1f1f1'
                }else{
                    profile.style.backgroundColor = '#f1f1f1'               
                }

                if(contact.getAttribute( 'name' ) !== 'clicked'){
                    chat.style.backgroundColor = '#f1f1f1'               
                    setting.style.backgroundColor = '#f1f1f1'
                    profile.style.backgroundColor = '#f1f1f1'
                    contact.style.backgroundColor = '#ccc'
                }else{
                    contact.style.backgroundColor = '#f1f1f1'               
                }
                
                count+=1
            }
        })
    })

    return (
        <Content>
            <div className={styles.header}>
                <h3>Settings</h3>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.content}>
                    <h3>Dark Mode</h3>
                    <div className={styles.btnWrapper}>
                        <div className={isDark === 'disabled' ? styles.circle : styles.circleDark} id="circle"></div>
                        <div className={isDark === 'disabled' ? styles.longCircle : styles.longCircleDark} id="long-circle"></div>
                    </div>                    
                </div>
            </div>
        </Content>
    )
}

export default Contact