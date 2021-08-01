import { useState } from "react";
import styles from '../styles/Button.module.css'


export default function Notes() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    return (
        <div className={styles.button}>
            <button className={styles.btn} onClick={toggle}>View the Notes</button>
            {/*The bottom code should toggle on and off when the button is pressed*/}
            <div
                onClick={toggle}
                className={styles.div}
                style={{
                    display: showMe ? "block" : "none"
                }}>
                <a rel="noreferrer" onClick={toggle} target="_blank" href="https://www.notion.so/devenjadhav/Max-Interview-Details-be41671482e349abbc73e69965dd44b9">Read about Max's Interview</a>
              <hr />
                {/*<a rel="noreferrer" onClick={toggle}>View ZRL - Interview </a>*/}
                <a rel="noreferrer" onClick={toggle} target="_blank" href="https://www.notion.so/devenjadhav/e5387a4934ee455bb0f9666949146ba4?v=e3ed6e93a15b43bab01e602169450e9e">View the timeline</a>
                <hr />
                <a rel="noreferrer" onClick={toggle} target="_blank" href="https://www.notion.so/devenjadhav/The-Orpheus-Show-faa883027b5849e9af8e9d3b349d74ad">View the entire Notion</a>
               
               

            </div>
        </div>
    );
    
}

