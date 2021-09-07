import * as React from 'react'

import notesStyles from '../styles/Notes.module.css'

import Link from 'next/link'

export default function Notes() {
  return (
    <div>
      <div className={notesStyles.container}>
        <h1 className={notesStyles.title}>
          Notes from{' '}
          <span className={notesStyles.titleHighlight}>
            <Link href="/">The Orpheus Show</Link>
          </span>
        </h1>

        <h3 className={notesStyles.subtitle}>
          The development of this page is in progress. Hold on tight!
        </h3>
      </div>
    </div>
  )
}
