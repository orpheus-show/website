import homeStyles from '../styles/Home.module.css';
import Cover from '../components/Cover'
import Show from '../components/Show'
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

                <div className={homeStyles.about}>
                    <h1>About</h1>
                    <h3 className={homeStyles.subtitle}>
                        The Orephus show is an unoffical podast made by members of the #podcast Channel. <br /> Its idea to showcase what makes Hack club so speical.
                    </h3>
                </div>

            </div>
            <div className={homeStyles.right}>
        
            </div>
        </div>
    );
}