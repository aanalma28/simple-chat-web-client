import Content from "./Content"
import styles from '../style/List.module.css'
import Icon from "./Icon"
import { useState } from "react"

const Contact = () => {
    const [isClick, setIsClick] = useState(false)
    const handleClick = () => {
        setIsClick(true)
    }

    const handleBackClick = () => {
        setIsClick(false)
    }

    return (
        <Content>
            {isClick ? 
                <div className={styles.seeProfile}>
                    <Icon name="profile" size="130px"/>
                    <p id="text">Alex</p>
                    <p id="text" className={styles.desc}>
                        Halo, nama saya Alex. Saya adalah seorang asisten virtual yang diciptakan untuk membantu dalam 
                        berbagai pertanyaan dan masalah yang Anda miliki. Saya memiliki kemampuan untuk memberikan informasi, 
                        menjawab pertanyaan, dan bahkan berdiskusi tentang topik yang Anda minati. 
                        Meskipun saya hanya program komputer yang dibuat oleh OpenAI, saya senang dapat membantu Anda 
                        dalam hal-hal yang Anda butuhkan. Jika ada yang bisa saya bantu, jangan ragu untuk bertanya!
                    </p>
                    <div className={styles.btn}>
                        <button className={styles.back} onClick={handleBackClick}>Back</button>
                        <button className={styles.add}>+ Add</button>
                    </div>
                </div>
                :
                <>                
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
                    <div className={styles.mainList} id="mainlist" onClick={handleClick}>
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
                </>
            }     
        </Content>
    )
}

export default Contact