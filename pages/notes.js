import NoteCard from '../components/NoteCard'

import notesStyles from '../styles/Notes.module.css'
import Link from 'next/link'

const allNotes = [
  {
    title: 'Max Wofford',
    sub: 'Episode 1',
    link: 'https://devenjadhav.notion.site/Max-Interview-Details-be41671482e349abbc73e69965dd44b9',
    image: ''
  },
  {
    title: 'Zach Latta',
    sub: 'Episode 2',
    link: 'https://devenjadhav.notion.site/ZRL-d54d720fe8ba410da3d1c531b0c2dae3',
    image: ''
  },
  {
    title: 'Zach Fogg',
    sub: 'Episode 3',
    link: 'https://devenjadhav.notion.site/ZFogg-c16aacb03369415c9a7beb4c8823dd98',
    image: ''
  }
]

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

      <div className={notesStyles.cardDiv}>
        {allNotes.map((note, i) => (
          <NoteCard notes={note} key={i} />
        ))}
      </div>
    </div>
  )
}
