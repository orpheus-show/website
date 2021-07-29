import homeStyles from '../styles/Home.module.css';

export default function Home () {
    return (
        <div className={homeStyles.container}>
            <h1 className={homeStyles.title}>
                <strong>The Orpheus Show</strong>
            </h1>
            <h3 className={homeStyles.subtitle}>
                Made by The Hack Club Podcast Team 
                <br />
                Hosted on Transistor.fm
            </h3>
        </div>
    );
}