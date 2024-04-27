import BuildStore from "../../store/BuildStore";
import {Badge, Card, Row, Stack} from "react-bootstrap";
import {setRarity} from "./common";
import Link from "next/link";

const GloveCard = () => {

    const {Glove, clickGloveOpt, setGlove} = BuildStore();

    const clickOpt = (itemKey, optionKey) => {
        let temp = Glove[itemKey].selectedOpts
        temp[optionKey] *= -1
        var tempH = Glove
        tempH[itemKey].selectedOpts = temp
        setGlove(tempH)

    }
    const clickOpt2 = (itemKey) => {
        Glove[itemKey].checkAllRes = !Glove[itemKey].checkAllRes
        setGlove(Glove)
    }
    if(Glove)
    return (
        <>
            <Row xs={1} md={3} lg={5} className="g-4 justify-content-center">
                {Glove ? Glove.map((item, itemKey) => (
                    <Card key={itemKey} border="primary" bg="dark" text="white" style={{width: '18rem'}}>
                        {/*name*/}
                        {
                            item.hasOwnProperty("unit") && item.unit != "" ?
                                (item.cost != null
                                    ?
                                    <Badge bg="success" className={"px-4"}>Success</Badge>
                                    :
                                    <Badge bg="danger" className={"px-4"}>Fail</Badge>)
                                :
                                null
                        }
                        <Card.Body>
                            <Card.Title className={setRarity(item.rarity)}>{item.name}</Card.Title>
                            {item.hasOwnProperty("rid")?
                                <Badge bg="secondary">
                                    <Link href={"https://poe.game.daum.net/trade/search/Necropolis/"+item.rid} target={"_blank"}>
                                        trade
                                    </Link>
                                </Badge>
                                :null}
                        </Card.Body>
                        <hr/>
                        {/*optinos*/}
                        <Stack gap={1} className="px-2 align-items-center mx-auto">
                            {item ? item.options.map((opt, optionKey) => (
                                item.selectedOpts[optionKey] === 1 ?
                                    <div key = {optionKey}>
                                        {(item.implicits == optionKey) ? <hr/> : null}
                                        <span className={"bg-success"} onClick={() => clickOpt(itemKey, optionKey)}>{opt}</span>
                                    </div> :
                                    item.selectedOpts[optionKey] === 0 ?
                                        <div key={optionKey}>
                                            {(item.implicits == optionKey) ? <hr/> : null}
                                            <span className={"bg-secondary"} onClick={() => clickOpt(itemKey, optionKey)}>{opt}</span>
                                        </div> :
                                        <div key = {optionKey}>
                                            {(item.implicits == optionKey) ? <hr/> : null}
                                            <span onClick={() => clickOpt(itemKey, optionKey)}>{opt}</span>
                                        </div>
                            )):null}
                        </Stack>
                        {
                            item.allRes > 0 ?

                                item.checkAllRes ?
                                <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                    <hr/>
                                    <span className={"px-2 align-content-center mx-auto bg-info"}>
                                        All Resistance : {item.allRes}
                                    </span>
                                </Stack>
                                :
                                <Stack gap={1} className="px-2 align-items-center mx-auto" onClick={() => clickOpt2(itemKey)}>
                                    <hr/>
                                    <span className={"px-2 align-content-center mx-auto bg-danger"}>
                                    All Resistance : {item.allRes}
                                    </span>
                                </Stack>
                            : null
                        }
                        <hr/>
                        {/*cost*/}
                        {item.cost | item.unit ?
                            <Card.Body>
                                Cost: {item.cost} {item.unit}
                            </Card.Body>
                            :
                            null
                        }
                        {/*<button onClick={handleTestApi}>test api</button>*/}
                    </Card>

                )) : null}

            </Row>
        </>
    )
}

export default GloveCard