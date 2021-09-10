import noteStyles from '../styles/Notes.module.css'

function NoteCard({ notes }) {
  return (
    <a href={notes.link} className={noteStyles.noteCard} target="_blank">
      <div className={noteStyles.titleDiv}>
        <h1 className={noteStyles.cardTitle}>{notes.title}</h1>
      </div>
      <div className={noteStyles.subDiv}>
        <h1 className={noteStyles.cardSub}>{notes.sub}</h1>
      </div>
    </a>
  )
}

export default NoteCard
