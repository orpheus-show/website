import episodeStyles from '../styles/Episode.module.css'
import Image from 'next/image'

function Episode({ details }) {
  return (
    <a
      href={details.external_urls.spotify}
      target="_blank"
      className={episodeStyles.link}
      rel="noreferrer"
    >
      <div className={episodeStyles.container}>
        <div className={episodeStyles.episodeThumbnailContainer}>
          <Image
            src={details.images[1].url}
            width={100}
            height={100}
            className={episodeStyles.episodeThumbnailImage}
          />
        </div>
        <div className={episodeStyles.info}>
          <h3 className={episodeStyles.name}>{details.name}</h3>
          <h4 className={episodeStyles.date}>{details.release_date}</h4>
        </div>
      </div>
    </a>
  )
}

export default Episode
