import Content from "./Content"
import styles from '../style/List.module.css'
import Icon from "./Icon"
import { useState, useEffect } from "react"

const Contact = () => {
    const isDark = localStorage.getItem('darkMode')
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        const text = document.querySelectorAll('#text')
        const mainList = document.querySelectorAll('#mainlist')
        const inputSearch = document.getElementById('input')

        if(isDark === 'enabled'){
            text.forEach((txt) => {
                txt.style.color = 'white'
            })

            mainList.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#3d3d3d'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = '#141414'
                })
            })

            if(isClick !== true){
                inputSearch.style.border = '1px solid #3d3d3d'
                inputSearch.style.backgroundColor = '#3d3d3d'
                inputSearch.addEventListener('focus', () => {
                    inputSearch.style.color = 'white'                    
                })
            }

        }else{
            text.forEach((txt) => {
                txt.style.color = 'black'
            })

            mainList.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#f1f1f1'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = 'white'
                })
            })

            if(isClick !== true){
                inputSearch.style.border = '1px solid #f1f1f1'
                inputSearch.style.backgroundColor = '#f1f1f1'
                inputSearch.addEventListener('focus', () => {
                    inputSearch.style.color = 'black'
                })
            }

        }
    })
    
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