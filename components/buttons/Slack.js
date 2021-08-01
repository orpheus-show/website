import styles from '../../styles/Button.module.css'


const Slack = () => {
    return (
        <div className={styles.button}>
            <a rel="noreferrer" target="_blank" href="https://hackclub.com/slack">
                <button className={styles.btn}>
                    Join the Slack
                </button>
            </a>
        </div>
    );

}


export default Slack;