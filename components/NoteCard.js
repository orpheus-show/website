import noteStyles from '../styles/Notes.module.css'

const NoteCard = () => {
    return (
        <div className={noteStyles.noteCard}>
            <div className={noteStyles.titleDiv}>
                <h1 className={noteStyles.cardTitle}>Max Wofford</h1>
            </div>
            <div className={noteStyles.subDiv}>
                <h1 className={noteStyles.cardSub}>Episode 1</h1>
            </div>
        </div>
    );
}

export default NoteCard
