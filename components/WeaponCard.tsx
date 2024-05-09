import BuildStore from "../store/BuildStore";
import TradeConditionStore from "../store/TradeConditionStore";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card";
import {Progress} from "./ui/progress";
import toTradePage from "../api/toTradePage";
import {Badge} from "./ui/badge";
import {Button} from "./ui/button";
import {setRarity} from "@/components/common";

const WeaponCard = () => {
    const {Weapon, clickWeaponOpt, setWeapon, setCostOfWeapon} = BuildStore();
    const {OnOffCondition, DateCondition, } = TradeConditionStore()
    const {setOnOffCondition, setDateCondition} = TradeConditionStore()

    const clickOpt = (itemKey, optionKey) => {
        let temp = Weapon[itemKey].selectedOpts
        temp[optionKey] *= -1
        var tempH = Weapon
        tempH[itemKey].selectedOpts = temp
        setWeapon(tempH)
    }
    const clickOpt2 = (itemKey) => {
        Weapon[itemKey].checkAllRes = !Weapon[itemKey].checkAllRes
        setWeapon(Weapon)
    }
    const searchOneItem = (item) => {
        // let res = handler(item, OnOffCondition, DateCondition)
        // if(res != "no data") {
        //     await setCostOfWeapon({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
        // } else {
        //     await setCostOfWeapon({uid: item.uniqueId, cost: null, unit: null})
        // }

    }
    if(Weapon)
        return (
            <>
                {Weapon ? Weapon.map((item, itemKey) => (
                    <Card key={itemKey} x-chunk="dashboard-05-chunk-2">
                        <CardHeader className="pb-2">
                            {/*<Card.Title className={setRarity(item.rarity)}> {item.name}</Card.Title>*/}
                            {
                                item.hasOwnProperty("unit") && item.unit != "" ?
                                    (item.cost != null
                                        ?
                                        <Badge className={"px-4"}>Success</Badge>
                                        :
                                        <Badge variant="destructive" className={"px-4"}>Fail</Badge>)
                                    :
                                    null
                            }
                            <CardDescription>Weapon</CardDescription>
                            <CardTitle className={"text-xl "+setRarity(item.rarity)}>{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {item ? item.options.map((opt, optionKey) => (
                                item.selectedOpts[optionKey] === 1 ?
                                    <div className="text-m text-muted-foreground my-2" key = {optionKey} onClick={() => clickOpt(itemKey, optionKey)}>
                                        {(item.implicits == optionKey) ? <hr/> : null}  <Badge>checked</Badge>
                                        {opt}
                                    </div> :
                                    item.selectedOpts[optionKey] === 0 ?
                                        <div className="text-m text-muted-foreground my-2 " key={optionKey} onClick={() => clickOpt(itemKey, optionKey)}>
                                            {(item.implicits == optionKey) ? <hr/> : null}
                                            <Badge variant="secondary">cant check</Badge>
                                            {opt}
                                        </div> :
                                        <div className="text-m text-muted-foreground my-2" key = {optionKey} onClick={() => clickOpt(itemKey, optionKey)}>
                                            {(item.implicits == optionKey) ? <hr/> : null}
                                            {opt}
                                        </div>
                            )):null}
                        </CardContent>
                        <CardContent>
                            <Button onClick={()=>toTradePage(item)} >Go To Trade Page</Button>
                        </CardContent>
                        <CardFooter>
                            {item.cost && item.cost.length > 0 ?
                                <div>
                                    {item.cost.map( (i, key) => (
                                        <div key={key}>
                                            cost {key+1} = {i} {item.unit[key]}
                                        </div>
                                    ))}
                                    <br/>
                                </div>
                                :
                                null
                            }
                        </CardFooter>
                    </Card>
                )): null}
            </>
        )
}

export default WeaponCard