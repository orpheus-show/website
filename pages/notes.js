import NoteCard from '../components/NoteCard';

import notesStyles from '../styles/Notes.module.css'
import Link from 'next/link'

const notes = [{}, {}]

export default function Notes() {
  return (
    <div className={notesStyles.container}>
      <h1 className={notesStyles.title}>
        Notes from{' '}
        <span className={notesStyles.titleHighlight}>
          <Link href="/">The Orpheus Show</Link>
        </span>
      </h1>

      <h3 className={notesStyles.subtitle}>
        Our documents for prep and episode planning, all open sourced!
      </h3>

      <NoteCard />
    </div>
  )
}
