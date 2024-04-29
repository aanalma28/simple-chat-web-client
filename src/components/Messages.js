import styles from '../style/Messages.module.css'
import Icon from './Icon'

const Chat = () => {

    const handleSubmit = () => {
        console.log("submitted")
    }

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
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input type="text" name="message" placeholder='Type message here' required/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat