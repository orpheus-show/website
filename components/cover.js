import homeStyles from '../styles/Home.module.css';

export default function Cover () {
    return (
        <div className={homeStyles.container}>
            <div className={homeStyles.left}>

                <div className={homeStyles.desc}>
                    <h3> About </h3>
                    <div>
                        <p className={homeStyles.subtitle}>
                          The Orephus show is an unoffical podast made by  Members of the  #podcast Channel. <br /> Its idea to showcase what makes Hack club so speical.
                        </p>
                    </div>
                </div>

            </div>
            <div className={homeStyles.right}>
            
            </div>
        </div>
    );
}