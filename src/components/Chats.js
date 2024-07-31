import Content from "./Content";
import styles from '../style/Chats.module.css';
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { useChats } from "../context/ChatContext";

const Chats = ({ onData, socket, user }) => {
    const { chatsData, setChatsData } = useChats();
    const [haveChat, setHaveChat] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode');
        const lists = document.querySelectorAll('#list');
        const texts = document.querySelectorAll('#text');

        const applyStyles = () => {
            if (isDark === 'enabled') {
                texts.forEach((text) => {
                    text.style.color = 'white';
                });
                lists.forEach((list) => {
                    list.addEventListener('mouseenter', () => {
                        list.style.backgroundColor = '#3d3d3d';
                    });
                    list.addEventListener('mouseleave', () => {
                        list.style.backgroundColor = '#141414';
                    });
                    list.style.borderBottom = '1px solid #3d3d3d';
                });
            } else {
                texts.forEach((text) => {
                    text.style.color = 'black';
                });
                lists.forEach((list) => {
                    list.addEventListener('mouseenter', () => {
                        list.style.backgroundColor = '#f1f1f1';
                    });
                    list.addEventListener('mouseleave', () => {
                        list.style.backgroundColor = 'white';
                    });
                    list.style.borderBottom = '1px solid #f1f1f1';
                });
            }
        };

        applyStyles();
        
        return () => {
            lists.forEach((list) => {
                list.removeEventListener('mouseenter', () => {});
                list.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    useEffect(() => {
        const storedChats = localStorage.getItem('chatsData');
        if (storedChats) {
            setChatsData(JSON.parse(storedChats));
            setHaveChat(true);
        }
    }, [setChatsData]);

    useEffect(() => {
        if (socket !== null && user && user.user_id) {
            socket.on('getAllChats', (chatsJson) => {
                const chats = chatsJson.chats;
                const newChatsData = [];
                for (let i = chats.length - 1; i >= 0; i--) {
                    if (chats[i].from.user_id === user.user_id) {
                        const findUser = newChatsData.find(el => el.user_id === chats[i].to.user_id);
                        if (!findUser) {
                            newChatsData.push({
                                user_id: chats[i].to.user_id,
                                username: chats[i].to.username,
                                message: chats[i].message,
                            });
                        }
                    } else if (chats[i].to.user_id === user.user_id) {
                        const findUser = newChatsData.find(el => el.user_id === chats[i].from.user_id);
                        if (!findUser) {
                            newChatsData.push({
                                user_id: chats[i].from.user_id,
                                username: chats[i].from.username,
                                message: chats[i].message,
                            });
                        }
                    }
                }
                setChatsData(newChatsData);
                setHaveChat(newChatsData.length > 0);
                localStorage.setItem('chatsData', JSON.stringify(newChatsData));
            });

            socket.on('error', (err) => {
                console.error('Socket error: ', err);
            });

            return () => {
                socket.off('getAllChats');
                socket.off('error');
            };
        }
    }, [socket, user, setChatsData]);

    return (
        <Content>
            <div className={styles.header}>
                <div className={styles.content1}>
                    <h3>Chats</h3>
                </div>
                <div className={styles.content2}>
                    <form>
                        <input type="text" placeholder="Search" id="input" />
                    </form>
                </div>
            </div>
            <div className={styles.mainContainer}>
                {haveChat ? (
                    chatsData.map((chat, index) => (
                        <div
                            key={index}
                            id="list"
                            className={styles.mainList}
                            onClick={() => {
                                onData(chat);
                            }}
                        >
                            <div className={styles.image}>
                                <Icon name="profile" size="50px" />
                            </div>
                            <div className={styles.text}>
                                <h3 id="text">{chat.username}</h3>
                                <p id="text">{chat.message.length > 0 ? chat.message : 'Click here to message.....'}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.noChatsWrapper}>
                        <p className={styles.noChatsTxt} id="text">No Chats</p>
                    </div>
                )}
            </div>
        </Content>
    );
};

export default Chats;
