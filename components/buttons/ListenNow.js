import { useState } from 'react'
import styles from '../../styles/Button.module.css'

export default function ListenNow() {
  const [showMe, setShowMe] = useState(false)
  function toggle() {
    setShowMe(!showMe)
  }
  return (
    <div className={styles.button}>
      <button className={styles.btn} onClick={toggle}>
        Listen Now
      </button>
      {/*The bottom code should toggle on and off when the button is pressed*/}
      <div
        onClick={toggle}
        className={styles.div}
        style={{
          display: showMe ? 'block' : 'none'
        }}
      >
        <a
          rel="noreferrer"
          onClick={toggle}
          target="_blank"
          href="https://open.spotify.com/show/3q6wJccR9gjQZgOjr23PEJ"
        >
          Spotify
        </a>
        <hr />
        <a
          rel="noreferrer"
          onClick={toggle}
          target="_blank"
          href="https://www.youtube.com/channel/UCTES1rgjcKBjSUSJRpyLPzA"
        >
          YouTube
        </a>
        <hr />
        <a
          rel="noreferrer"
          onClick={toggle}
          target="_blank"
          href="https://podcasts.apple.com/us/podcast/the-orpheus-show/id1579785488"
        >
          Apple Podcasts
        </a>
        <hr />
        <a
          rel="noreferrer"
          onClick={toggle}
          target="_blank"
          href="https://music.amazon.com/podcasts/78453879-9d50-4a49-a11e-436f9cb277a2/the-orpheus-show"
        >
          Amazon Music
        </a>
        <hr />
        <a
          rel="noreferrer"
          onClick={toggle}
          target="_blank"
          href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy50cmFuc2lzdG9yLmZtL3RoZS1vcnBoZXVzLXNob3c"
        >
          Google{' '}
        </a>
        
      </div>
    </div>
  )
}
