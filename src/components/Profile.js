import Content from "./Content"
import Icon from "./Icon"
import styles from '../style/Profile.module.css'

const Contact = () => {
    return (
        <Content>
            <div className={styles.header}>
                <h3>Profile</h3>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgWrapper}>
                    <Icon name="profile" size="150px"/>                
                </div>
                <form onSubmit="" className={styles.form}>
                    <input id="input" className={styles.input} type="text" name="username" placeholder="Username"></input>
                    <input id="input" className={styles.input} type="text" name="hobby" placeholder="Hobby"></input>
                    <textarea id="input" className={styles.input} type="" name="description" placeholder="Description"></textarea>
                    <button type="submit" className={styles.btn}>Edit</button>
                </form>
            </div>
        </Content>
    )
}

export default Contact