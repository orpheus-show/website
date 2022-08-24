import teamStyles from '../styles/Team.module.css'
import homeStyles from '../styles/Home.module.css'

import Image from 'next/image'

const members = [
  {
    name: 'Deven',
    desc: 'Co-Host \n Operations',
    link: 'https://devenjadhav.com',
    image: 'deven.jpg'
  }, 
    {
    name: 'Jason',
    desc: 'Co-host/roduction',
    link: 'https://jasonaa.me/',
    image: 'jason.jpg'
  },

{
    name: 'Arav',
    desc: 'Co-Host \n Operations',
    link: 'https://twitter.com/heyarav',
    image: 'arav.jpg'
  },
 
  {
    name: 'Warren',
    desc: 'Co-Host/ops \n Development',
    link: 'https://github.com/NebuDev14',
    image: 'warren.png'
  },
  {
    name: 'Arcade',
    desc: 'Development',
    link: 'https://github.com/l3gacyb3ta',
    image: 'arc.jpg'
  },
  {
    name: 'Arash',
    desc: 'Development',
    link: 'https://github.com/arashnrim',
    image: 'arash.jpg'
  },
  {
    name: 'Asa',
    desc: 'Development',
    link: 'https://anglesideangle.github.io',
    image: 'asa.png'
  },
  {
    name: 'Hugo',
    desc: 'Marketing',
    link: 'http://twitter.com/rpitechguy',
    image: 'corgi.png'
  },
  {
    name: 'Rebecca',
    desc: 'Operations',
    link: 'https://rbccawang.com/',
    image: 'breadrolls.png'
  },
  {
    name: 'Orpheus',
    desc: 'Team Mascot',
    link: 'https://hackclub.com',
    image: 'orpheus.png'
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
    </div>
  )
}

export default Team
