import BuildStore from "../../store/BuildStore";
import {Badge, Button, Card, Row, Stack} from "react-bootstrap";
import {setRarity} from "./common";
import Link from "next/link";
import TradeConditionStore from "../../store/TradeConditionStore";
import handler from "../../pages/api/hello";

const FlasksCard = () => {

    const {Flasks, clickFlasksOpt, setFlasks} = BuildStore();
    const {OnOffCondition, DateCondition, } = TradeConditionStore()
    const {setOnOffCondition, setDateCondition} = TradeConditionStore()
    const {setCostOfFlasks} = BuildStore()
    const clickOpt = (itemKey, optionKey) => {
        let temp = Flasks[itemKey].selectedOpts
        temp[optionKey] *= -1
        var tempH = Flasks
        tempH[itemKey].selectedOpts = temp
        setFlasks(tempH)

    }
    const searchOneItem = async (item) => {
        let res = await handler(item, OnOffCondition, DateCondition)
        if(res != "no data") {
            await setCostOfFlasks({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
        } else {
            await setCostOfFlasks({uid: item.uniqueId, cost: null, unit: null})
        }
    }
    if(Flasks)
    return (
        <>
            <Row xs={1} md={3} lg={5} className="g-4  justify-content-center">
                {Flasks ? Flasks.map((item, itemKey) => (
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
                            <Card.Title className={setRarity(item.rarity)}> {item.name}</Card.Title>

                            {item.hasOwnProperty("rid")?
                                <Badge bg="secondary">
                                    <Link href={"https://www.pathofexile.com/trade/search/Necropolis/"+item.rid} target={"_blank"}>
                                        trade
                                    </Link>
                                </Badge>
                                :null}
                        </Card.Body>
                        <Card.Body>
                            <Button variant="outline-primary" onClick={()=> searchOneItem(item)}>Individual item search</Button>
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
                        <hr/>
                        {/*cost*/}
                        {item.cost && item.cost.length > 0 ?
                            <Card.Body>
                                {item.cost.map( (i, key) => (
                                    <div key={key}>
                                        cost {key+1} = {i} {item.unit[key]}
                                    </div>
                                ))}
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

export default FlasksCard