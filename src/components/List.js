import Content from "./Content"
import styles from '../style/List.module.css'
import Icon from "./Icon"

const Contact = () => {
    return (
        <Content>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h3>Contacts</h3>
                    <p id="text">Search new friends and chat conversation with them. Please click the profile to see more information.</p>
                </div>
                <form>
                    <input type="text" placeholder="Search by name" id="input"/>
                </form>           
            </div>
            <div className={styles.mainContent}>
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
                <div className={styles.mainList} id="mainlist">
                    <Icon name="profile" size="50px"/>
                    <p id="text">Sandhika galih</p>
                </div>                                
            </div>
        </Content>
    )
}

export default Contact