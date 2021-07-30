import homeStyles from '../styles/Home.module.css';
import Episode from '../components/Episode'
import Dropdown from '../components/dropdown';

import Episodes from '../components/Episodes';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home () {
    return (
        <>
            <div className={homeStyles.container}>

                <div className={homeStyles.left}>
                    
                    <div className={homeStyles.desc}>
                        <h1 className={homeStyles.title}>The Orpheus Show</h1>
                        <div>
                            <h2 className={homeStyles.subtitle}>
                                Made by The Hack Club Podcast Team 
                                <br />
                            <code> <a href="https://feeds.transistor.fm/the-orpheus-show" > https://feeds.transistor.fm/the-orpheus-show </a> </code>
                            </h2>
                        </div>
                    </div>

                    <div className={homeStyles.about}>
                        <h2>About</h2>
                        <h3 className={homeStyles.subtitle}>
                            The Orephus show is an unoffical podast made by members of the <span className={homeStyles.channel}>#podcast</span> channel. <br /> <br /> Our goal is to show the world what makes Hack club so speical, and inspire people by telling the stories of influential people in the community.
                        </h3>
                    </div>

                    <div className={homeStyles.about}>
                        <h2>Who is this podcast for?</h2>
                        <h3 className={homeStyles.subtitle}>
                            Its made for Hack Clubbers everywhere, yet its not just for them. It's for everyone, even if you're not in Hack Club.
                        </h3>
                    </div>
        
                </div>
                <div className={homeStyles.right}>   
                    <img src="/cover.png" className={homeStyles.cover}/>
                    <div className={homeStyles.buttonDiv}>
                        <Dropdown />
                        <button className={homeStyles.btn}><a href="https://github.com/orpheuspod/www">View the Repo</a></button>
                        <button className={homeStyles.btn}><a href="https://hackclub.com/slack">Join the Slack</a></button>
                        <button className={homeStyles.btn}><a href="https://devenjadhav.notion.site/The-Orpheus-Show-faa883027b5849e9af8e9d3b349d74ad">View the Notes</a></button>
                    </div>
                </div>
            </div>

            <Episodes />
            <Team />
            <Footer />

        </>

        
    
    );
}
