import styles from '../style/Mainview.module.css'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Chat from '../components/Chat'

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

export default Mainview