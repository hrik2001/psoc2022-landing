import styles from "../styles/team.module.css";
import placeholder from "../public/img/Ellipse 1.png";
import {
    Card,
    CardGroup,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardImg,
    Col,
    Row,
} from "reactstrap";

const team = [
    { name: "Mr. Person Guy", title: "Some title", linkedin: "google.com" },
    { name: "Mr. Person Guy", title: "Some title", linkedin: "google.com" },
    { name: "Mr. Person Guy", title: "Some title", linkedin: "google.com" },
    { name: "Mr. Person Guy", title: "Some title", linkedin: "google.com" },
    { name: "Mr. Person Guy", title: "Some title", linkedin: "google.com" },
];

const Team = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Team</h1>
            <hr />
            <h2 className={styles.subtitle}>
                Meet the people who make it work!
            </h2>
            
            <Row className={styles.members}>
                {team.map(s => (
                    <Col style={{maxWidth:"50%"}} className={styles.membercol}>
                    <div className={styles.member}>
                        <img src="https://i.imgur.com/MBkP9hM.png" alt="Limbo hack"></img>
                        <div className={styles.memberslink}>
                            <h3>{s.name}</h3>
                        </div>
                    </div>
                    {/* <Member name={s.Name} role={s.role} img={s.img} /> */}
                    </Col>
                ))}
             
            {/* </div> */}
            </Row>
        </div>
    );
};

export default Team;
