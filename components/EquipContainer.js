import {Button, Col, ProgressBar, Row} from "react-bootstrap";
import ItemBox from "./ItemBox";
import {useState} from "react";
import JewelStore from "../store/Jewel";
import BuildStore from "../store/BuildStore";
import ApiCntStore from "../store/ApiCntStore";
import HelmetCard from "./ItemCards/HelmetCard";
import BodyCard from "./ItemCards/BodyCard";
import BeltCard from "./ItemCards/BeltCard";
import WeaponCard from "./ItemCards/WeaponCard";
import GloveCard from "./ItemCards/GloveCard";
import BootsCard from "./ItemCards/BootsCard";
import RingCard from "./ItemCards/RingCard";
import AmuletCard from "./ItemCards/AmuletCard";
import JewelCard from "./ItemCards/JewelCard";
import FlaskCard from "./ItemCards/FlaskCard";
import handler from "../pages/api/hello";
import CostStore from "../store/CostStore";
import TradeConditionStore from "../store/TradeConditionStore";

const   EquipContainer = () => {

    const [onOff, setOnOff] = useState("any");
    const [limitedDate, setLimitedDate] = useState("any");

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

    const {
        addTotalCost,
        totalCost,
        setTotalCost,
    } = CostStore()

    const {OnOffCondition, DateCondition} = TradeConditionStore()


    const manageTotalCost = (amount, currency) => {
        if (totalCost.hasOwnProperty(currency)){
            totalCost[currency] += amount
        } else {
            totalCost[currency] = amount
        }
        setTotalCost(totalCost)
    }
    const testHBtn = async (e) => {
        e.preventDefault()

        for (const item of Helmet) {
            let res = await handler(item, OnOffCondition, DateCondition)
            if(res != "no data") {
                await setCostOfHelmet({uid: item.uniqueId, cost: res.amount, unit: res.currency})
                await manageTotalCost(res.amount, res.currency)
            }
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        // for (const item of Body) {
        //     console.log('body request')
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfBody({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Belt) {
        //     console.log('belt request', item)
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfBelt({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Glove) {
        //     console.log('glove request')
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfGlove({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Boots) {
        //     console.log('boot request')
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfBoots({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Ring) {
        //     console.log("Ring request")
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfRing({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Amulet) {
        //     console.log("amulet request")
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfAmulet({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Weapon) {
        //     console.log("weapon request")
        //     console.log(item)
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfWeapon({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Jewels) {
        //     console.log("Jewels request")
        //     console.log(item)
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfJewels({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
        // for (const item of Flasks) {
        //     console.log("Flask request")
        //     let res = await handler(item, onOff)
        //     if(res != "no data") {
        //         await setCostOfFlasks({uid: item.uniqueId, cost: res.amount, unit: res.currency})
        //         await manageTotalCost(res.amount, res.currency)
        //     }
        //     await console.log(totalCost)
        // }
    }
    if (
        Helmet.length > 0 |
        Body.length > 0 |
        Belt.length > 0 |
        Weapon.length > 0 |
        Glove.length > 0 |
        Boots.length > 0 |
        Ring.length > 0 |
        Amulet.length > 0
    )
    return (
        <>
            <br/>
            {/*<Button onClick={testHBtn}> Calc All </Button>*/}
            <hr/>
            <br/>
            <h1> Equipments</h1>

            <hr/>
            <h2> Helmet </h2>
                <HelmetCard/>
            <hr/>
            <h2> Body </h2>
                <BodyCard/>
            <hr/>
            <h2> Belt </h2>
               <BeltCard/>
            <hr/>
            <h2> Glove </h2>
                <GloveCard/>
            <hr/>
            <h2> Boots </h2>
                <BootsCard/>
            <hr/>
            <h2> Weapon </h2>
                <WeaponCard/>
            <hr/>
            <h2> Ring </h2>
                <RingCard/>
            <hr/>
            <h2> Amulet </h2>
                <AmuletCard/>
            <hr/>
            <h2> Jewels </h2>
                <JewelCard/>
            <hr/>
            <h2> Flask </h2>
                <FlaskCard/>
            <hr/>
        </>
    );
}

export default EquipContainer