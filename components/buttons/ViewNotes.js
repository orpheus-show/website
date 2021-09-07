import styles from '../../styles/Button.module.css'

import Link from 'next/link'

export default function ViewNotes() {
  return (
    <div className={styles.button}>
      <Link href="/notes">
        <button className={styles.btn}>View the Notes</button>
      </Link>
    </div>
  )
}
