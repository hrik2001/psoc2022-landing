import React from "react";
import projects from "../data/Projects";
import styles from "../styles/Project.module.scss";

const isLetter = (c: String) => {
  return c.toLowerCase() != c.toUpperCase();
};

const returnInitials = (name: String) => {
  let initials = "";
  let splitArray = name.split(" ");
  if (splitArray.length > 1) {
    let i = splitArray.length;
    for (let i = 0; i < splitArray.length; i++) {
      initials += splitArray[i][0];
    }
  } else {
    let i = 0;
    for (let i = 0; i < 2; i++) {
      initials += splitArray[0][i];
    }
  }
  return initials;
};
const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectHeading}>
        <h1>Notable Projects</h1>
      </div>
      <div className={styles.projectContainerWrapper}>
        <div className={styles.projectContainer}>
          {projects.map((item: ProjectsProps, index) => {
            return (
              <figure key={index}>
                <a href={item.src}>
                  <div
                    className={
                      item.img ? styles.projectImgContainer : styles.projectInitialContainer
                    }
                  >
                    {item.img ? <img src={item.img} alt="" /> : returnInitials(item.name)}
                  </div>

                  <h4 className={styles.projectName}>{item.name}</h4>
                </a>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
