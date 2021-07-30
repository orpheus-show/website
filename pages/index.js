import homeStyles from '../styles/Home.module.css';

import Cover from '../components/Cover';
import Episode from '../components/Episode';
import Dropdown from '../components/dropdown';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home () {
    return (
        <>
            <div className={homeStyles.container}>
                <div className={homeStyles.landing}>
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
                                The Orpheus Show is an unofficial podcast made by members of the <span className={homeStyles.channel}>#podcast</span> channel. <br /> <br /> Our goal is to show the world what makes Hack Club so special, and inspire others by sharing the stories of influential people in the community.
                            </h3>
                        </div>

                        <div className={homeStyles.about}>
                            <h2>Who is this podcast for?</h2>
                            <h3 className={homeStyles.subtitle}>
                                The Orpheus Show is not just made for Hack Clubbers everywhere, but for everyone else too.
                            </h3>
                        </div>

                    </div>
                    
                    <div className={homeStyles.right}>   
                        <Cover />
                        <div className={homeStyles.buttonDiv}>
                            <Dropdown />
                            <button className={homeStyles.btn} class = "button umami--click--signup-button"><a href="https://github.com/orpheuspod/www">View the Repo</a></button>
                            <button className={homeStyles.btn}><a href="https://hackclub.com/slack">Join the Slack</a></button>
                            <button className={homeStyles.btn}><a href="https://devenjadhav.notion.site/The-Orpheus-Show-faa883027b5849e9af8e9d3b349d74ad">View the Notes</a></button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </>

    );
}
