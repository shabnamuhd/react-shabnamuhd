import styles from "./button.module.css";


export function SubmitButton(props){
    return <button className={styles.submitBtn}>{props.text}</button>;
}
export function Button(props){

    return<button className={styles.button}>{props.text}</button>;
}
export function MyButton(){
    return<button className={styles.myBtn}>my</button>;
}
// export default Button;
