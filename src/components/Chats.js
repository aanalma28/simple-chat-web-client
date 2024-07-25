import Content from "./Content"
import styles from '../style/Chats.module.css'
import Icon from "./Icon"
import { useEffect, useState } from "react"
// import { io } from "socket.io-client"

const Chats = ({onData}) => {
    const [chatsData, setChatsData] = useState([])        

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode')
        const lists = document.querySelectorAll('#list')
        const texts = document.querySelectorAll('#text')        

        if(isDark === 'enabled'){
            texts.forEach((text) => {
                text.style.color = 'white'
            })

            lists.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#3d3d3d'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = '#141414'
                })
                list.style.borderBottom = '1px solid #3d3d3d'
            })
        }else{
            texts.forEach((text) => {
                text.style.color = 'black'
            })

            lists.forEach((list) => {
                list.addEventListener('mouseenter', () => {
                    list.style.backgroundColor = '#f1f1f1'
                })
                list.addEventListener('mouseleave', () => {
                    list.style.backgroundColor = 'white'
                })
                list.style.borderBottom = '1px solid #f1f1f1'
            })
        }
        
    })

    // const socket = io('http://localhost:3030')

    // socket.on('allmessage', (allMsg) => {
    //     const chats = allMsg.chats_data
    //     setChatsData(chats)
    // })

    return (
        <Content>
            <div className={styles.header}>
                <div className={styles.content1}>
                    <h3>Chats</h3>
                </div>
                <div className={styles.content2}>
                    <form>
                        <input type="text" placeholder="Search" id="input"/>
                    </form>
                </div>
            </div>
            <div className={styles.mainContainer}>
                {chatsData.length>0 ? 
                    chatsData.map((chat, index) => (
                        <div key={index} id="list" className={styles.mainList} onClick={() => {
                            onData(chat)
                        }}>
                            <div className={styles.image}>
                                <Icon name="profile" size="50px"/>
                            </div>
                            <div className={styles.text}>
                                <h3 id="text">{chat.username}</h3>
                                <p id="text">{chat.chat_data.length>0 ? 'Message':'Click here to message.....'}</p>
                            </div>
                        </div> 
                    ))
                    :
                    <div className={styles.noChatsWrapper}>
                        <p className={styles.noChatsTxt} id="text">No Chats</p>
                    </div>                    
                }                
            </div>
        </Content>
    )
}

export default Chats