import BuildStore from "../../store/BuildStore";
import TradeConditionStore from "../../store/TradeConditionStore";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Progress} from "../ui/progress";
import toTradePage from "../../api/toTradePage";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";

const AmuletCard = () => {
    const {Amulet, clickHelmetOpt, setAmulet, setCostOfAmulet} = BuildStore();
    const {OnOffCondition, DateCondition, } = TradeConditionStore()
    const {setOnOffCondition, setDateCondition} = TradeConditionStore()

    const clickOpt = (itemKey, optionKey) => {
        let temp = Amulet[itemKey].selectedOpts
        temp[optionKey] *= -1
        var tempH = Amulet
        tempH[itemKey].selectedOpts = temp
        setAmulet(tempH)
    }
    const clickOpt2 = (itemKey) => {
        Amulet[itemKey].checkAllRes = !Amulet[itemKey].checkAllRes
        setAmulet(Amulet)
    }
    const searchOneItem = (item) => {
        let res = handler(item, OnOffCondition, DateCondition)
        // if(res != "no data") {
        //     await setCostOfAmulet({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
        // } else {
        //     await setCostOfAmulet({uid: item.uniqueId, cost: null, unit: null})
        // }

    }
    if(Amulet)
    return (
        <>
            {Amulet ? Amulet.map((item, itemKey) => (
                <Card key={itemKey} x-chunk="dashboard-05-chunk-2">
                    <CardHeader className="pb-2">
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
                        <CardDescription>Amulet</CardDescription>
                        <CardTitle className="text-xl">{item.name}</CardTitle>
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

export default AmuletCard