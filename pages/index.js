import homeStyles from '../styles/Home.module.css';

export default function Home () {
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.desc}>
                <h1 className={homeStyles.title}>The Orpheus Show</h1>
                <div>
                    <h3 className={homeStyles.subtitle}>
                        Made by The Hack Club Podcast Team 
                        <br />
                        Hosted on Transistor.fm
                    </h3>
                </div>
            </div>
            
        </div>
    );
}