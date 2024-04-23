import styles from '../style/Content.module.css'

const Content = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Content