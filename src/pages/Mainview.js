import styles from '../style/Mainview.module.css'
import Icon from '../components/Icon'
import Chat from '../components/Chat'
import Contact from '../components/Contact'
import List from '../components/List'
import Settings from '../components/Settings'
import styles2 from '../style/Sidebar.module.css'
import { useState } from 'react'

const Mainview = () => {
    const [content, setContent] = useState('')

    const handleChat = () => {        
        setContent('settings')   
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles2.container}>
                    <div className={styles2.wrapper}>
                        <div className={styles2.icon} onClick={handleChat}>
                            <Icon name='chat' size='20px'/>                
                        </div>
                        <div className={styles2.icon}>
                            <Icon name='contact' size='20px'/>                
                        </div>
                    </div>
                </div>
                {content === 'settings' ? <Settings></Settings>
                : content === 'list' ? <List></List>
                : <Contact></Contact>}
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Mainview