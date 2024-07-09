import Content from "./Content"
import Icon from "./Icon"
import styles from '../style/Profile.module.css'
import { useState } from "react"

const Profile = ({user}) => {            
    const [data, setData] = useState({
        username: user.username,
        hobby: user.hobby,
        description: user.description
    })    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3030', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        const json = await res.json()
        console.log(json)
    }
    return (
        <Content>
            <div className={styles.header}>
                <h3>Profile</h3>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgWrapper}>
                    <Icon name="profile" size="150px"/>                
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input id="input" value={user.username} onChange={(e) => setData({...data, username: e.target.value})} className={styles.input} type="text" name="username" placeholder="Username"></input>
                    <input id="input" value={user.hobby} onChange={(e) => setData({...data, hobby: e.target.value})} className={styles.input} type="text" name="hobby" placeholder="Hobby"></input>
                    <textarea id="input" value={user.description} onChange={(e) => setData({...data, description: e.target.value})} className={styles.input} type="" name="description" placeholder="Description"></textarea>
                    <button type="submit" className={styles.btn}>Edit</button>
                </form>
            </div>
        </Content>
    )
}

export default Profile