import styles from '../style/Mainview.module.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Chat from './Chat'

const Mainview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Sidebar></Sidebar>
                <Content></Content>
                <Chat></Chat>
            </div>
        </div>
    )
}