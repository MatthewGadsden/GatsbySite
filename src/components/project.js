import React from "react"
import styles from "./project.module.css"

export default function Project(props) {
    return (
        <div className={styles.project}>
            <img src={props.projectimage} className={styles.projectimage} alt="" />
            <div className={styles.description}>
                <h2 className={styles.projectname}>{props.projectname}</h2>
                <h4 className={styles.description}>{props.description}</h4>
                <p className={styles.excerpt}>{props.excerpt}</p>
            </div>
        </div>
    )
}