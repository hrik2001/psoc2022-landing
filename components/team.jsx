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
    NavItem,
} from "reactstrap";

const team = [
    { src:"img/Shatabarto Bhattacharya.jpg", name: "Shatabarto Bhattacharya", title: "Some title", linkedin: "google.com" },
    { src:"img/Ritvik.jpg", name: "Ritvik Gupta", title: "Some title", linkedin: "google.com" },    
    { src:"img/ Aditi  Shandyal.jpg", name: "Aditi Shandyal", title: "Some title", linkedin: "google.com" },    
    { src:"img/Abhiroop Singh.jpg", name: "Abhiroop Singh", title: "Some title", linkedin: "google.com" },    
    { src:"img/Meghna Thakur.png", name: "Meghna Thakur", title: "Some title", linkedin: "google.com" },
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
                        <img src={s.src} alt="Limbo hack"></img>
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
