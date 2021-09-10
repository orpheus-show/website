import noteStyles from '../styles/Notes.module.css'

function NoteCard({ notes }) {
  return (
    <div className={noteStyles.noteCard}>
      <div className={noteStyles.titleDiv}>
        <h1 className={noteStyles.cardTitle}>{notes.title}</h1>
      </div>
      <div className={noteStyles.subDiv}>
        <h1 className={noteStyles.cardSub}>{notes.sub}</h1>
      </div>
    </div>
  )
}

export default NoteCard
