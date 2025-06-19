import React from "react";
import skills from "../data/skills.json";
import history from "../data/history.json";
import styles from "./Experience.module.css";
function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imgsrc} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </div>
            ); 
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li className={styles.historyItem} key={id}>
                <img
                  src={historyItem.imgsrc}
                  alt={`${historyItem.organization} LOGO`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {`${historyItem.role} - ${historyItem.organization}`}{" "}
                  </h3>
                  <p>{` ${historyItem.start_date} - ${historyItem.end_date}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, index) => {
                      return <li key={index}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
