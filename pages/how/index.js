import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {Badge, Button, Card, Stack} from "react-bootstrap";
import Link from "next/link";

const How = () => {

    return (
        <div className={styles.container}>
            <h2> step 1 : Copy Pob Code (<Link target={"_blank"} href="https://poe.ninja">poe.ninja</Link>)</h2>
            <br/>
            <Image
            src="/how/step1.png"
            alt="copy pob code"
            width={500}
            height={300}
            style={{width: "90%", height: "50vh"}}></Image>
            <hr/>
            <h2> step 2 : Paste Pob code and submit </h2>
            <br/>
            <Image
                src="/how/step2.png"
                alt="paste code and submit"
                width={500}
                height={300}
                style={{width: "90%", height: "40vh"}}></Image>
            <hr/>
            <h2> step 3 : check detail options (you can check options to click) </h2>
            <div className={"d-flex justify-content-center align-items-center "}>
                <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                            <Badge bg="success" className={"px-4"}>When finish search</Badge>
                        <Card.Body>
                                <Card.Title> Item Name</Card.Title>
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <span className={"bg-success"}>implicit options (checked)</span>
                            <span >implicit options (unchecked)</span>
                            <span className={"bg-secondary"}>implicit options (can&apos;t check)</span>
                        </Stack>
                        <hr/>
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            <span className={"bg-success"}>explicit options (checked)</span>
                            <span >explicit options (unchecked)</span>
                            <span className={"bg-secondary"}>explicit options (can&apos;t check)</span>
                        </Stack>
                        {
                        <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                <hr/>
                                <span className={"px-2 align-content-center mx-auto bg-info"}>
                                         All Resistance : 70
                                </span>
                        </Stack>

                        }
                        <hr/>
                    <Card.Body>
                            Cost: 10 divine (result)
                    </Card.Body>
                </Card>
            </div>
            <hr/>
            <h2> step 4 : Press button <Button>Calculate cost</Button></h2>
            <hr/>
            <h2> step 5 : Check Cost at the bottom part</h2>
            <hr/>
        </div>

    )

}

export default How;