import teamStyles from '../styles/Team.module.css';
import homeStyles from '../styles/Home.module.css';

import Image from "next/image";

const members = [
    {
        "name": "Arav",
        "desc": "Host",
        "link": "https://twitter.com/heyarav",
        "image": "arav.jpg"
    },
    {
        "name": "Deven",
        "desc": "Operations",
        "link": "https://github.com/devenjadhav",
        "image": "deven.jpg"
    },
    {
        "name": "Arcade",
        "desc": "Development",
        "link": "https://github.com/l3gacyb3ta",
        "image": "arc.jpg"
    },
    {
        "name": "Arash",
        "desc": "Development",
        "link": "https://github.com/arashnrim",
        "image": "arash.jpg"
    },
    {
        "name": "Warren",
        "desc": "Development",
        "link": "https://github.com/NebuDev14",
        "image": "warren.png"
    }
]

const Team = () => {
    
    return (
        <div className={teamStyles.container}>
            <h1>Team</h1>
            <h3 className={homeStyles.subtitle}>Thanks to our amazing team members that made The Orpheus Show possible!</h3>
            <ul className={teamStyles.teamList}>
                ${members.map(member => (
                    <li className={teamStyles.teamMember}>
                        <a rel="noreferrer" href={member.link} target="_blank">
                            <Image height={75} width={75} alt={`${member.name}'s profile picture`} src={`/team-members/${member.image}`} className={teamStyles.teamPFP}/>
                        </a>
                        <div className={teamStyles.info}>
                            <h3 className={teamStyles.teamName}>{member.name}</h3>
                            <h4 className={teamStyles.teamDesc}>{member.desc}</h4>
                        </div>
                    </li>
                ))};
            </ul>
        </div>
    );
}

export default Team;
