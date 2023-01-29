import teamStyles from '../styles/Team.module.css'
import homeStyles from '../styles/Home.module.css'

import Image from 'next/image'

const members = [
  {
    name: 'Arav',
    desc: 'Co-Host \n Operations',
    link: 'https://github.com/tregsthedev',
    image: 'arav.jpg'
  },
  {
    name: 'Reese',
    desc: 'Co-host /n Operations',
    link: 'https://reeseric.ci',
    image: 'reesericci.png'
  },
  
    {
    name: 'Jason',
    desc: 'Co-host/Production',
    link: 'https://jasonaa.me/',
    image: 'jason.jpg'
  },



  {
    name: 'Arash',
    desc: 'Development',
    link: 'https://github.com/arashnrim',
    image: 'arash.jpg'
  },
 
  


  {
    name: 'Orpheus',
    desc: 'Team Mascot',
    link: 'https://hackclub.com',
    image: 'orpheus.png'
  }
]

const former_members = [
   {
    name: 'Asa',
    desc: ' ex  Development',
    link: 'https://anglesideangle.github.io',
    image: 'asa.png'
  },
  {
    name: 'Warren',
    desc: ' ex Co-Host/ops \n Development',
    link: 'https://github.com/NebuDev14',
    image: 'warren.png'
  },
  {
    name: 'Arcade',
    desc: ' ex Development',
    link: 'https://github.com/l3gacyb3ta',
    image: 'arc.jpg'
  },
    {
    name: 'Deven',
    desc: ' ex Co-Host \n Operations',
    link: 'https://devenjadhav.com',
    image: 'deven.jpg'
    }
  ]
  
  
 

const Team = () => {
  return (
    <div className={teamStyles.container}>
      <h1>Team</h1>
      <h3 className={homeStyles.subtitle}>
        Thanks to our amazing team members that made The Orpheus Show possible!
      </h3>
      <h3>
        Want to join our team? Join the{' '}
        <a
          href="https://hackclub.slack.com/archives/C029KLH2UCU"
          target="_blank"
          className={teamStyles.link}
          rel="noreferrer"
        >
          Slack channel
        </a>{' '}
     and find something to help with!
      </h3>
      <ul className={teamStyles.teamList}>
        {members.map((member, i) => (
          <li className={teamStyles.teamMember} key={i}>
            <a rel="noreferrer" href={member.link} target="_blank">
              <Image
                height={75}
                width={75}
                alt={`${member.name}'s profile picture`}
                src={`/team-members/${member.image}`}
                className={teamStyles.teamPFP}
              />

              <div className={teamStyles.info}>
                <h3 className={teamStyles.teamName}>{member.name}</h3>
                <h4 className={teamStyles.teamDesc}>{member.desc}</h4>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <br />
      <h2> Former team members </h2>
      <h3> Thanks to our amazing former team members that made The Orpheus Show possible! </h3>
      <ul className={teamStyles.teamList}>
        {former_members.map((former_fmember, i) => (
          <li className={teamStyles.teamMember} key={i}>
            <a rel="noreferrer" href={former_fmember.link} target="_blank">
              <Image
                height={75}
                width={75}
                alt={`${former_fmember.name}'s profile picture`}
                src={`/team-members/${former_fmember.image}`}
                className={teamStyles.teamPFP}
              />

              <div className={teamStyles.info}>
                <h3 className={teamStyles.teamName}>{former_fmember.name}</h3>
                <h4 className={teamStyles.teamDesc}>{former_fmember.desc}</h4>
              </div>
            </a>
          </li>
        ))}
      </ul>
  
    </div>
  )
}

export default Team
