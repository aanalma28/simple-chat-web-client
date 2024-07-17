import Content from "./Content"
import styles from '../style/List.module.css'
import Icon from "./Icon"
import { useState, useEffect } from "react"

const Contact = () => {
    const isDark = localStorage.getItem('darkMode')
    const [isClick, setIsClick] = useState(false)
    const [allUsers, setAllUsers] = useState()
    const [data, setData] = useState({
        user_id: '',
        username: '',
        description: ''
    })
    const [contact, setContact] = useState()
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        const users = async() => {
            const res = await fetch('http://localhost:3030/getAllUsers', {
                method: 'GET',
                credentials: 'include',
                headers: {'Content-Type':'application/json'}
            })

            const json = await res.json()
            console.log(json)
            if(res.ok){
                return json
            }else{
                return null
            }
        }

        const contacts = async() => {
            const res = await fetch('http://localhost:3030/getUserContacts', {
                method: 'GET',
                credentials: 'include',
                headers: {'Content-Type':'application/json'}
            })

            const json = res.json()                        

            if(res.ok){
                return json
            }else{
                return null
            }
        }

        users().then(json => {
            if(json != null){
                const data = json.data
                console.log(data)
                setAllUsers(data)
            }else{
                setAllUsers(null)
            }
                        
        })

        contacts().then(json => {
            if(json != null){
                const data = json.data
                const contact = data
                console.log(contact)
                setContact(contact)
            }else{
                setContact(null)
            }
            
        })

    }, [])   

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

    const handleAddClick = async (e) => {
        e.preventDefault()
        
        const res = await fetch('http://localhost:3030/addcontact', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: data.username,
                contact_id: data.user_id
            })
        })

        const json = await res.json()
        console.log(json)
    }        
    
    return (
        <Content>
            {isClick ? 
                <div className={styles.seeProfile}>
                    <Icon name="profile" size="130px"/>
                    <p id="text">{data.username}</p>
                    <p id="text" className={styles.desc}>
                        {data.description}
                    </p>
                    <div className={styles.btn}>
                        <button className={styles.back} onClick={() => {
                            setIsClick(false)
                            setData({
                                user_id: '',
                                username: '',
                                description: '',
                            })
                        }}>Back</button>
                                             
                        {isAdded ?                                
                                <button className={styles.added}>Added</button>
                            :
                                <button className={styles.add} onClick={handleAddClick}>Add</button>
                        }
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
                    {allUsers ? (
                        allUsers.map((user, index) => (                            
                            <div key={index} className={styles.mainList} id="mainlist" onClick={() => {
                                setIsClick(true)
                                setData({
                                    user_id: user.user_id,
                                    username: user.username,
                                    description: user.description
                                })                                                             
                                setIsAdded(contact != null && contact.some(c => c.contact_id === user.user_id) ? true : false)
                            }}>
                                <Icon name="profile" size="50px"/>
                                <p id="text">{user.username}</p>
                            </div>
                        ))
                    ) : (
                        <p>No users found</p>
                    )}                                                             
                </div>
                </>
            }     
        </Content>
    )
}

export default Contact