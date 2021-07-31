import episodeStyles from '../styles/Episode.module.css';

const Episode = ({details}) => {
    return (  
        <div className={episodeStyles.container}>
            <img src={details.img} className={episodeStyles.episodePFP}/>
            <div className={episodeStyles.info}>
                <h3 className={episodeStyles.name}>
                    {details.name}
                </h3>
                <h4 className={episodeStyles.date}>
                    {details.date}
                </h4>
            </div>
        </div>
    )
}

export default Episode
