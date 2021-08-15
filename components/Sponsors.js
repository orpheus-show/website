import sponsorStyles from '../styles/Sponsors.module.css';
import homeStyles from '../styles/Home.module.css';

const Sponsors = () => {
    return (
        <div className={sponsorStyles.container}>
            <span className={sponsorStyles.title}>Sponsors</span>
            <br />
            <span className={homeStyles.subtitle}>Big thanks to our sponsors!</span>
            <div className={sponsorStyles.sponsorDiv}>
                <a href="https://stickermule.com" target="_blank" rel="noreferrer"><img src="/sponsors/sticker-mule-logo-white.png" alt="stickermule" className={sponsorStyles.sponsorLogo}/></a>
            </div>
        </div>
    );
}

export default Sponsors;