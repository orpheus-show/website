import homeStyles from '../styles/Home.module.css';
import Cover from '../components/cover'
export default function Home () {
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.left}>

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
              <Cover /> 
            <div className={homeStyles.right}>
        
            </div>
        </div>
    );
}