import BuildStore from "../../store/BuildStore";
import TradeConditionStore from "../../store/TradeConditionStore";
import handler from "../../../pbc_f_public_v2/api/setQuerry";
import toTradePage from "../../../pbc_f_public_v2/api/toTradePage";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Button} from "../ui/button";
import {Badge} from "../ui/badge";


const GloveCard = () => {

    const {Glove, clickGloveOpt, setGlove} = BuildStore();
    const {OnOffCondition, DateCondition, } = TradeConditionStore()
    const {setOnOffCondition, setDateCondition} = TradeConditionStore()
    const {setCostOfGlove} = BuildStore()
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
    const searchOneItem = async (item) => {
        let res = handler(item, OnOffCondition, DateCondition)
        if(res != "no data") {
            await setCostOfGlove({uid: item.uniqueId, cost: res.amount, unit: res.currency, rid: res.resultId})
        } else {
            await setCostOfGlove({uid: item.uniqueId, cost: null, unit: null})
        }
    }
    if(Glove)
    return (
        <>
            {Glove ? Glove.map((item, itemKey) => (
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
                        <CardDescription>Glove</CardDescription>
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

export default GloveCard