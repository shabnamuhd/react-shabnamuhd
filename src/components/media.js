import styles from "./media.module.css";
import {Button } from "./button";
export const Media=props=>{
    return (
    <div className={styles.media}>
        <h1>{props.heading}</h1>
<Description description={props.description}/>
<Button text={props.buttonText}/>
    </div>
    );

};
const Description=props=>{
    return (
    <p className={styles.description}>
        {props.description}
        
    </p>
    );

}
