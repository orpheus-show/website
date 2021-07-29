import homeStyles from '../styles/Home.module.css';
import Cover from '../components/cover'
import Show from '../components/show'
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

              <br/>

              <Show />
            <div className={homeStyles.right}>
        
            </div>
        </div>
    );
}