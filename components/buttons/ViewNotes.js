import { useState } from 'react'
import styles from '../../styles/Button.module.css'

export default function ViewNotes() {
  const [showMe, setShowMe] = useState(false)
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <div className={styles.button}>
      <button className={styles.btn} onClick={toggle}>
        <a href="/notes"> 
        View the Notes
        </a>
      </button>
    </div>
  )
}
