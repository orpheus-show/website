import styles from '../../styles/Button.module.css'

import Link from 'next/link'

export default function ViewNotes() {
  return (
    <div className={styles.button}>
      <Link href="https://devenjadhav.notion.site/devenjadhav/The-Orpheus-Show-faa883027b5849e9af8e9d3b349d74ad">
        <button className={styles.btn}>View the Notes</button>
      </Link>
    </div>
  )
}
