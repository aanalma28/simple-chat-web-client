import styles from '../style/Sidebar.module.css'
import Icon from './Icon'

const Sidebar =() => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>                
                <Icon name='chat' size='20px'/>
                <Icon name='contact' size='20px'/>
            </div>
        </div>
    )
}

export default Sidebar