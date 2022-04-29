import style from '../styles/Team.module.scss'
import TeamCard from './teamcard';
import data from '../data/Team';

function TeamSection(){
    return(
        <section className={style.TeamSection}>
            <div className={style.sectionTitle}>
                <h2>PSoC Team</h2>
                <div className={style.underline}></div>
            </div>
            <div className={style.CardSec}>
                {
                    data.map(
                        (i) => {
                            return <TeamCard {...i} />
                        }
                    )
                }
            </div>
        </section>
    )
}

export default TeamSection;
