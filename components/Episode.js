import episodeStyles from '../styles/Episode.module.css';

function Episode({details}) {
    return (  
        <button className={episodeStyles.btn}>
            <a href={details.external_urls.spotify} target="_blank">
                <div className={episodeStyles.container}>
                    <img src={details.images[1].url} className={episodeStyles.episodeThumbnail} />
                    <div className={episodeStyles.info}>
                        <h3 className={episodeStyles.name}>
                            {details.name}
                        </h3>
                        <h4 className={episodeStyles.date}>
                            {details.release_date}
                        </h4>
                    </div>
                </div>
            </a>
        </button>
    )
}

export default Episode;
