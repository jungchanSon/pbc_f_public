import {useState} from "react";
import JewelStore from "../store/Jewel";
import BuildStore from "../store/BuildStore";
import ApiCntStore from "../store/ApiCntStore";
import {Col, Row} from "react-bootstrap";
import ItemBox from "./ItemBox";

const FlaskContainer = () => {
    const [cur, setCur] = useState(0)
    const {Jewel} = JewelStore();
    const {Flasks} = BuildStore();
    const {CurrentCnt, MaxCnt, setCnt, upCnt} = ApiCntStore();

    if ( Flasks.length > 0 )
    return (
        <>
            <h1> Flasks 🍶 </h1>
            <Row xs={1} md={3} lg={5} className="g-4">
                {Flasks ? Flasks.map((item, key) => (
                    <Col key={key} >
                        <ItemBox
                            key={key}
                            info={item}
                            id={key}
                            cur={cur}
                        />
                    </Col>
                )) : null }
            </Row>
        </>
    )
}

export default FlaskContainer