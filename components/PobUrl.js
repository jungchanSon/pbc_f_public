import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import styles from "../styles/Home.module.css";

const PobUrl = () => {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><h2>PobUrl</h2></Form.Label>
                <Form.Control as="textarea" rows={3} className={styles.textarea}/>
                <Button>Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default PobUrl;