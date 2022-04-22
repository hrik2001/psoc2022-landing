import styles from '../styles/project.module.css'
import Link from "next/link";
import Image from "next/image";
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
    CardLink,
} from "reactstrap";

const project = [
    { src:"https://github.com/hrik2001/answer", name: "!answer", descr: "!answer is a discord bot that leverages state of the art artificial intelligence to serve your users in your discord guild. You can give the bot context paragraphs, from which the bot will reply to any questions of users." },

    { src:"https://github.com/aryan-basu/Pclub-Meet", name: "PClub-Meet", descr: "A Video-Meeting web application designed for the pclub core team meet." },    

    { src:"https://github.com/Ayush7614/Bundli-Frontend#bundli-frontend", name: "Bundli Frontend", descr: "Bundli-Frontend is an open-source project which contains different code for frontend Development with HTML, CSS, JS, REACT, ANGULAR and APIs etc. which makes your life easier for learning the frontend and makes your interest more in the frontend." }, 

    { src:"https://github.com/pankajkumarbij/easy-job-intern", name: "Easy Job Intern", descr: "Project to provide the best job and internship opportunities. Companies can post here open applications for jobs and internships so students can make their profiles and apply to multiple companies." },   
];


const Projects = () => {
    return (
        <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Notable Projects</h1>
                </div>
                <div className={styles.projects}>
                    <Card className={styles.cards}>
                    {project.map((item) => (
                        <CardBody className={styles.prj}>
                            <CardLink href={item.src}>
                                    <CardTitle tag="h2" className="text-center">
                                        {item.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-center"
                                        tag="h6"
                                    >
                                        {item.descr}
                                    </CardSubtitle>
                                    </CardLink>
                            </CardBody>
                        ))}
                    </Card>
                </div>
        </div>
    )
}

export default Projects