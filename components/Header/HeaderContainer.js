import {Container, Nav, Navbar} from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const HeaderContainer = () => {
    return (
        <div className={styles.container}>
            <Navbar className={"justify-content-between "}>
                <Navbar.Brand  className={"text-white"}>
                    <Link href="/" className={"text-white"}><h1>Calculate Poe Build Cost</h1></Link>
                </Navbar.Brand>
                <Nav className="justify-content-end" >
                    <Nav.Item className={"mx-1"}> <Link href="/" className={"text-white"}>Home</Link> </Nav.Item>
                    |
                    <Nav.Item className={"mx-1"}> <Link href="/how" className={"text-white"}>How To Use</Link> </Nav.Item>
                    |
                    <Nav.Item className={"mx-1"}> <Link href="/calc" className={"text-white"}>Calc Cost</Link> </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )

}

export default HeaderContainer