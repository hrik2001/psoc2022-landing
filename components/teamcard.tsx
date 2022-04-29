import style from '../styles/Team.module.scss'

function TeamCard(props: TeamMember){
    return(
        <div className={style.TeamCard}>
            <div className={style.ImageContainer}>
                <img className={style.TeamImage} src={props.pic} />
            </div>
            <div className={style.TeamDescriptionContainer}>
                <h2 className={style.TeamHeading}>{props.name}</h2>
                <p className={style.TeamDesignation}>{props.designation}</p>
                <div className={style.ContactContainer}>
                    {
                        (props.github) ?
                        <div className={style.ContainerLogo}>
                            <a href={props.github}>
                                <img src='/img/github.svg' />
                            </a>
                        </div> : null
                        
                    }
                    {
                        (props.linkedin) ?
                        <div className={style.ContainerLogo}>
                            <a href={props.linkedin}>
                                <img src='/img/linkedin.svg' />
                            </a>
                        </div> : null
                        
                    }
                    {
                        (props.twitter) ?
                        <div className={style.ContainerLogo}>
                            <a href={props.twitter}>
                                <img src='/img/twitter.svg' />
                            </a>
                        </div> : null
                        
                    }
                    {
                        (props.email) ?
                        <div className={style.ContainerLogo}>
                            <a href={`mailto:{props.github}`}>
                                <img src='/img/email.svg' />
                            </a>
                        </div> : null
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamCard;
