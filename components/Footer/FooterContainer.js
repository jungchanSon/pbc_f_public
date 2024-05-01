import {Container, Nav, Navbar} from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const HeaderContainer = () => {
    return (
        <div className={styles.container}>
           <hr/>
            <span className={"text-white"}>CONTACT: krdvjung@gmail.com</span>
            <br/>
            <p className={"text-white"}>This product isn&apos;t affiliated with or endorsed by Grinding Gear Games in any way.</p>
        </div>
    )

}

export default HeaderContainer