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
            <Row className={styles.card_container}>
                {team.map((item) => (
                    <Col className={styles.col}>
                        <Card className={styles.card}>
                            <CardImg
                                alt="Card image cap"
                                src="https://i.imgur.com/MBkP9hM.png"
                                // top
                                width="50px"
                                className="rounded-circle"
                            />
                            <CardBody>
                                <CardTitle tag="h5" className="text-center">
                                    {item.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted text-center"
                                    tag="h6"
                                >
                                    {item.title}
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Team;
