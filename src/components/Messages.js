import styles from '../style/Messages.module.css'
import Icon from './Icon'

const Chat = () => {    

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.info}>
                        <Icon name="profile" size="45px"/>
                        <h3>John Doe</h3>                        
                    </div>
                    <div className={styles.action}>
                        
                    </div>
                </div>
                <div className={styles.main}>

                </div>
                <div className={styles.footer}>
                    
                </div>
            </div>
        </div>
    )
}

export default Chat