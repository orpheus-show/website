import teamStyles from '../styles/Team.module.css';
import homeStyles from '../styles/Home.module.css';

import Image from "next/image";

const Team = () => {
    return (
        <div className={teamStyles.container}>
            <h1>Team</h1>
            <h3 className={homeStyles.subtitle}>Thanks to our amazing team members that made The Orpheus Show possible!</h3>
            <ul className={teamStyles.teamList}>
                <li className={teamStyles.teamMember}>
                    <a rel="noreferrer" href="https://twitter.com/heyarav" target="_blank">
                        <Image height={75} width={75} alt="Arav Profile Picture" src="/team-members/arav.jpg" className={teamStyles.teamPFP}/>
                    </a>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Arav</h3>
                        <h4 className={teamStyles.teamDesc}>Host</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <a rel="noreferrer" href="https://github.com/devenjadhav" target="_blank">
                        <Image height={75} width={75} alt="Deven Profile Picture" src="/team-members/deven.jpg" className={teamStyles.teamPFP}/>
                    </a>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Deven</h3>
                        <h4 className={teamStyles.teamDesc}>Operations</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <a rel="noreferrer" href="https://github.com/l3gacyb3ta" target="_blank">
                        <Image height={75} width={75} alt="Arcade Profile Picture" src="/team-members/arc.jpg" className={teamStyles.teamPFP}/>
                    </a>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Arcade</h3>
                        <h4 className={teamStyles.teamDesc}>Development</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <a rel="noreferrer" href="https://github.com/arashnrim" target="_blank">
                        <Image height={75} width={75} alt="Arash Profile Picture" src="/team-members/arash.jpg" className={teamStyles.teamPFP}/>
                    </a>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Arash</h3>
                        <h4 className={teamStyles.teamDesc}>Development</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <a rel="noreferrer" href="https://github.com/NebuDev14" target="_blank">
                        <Image height={75} width={75} alt="Warren Profile Picture" src="/team-members/warren.png" className={teamStyles.teamPFP}/>
                    </a>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Warren</h3>
                        <h4 className={teamStyles.teamDesc}>Development</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Team;
