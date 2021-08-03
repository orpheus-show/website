import teamStyles from '../styles/Team.module.css';
import homeStyles from '../styles/Home.module.css';

import Image from "next/image";

const members = [
    {
        "name": "Arav",
        "desc": "Host/Ops",
        "link": "https://twitter.com/heyarav",
        "image": "arav.jpg"
    },
    {
        "name": "Deven",
        "desc": "Operations",
        "link": "https://devenjadhav.com",
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
    },
    {
      "name": "Asa",
        "desc": "Development",
        "link": "https://anglesideangle.github.io",
        "image": "asa.png"
    },
      {
      "name": "Hugo",
        "desc": "Social Programs Lead",
        "link": "https://podcast.hackclub.com",
        "image": "corgi.png"
    },
    {
      "name": "Skye",
        "desc": "Helper",
        "link": "https://podcast.hackclub.com",
        "image": "placeholder.png"
    }
]

const Team = () => {

    return (
        <div className={teamStyles.container}>
            <h1>Team</h1>
            <h3 className={homeStyles.subtitle}>Thanks to our amazing team members that made The Orpheus Show possible!</h3>
            <ul className={teamStyles.teamList}>
                {members.map(member => (
                    <li className={teamStyles.teamMember}>
                        <a rel="noreferrer" href={member.link} target="_blank">
                            <Image height={75} width={75} alt={`${member.name}'s profile picture`} src={`/team-members/${member.image}`} className={teamStyles.teamPFP} />
                        
                            <div className={teamStyles.info}>
                                <h3 className={teamStyles.teamName}>{member.name}</h3>
                                <h4 className={teamStyles.teamDesc}>{member.desc}</h4>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            <h4>Want to join the team? Join our <a href='https://hackclub.slack.com/archives/C029KLH2UCU' target="_blank">slack channel</a>  and say hello!</h4>

        </div>
    );
}

export default Team;
