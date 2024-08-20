import styles from "./Button.module.css";



const Button = ({issingleButton,icon,text, ...rest}) => {

  return (
    <div>
      <div className={`${styles.containerButton}`}>
      <button {...rest} className={`${issingleButton ? styles.singleButton:styles.button1}`}>{icon}  {text}</button>
      </div>

        {/* <div className={`${styles.containerButton}`}>
        <button className={`${styles.singleButton}`}><MdEmail/>VIA EMAIL FORM</button>
        </div> */}
    </div>
  )
}

export default Button;
