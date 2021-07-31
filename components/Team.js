import teamStyles from '../styles/Team.module.css';

const Team = () => {
    return (
        <div className={teamStyles.container}>
            <h1>Team</h1>
            <h3>Thanks to our amazing team members that made The Orpheus Show possible!</h3>
            <ul className={teamStyles.teamList}>
                <li className={teamStyles.teamMember}>
                    <img src="/team-members/warren.png" className={teamStyles.teamPFP}/>
                    <h3>
                        Warren
                        <br />
                        Developer
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Team;