import noteStyles from '../styles/Notes.module.css'

function NoteCard({ notes }) {
  return (
    <a href={notes.link} className={noteStyles.noteCard} target="_blank">
      <img src="/note-assets/zach_latta.png" className={noteStyles.img}/>
      <div className={noteStyles.subDiv}>
        <h1 className={noteStyles.cardSub}>{notes.sub}</h1>
      </div>
    </a>
  )
}

export default NoteCard
