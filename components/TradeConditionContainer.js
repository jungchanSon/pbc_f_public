import {Button, Col, Form, ProgressBar, Row, Stack} from "react-bootstrap";
import TradeConditionStore from "../store/TradeConditionStore";
import {LimitedDate, OnOffCond} from "../types/TradeConditionType";
import handler from "../pages/api/hello";
import BuildStore from "../store/BuildStore";
import {useState} from "react";

const TradeConditionContainer = ({ option }) => {
    const [progress, setProgress] = useState(0);
    const [progressLabel, setProgressLabel] = useState("");
    const [stopCalc, setStopCalc] = useState(false);
    const [stopBtn, setStopBtn] = useState(false)
    const [canCalc, setCanCalc] = useState(true)

    const {OnOffCondition, DateCondition, } = TradeConditionStore()
    const {setOnOffCondition, setDateCondition} = TradeConditionStore()
    const {
        Build,
        Helmet,
        Body,
        Belt,
        Glove,
        Boots,
        Ring,
        Amulet,
        Weapon,
        Flasks,
        Jewels,
    } = BuildStore();
    const MAX_PROGRESS = Build.length

    const {
        setCostOfHelmet,
        setCostOfRing,
        setCostOfBody,
        setCostOfAmulet,
        setCostOfBelt,
        setCostOfBoots,
        setCostOfBuild,
        setCostOfFlasks,
        setCostOfGlove,
        setCostOfJewels,
        setCostOfWeapon,
    } = BuildStore()

    const calcBuildCost = async (e) => {
        e.preventDefault()
        // await setProgress(0)
        // await setStopCalc(false)
        setCanCalc(false)
        for (const item of Helmet) {
            if (stopCalc)
                break
            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfHelmet({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            } else {
                await setCostOfHelmet({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Body) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfBody({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfBody({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Belt) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfBelt({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfBelt({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Glove) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfGlove({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfGlove({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Boots) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfBoots({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfBoots({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Weapon) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfWeapon({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfWeapon({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Ring) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfRing({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfRing({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Amulet) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfAmulet({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            } else {
                await setCostOfAmulet({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }

        for (const item of Jewels) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfJewels({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Flasks) {
            if (stopCalc)
                break

            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfFlasks({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
            }else {
                await setCostOfFlasks({uid: item.uniqueId, cost: null, unit: null})
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }

        setCanCalc(true)
    }

    const stopCalcCost = (e) => {
        e.preventDefault()
        setStopCalc(true)
        setStopBtn(false)

    }

    if (Build.length > 0)
    return (
        <>
            <Row>
                <Col className={""}>
                    <Row className={"px-4  justify-content-center"}>
                        Date Condition
                    </Row>
                    <Row className={"text-center"}>
                        <Col className={"align-text"}>
                            <Button className={"mx-2"} onClick={() => {setDateCondition(LimitedDate.ANY)}} disabled={DateCondition == "any" ? true : false}> All </Button>
                            <Button className={"mx-2"} onClick={() => {setDateCondition(LimitedDate.WEEK2)}} disabled={DateCondition == "2weeks" ? true : false}> ~ 2 Weeks </Button>
                            <Button className={"mx-2"} onClick={() => {setDateCondition(LimitedDate.MONTH)}} disabled={DateCondition == "1month" ? true : false}> ~ 1 Month </Button>
                        </Col>
                    </Row>
                </Col>

                <Col className={"justify-content-center"}>
                    <Row className={"px-4  justify-content-center"}>
                        Online Condition
                    </Row>
                    <Row>
                        <Col className={"text-center"}>
                            <Button className={"mx-2"} onClick={() => {setOnOffCondition(OnOffCond.ANY)}} disabled={OnOffCondition == "any" ? true : false}> All </Button>
                            <Button onClick={() => {setOnOffCondition(OnOffCond.ONLINE)}} disabled={OnOffCondition == "online" ? true : false}> Online</Button>
                        </Col>
                    </Row>
                </Col>
                <Col className={"align-self-center text-center"}>
                    {/*<Button className={"py-3 m-1"} onClick={calcBuildCost}> Calculate Cost</Button>*/}
                    {
                        canCalc ?
                            <Button className={"py-3 m-1"} onClick={calcBuildCost}> Calculate Cost</Button>
                            :
                            <Button className={"py-3 m-1"} disabled onClick={stopCalcCost}> Calculating Cost...</Button>
                    }
                </Col>
            </Row>
            <br/>
            {/*{ progress ?*/}
            {/*    <div>*/}
            {/*        <h1> Progress </h1>*/}
            {/*        <ProgressBar now={progress} label={progressLabel}></ProgressBar>*/}
            {/*        <hr/>*/}
            {/*    </div>*/}
            {/*    : null*/}
            {/*}*/}
        </>
    )

}

export default TradeConditionContainer;