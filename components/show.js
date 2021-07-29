import homeStyles from '../styles/Home.module.css';

export default function Show () {
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.left}>

                <div className={homeStyles.desc}>
                    <h3> Who is the Podcast for?</h3>
                    <div>
                        <p className={homeStyles.subtitle}>
                         Its made for Hack Clubbers everywhere, yet its not just for them. It's for everyone, even if you're not in hack Club.
                        </p>
                    </div>
                </div>

            </div>
            <div className={homeStyles.right}>
            
            </div>
        </div>
    );
}