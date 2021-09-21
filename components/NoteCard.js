import noteStyles from '../styles/Notes.module.css'
import Image from 'next/image'

function NoteCard({ notes }) {
  return (
    <a
      href={notes.link}
      className={noteStyles.noteCard}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={notes.image}
        height={270}
        width={350}
        className={noteStyles.img}
        alt={`Image of ${notes.title}`}
      />
      <div className={noteStyles.subDiv}>
        <h1 className={noteStyles.cardSub}>{notes.title}</h1>
      </div>
    </a>
  )
}

export default NoteCard
