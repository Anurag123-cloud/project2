import styles from "./Navigation.module.css"

const Navigation=()=>{

    return <nav className={`${styles.Navigation} container`}>
        <div className="logo">
            <img src="/Frame 2 1.png" alt=""/>
        </div>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </nav>




}

export default Navigation;