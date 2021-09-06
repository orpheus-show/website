import homeStyles from '../styles/Home.module.css'
import episodeStyles from '../styles/EpisodeContainer.module.css'

import Cover from '../components/Cover'
import Episode from '../components/Episode'
import Team from '../components/Team'
import Footer from '../components/Footer'

// buttons
import ListenNow from '../components/buttons/ListenNow'
import Notes from '../components/buttons/ViewNotes'
import Slack from '../components/buttons/Slack'
import Repo from '../components/buttons/Repo'

import axios from 'axios'

export default function Home(props) {
  const previousEpisodes = props.episodeData
  return (
    <div>
      <div className={homeStyles.container}>
        <div className={homeStyles.landing}>
          <div className={homeStyles.left}>
            <div className={homeStyles.desc}>
              <h1 className={homeStyles.title}>The Orpheus Show</h1>
              <div>
                <h3 className={homeStyles.subtitle}>
                  Brought to you by the Hack Club Podcast Team
                  <br />
                </h3>
              </div>
            </div>
            <div className={homeStyles.about}>
              <h2>About</h2>
              <h3 className={homeStyles.subtitle}>
                Welcome to the Orpheus Show, Hack Club's community-run podcast!
                Join us on our journey as we talk about programming,
                engineering, design, psychology, food and life. <br /> <br />{' '}
                Our aim is to discover the people who make up Hack Club, talk
                about their life, their experiences and what they have to share
                with the rest of the community.
              </h3>
            </div>

            <div className={homeStyles.about}>
              <h2>Who is this podcast for?</h2>
              <h3 className={homeStyles.subtitle}>
                Although this podcast is open for everyone, the conversations
                and ideas would most likely be centred around the Hack Club
                community. This podcast is for Hack Clubbers, by Hack Clubbers
                and we intend to be the voice of fellow Hack Clubbers.
              </h3>
            </div>
            <h3 className={homeStyles.lead}>
              If you haven't already,{' '}
              <a href="https://hackclub.com/slack/" target="_blank">
                join the Hack Club community
              </a>{' '}
              today!
            </h3>
          </div>

          <div className={homeStyles.right}>
            <Cover />
            <div className={homeStyles.buttonDiv}>
              <ListenNow />
              <Repo />
              <Slack />
              <Notes />
            </div>
          { //<h3 style={{ color: 'white' }}>
             // Listen to the latest episode here!
           // </h3>

          // <!--- <iframe
           //   src="https://anchor.fm/the-orpheus-show/embed"
         //     height="200"
         //     width="105%"
          //    frameborder="no"
          //    scrolling="no"
          //  ></iframe>
         // </div> }
       // </div>

        <div className={homeStyles.bottom}>
          <Team />
          <div className={episodeStyles.container}>
            <h1>Episodes</h1>
            <h3 className={homeStyles.subtitle}>
              Check out the latest episodes from The Orpheus Show!
            </h3>
            <div className={episodeStyles.epList}>
              {previousEpisodes.map((ep, i) => (
                <Episode key={i} details={ep} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const getPodcastData = await axios.get(
    'https://podcast.hackclub.com/api/server'
  )
  const podcastData = getPodcastData.data.data
  const episodeData = getPodcastData.data.data.episodes.items

  return {
    props: {
      podcastData,
      episodeData
    },
    revalidate: 300
  }
}
