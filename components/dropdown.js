import { useState } from "react";
import styles from '../styles/Button.module.css'


export default function Dropdown() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    return (
        <div className={styles.button}>
            <button className={styles.btn} onClick={toggle}>Toggle Subjects</button>
            {/*The bottom code should toggle on and off when the button is pressed*/}
            <div
                className={styles.div}
                style={{
                    display: showMe ? "block" : "none"
                }}>
                This should toggle my display
            </div>
        </div>
    );
}