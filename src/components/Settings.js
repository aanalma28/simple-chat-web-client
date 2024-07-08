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
        
        const content = document.getElementById("content")
        const text = document.querySelectorAll('#text')

        const msgHeader = document.getElementById('message-header')
        const msgMain = document.getElementById('message-main')
        const msgFooter = document.getElementById('message-footer')

        const inputs = document.querySelectorAll('#input')
        const inputMsg = document.getElementById('input-message')
        
        let number = parseInt(localStorage.getItem('number')) || 0
        const circle = document.getElementById('circle')
        const longCircle = document.getElementById('long-circle')
        circle.addEventListener('click', (e) => {            
            e.preventDefault()            
            if(number % 2 === 0) {
                circle.style.transform = isDark === 'disabled' ? 'translate(30px, -2px)' : 'translate(15px, -2px)'
                circle.style.border = '1px solid #41B06E'
                longCircle.style.backgroundColor = '#41B06E'
                localStorage.setItem("darkMode", "enabled")                
                containerSidebar.style.backgroundColor = '#1f1f1f'
                containerSidebar.setAttribute('name', 'dark')

                content.style.backgroundColor = '#141414'
                content.style.border = '1px solid #3d3d3d'
                text.forEach((txt) => {
                    txt.style.color = "whitesmoke"
                })

                inputMsg.style.backgroundColor = '#3d3d3d'
                inputMsg.style.border = '1px solid #3d3d3d'
                
                inputMsg.addEventListener('focus', () => {
                    inputMsg.style.color = 'white'
                })

                msgHeader.style.backgroundColor = '#1f1f1f'
                msgMain.style.backgroundColor ='#0c0c0c'
                msgFooter.style.backgroundColor = '#1f1f1f'

                inputs.forEach((input) => {
                    input.style.backgroundColor = '#3d3d3d'
                    input.style.border = '1px solid #3d3d3d'                    
                })

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

                number+=1
                localStorage.setItem('number', number.toString())               
            }else{                
                circle.style.transform = isDark === 'disabled' ? 'translate(15px, -2px)' : 'translate(0px, -2px)'
                circle.style.border = '1px solid #ccc'
                longCircle.style.backgroundColor = '#ccc'
                localStorage.setItem("darkMode", "disabled")
                containerSidebar.style.backgroundColor = '#f1f1f1'
                containerSidebar.setAttribute('name', 'light')

                content.style.backgroundColor = 'white'
                content.style.border = '1px solid #ccc'
                text.forEach((txt) => {
                    txt.style.color = 'black'
                })

                inputMsg.style.backgroundColor = 'white'
                inputMsg.style.border = '1px solid white'
                inputMsg.addEventListener('focus', () => {
                    inputMsg.style.color = 'black'
                })

                msgHeader.style.backgroundColor = '#f1f1f1'
                msgMain.style.backgroundColor ='#ccc'
                msgFooter.style.backgroundColor = '#f1f1f1'

                inputs.forEach((input) => {
                    input.style.backgroundColor = 'white'
                    input.style.border = '2px solid white'                    
                })

                if(chat.getAttribute( 'name' ) === 'clicked'){
                    chat.style.backgroundColor = '#ccc'               
                    setting.style.backgroundColor = '#f1f1f1'
                    profile.style.backgroundColor = '#f1f1f1'
                    contact.style.backgroundColor = '#f1f1f1'
                }else{
                    chat.style.backgroundColor = '#f1f1f1'               
                }

                if(setting.getAttribute( 'name' ) === 'clicked'){
                    chat.style.backgroundColor = '#f1f1f1'               
                    setting.style.backgroundColor = '#ccc'
                    profile.style.backgroundColor = '#f1f1f1'
                    contact.style.backgroundColor = '#f1f1f1'
                }else{
                    setting.style.backgroundColor = '#f1f1f1'               
                }

                if(profile.getAttribute( 'name' ) === 'clicked'){
                    chat.style.backgroundColor = '#f1f1f1'               
                    setting.style.backgroundColor = '#f1f1f1'
                    profile.style.backgroundColor = '#ccc'
                    contact.style.backgroundColor = '#f1f1f1'
                }else{
                    profile.style.backgroundColor = '#f1f1f1'               
                }

                if(contact.getAttribute( 'name' ) === 'clicked'){
                    chat.style.backgroundColor = '#f1f1f1'               
                    setting.style.backgroundColor = '#f1f1f1'
                    profile.style.backgroundColor = '#f1f1f1'
                    contact.style.backgroundColor = '#ccc'
                }else{
                    contact.style.backgroundColor = '#f1f1f1'               
                }
                
                number+=1
                localStorage.setItem('number', number.toString())           
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
                    <h3 id="text">Dark Mode</h3>
                    <div className={styles.btnWrapper}>
                        <div className={isDark === 'disabled' ? styles.circle : styles.circleDark} id="circle"></div>
                        <div className={isDark === 'disabled' ? styles.longCircle : styles.longCircleDark} id="long-circle"></div>
                    </div>                    
                </div>
                <button>Logout</button>
            </div>
        </Content>
    )
}

export default Contact