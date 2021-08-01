import styles from '../../styles/Button.module.css'


const Repo = () => {
    return (
        <div className={styles.button}>
            <a rel="noreferrer" target="_blank" href="https://github.com/orpheuspod/site">
                <button className={styles.btn}>
                    View the Repo
                </button>
            </a>
        </div>
    );

}


export default Repo;
