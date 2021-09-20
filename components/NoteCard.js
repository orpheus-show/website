import noteStyles from '../styles/Notes.module.css'

function NoteCard({ notes }) {
  return (
    <a
      href={notes.link}
      className={noteStyles.noteCard}
      target="_blank"
      rel="noreferrer"
    >
      <img src={notes.image} className={noteStyles.img} />
      <div className={noteStyles.subDiv}>
        <h1 className={noteStyles.cardSub}>{notes.title}</h1>
      </div>
    </a>
  )
}

export default NoteCard;
