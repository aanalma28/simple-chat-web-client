import Content from "./Content"
import styles from '../style/Chats.module.css'
import Icon from "./Icon"

const Chats = () => {
    return (
        <Content>
            <div className={styles.header}>
                <div className={styles.content1}>
                    <h3>Chats</h3>
                </div>
                <div className={styles.content2}>
                    <form>
                        <input type="text" placeholder="Search"/>
                    </form>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div id="list1" className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
                <div className={styles.mainList}>
                    <div className={styles.image}>
                        <Icon name="profile" size="50px"/>
                    </div>
                    <div className={styles.text}>
                        <h3>Name</h3>
                        <p>Message here...</p>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default Chats