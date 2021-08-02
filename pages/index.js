import homeStyles from '../styles/Home.module.css';
import episodeStyles from '../styles/EpisodeContainer.module.css';

import Cover from '../components/Cover';
import Episode from '../components/Episode';

// buttons
import ListenNow from '../components/buttons/ListenNow';
import Notes from '../components/buttons/ViewNotes';
import Slack from '../components/buttons/Slack'
import Repo from '../components/buttons/Repo'

import Team from '../components/Team';
import Footer from '../components/Footer';

import axios from 'axios';

export default function Home (props) {

    return (
        <div>
            <div className={homeStyles.container}>
                <div className={homeStyles.landing}>
                    <div className={homeStyles.left}>
                
                        <div className={homeStyles.desc}>
                            <h1 className={homeStyles.title}>The Orpheus Show</h1>
                            <div>
                                <h2 className={homeStyles.subtitle}>
                                    Made by The Hack Club Podcast Team 
                                    <br />
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
                            <ListenNow />
                            <Repo />
                            <Slack /> 
                            <Notes />
                        </div>
                    </div>
                </div>

                <div className={homeStyles.bottom}>
                    <Team />

                    <div className={episodeStyles.container}>
                        <h1>Episodes</h1>
                        <h3 className={homeStyles.subtitle}>Check out the latest episodes from The Orpheus Show!</h3>
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    );
}

export const getStaticProps = async() => {

    var podcastData;
    var episodeData;
    await (async() => {
        const getPodcastData = await axios({
            method: 'GET',
            url: 'https://podcast.hackclub.com/api/server' // https://podcast.hackclub.com/api/server, http://localhost:3000/api/server 
        });
        podcastData = getPodcastData.data.data;
        episodeData = getPodcastData.data.data.episodes.items
    })();

    return {
        props: {
            podcastData,
            episodeData
        }
    }
}
