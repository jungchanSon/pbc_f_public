"use client"

import TradeConditionStore from "../store/TradeConditionStore";
import handler from "../api/setQuerry";
import BuildStore from "../store/BuildStore";
import {useEffect, useState} from "react";
import setQuerryToChrome from "../api/setQuerryToChrome";
import tradeSearchApi from "../api/tradeSearchApi";
import {RadioGroup, RadioGroupItem} from "./ui/radio-group";
import {Label} from "./ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";
import {Input} from "./ui/input";
import {Button} from "./ui/button";
import {Loader2} from "lucide-react";

const LimitedDate = {
    ANY: 'any',
    WEEK2: "2weeks",
    MONTH: "1month",
}

const OnOffCond = {
    ANY: "any",
    ONLINE: "online",
}

const TradeConditionContainer = ({ option }) => {
    const [progress, setProgress] = useState(0);
    const [progressLabel, setProgressLabel] = useState("");
    const [stopCalc, setStopCalc] = useState(false);
    const [stopBtn, setStopBtn] = useState(false)
    const [canCalc, setCanCalc] = useState(true)
    const [hide, setHide] = useState(true)

    const {OnOffCondition, DateCondition } = TradeConditionStore()
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

    useEffect(() => {
        console.log("asd")

        document.addEventListener("hide", function(event) {
            console.log("hide", event)
            setHide(false)
        });
        document.addEventListener("price", function(event) {
            console.log("ItemQueryResult", event)
            console.log("event.detail", event.detail)

        })
        document.dispatchEvent(new CustomEvent("hello", {
            detail: { name: "보라" }
        }));
    }, [])
    const setItemEventListener = (itemType) => {
        document.addEventListener(itemType.toUpperCase(), function(event) {
            console.log("ItemQueryResult", event)
            console.log("event.detail", event.detail)
        })
    }
    function delay(ms = 1000) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const calcBuildCost = async (e) => {
        e.preventDefault()
        // await setProgress(0)
        // await setStopCalc(false)
        setCanCalc(false)
        for (const item of Helmet) {
            if (stopCalc)
                break
            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                console.log("ItemQueryResult", event)
                console.log("event.detail", event.detail)
                if (event.detail.length > 0) {
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfHelmet({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                } else {
                    setCostOfHelmet({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Body) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfBody({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                } else {
                    setCostOfBody({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Belt) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfBelt({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfBelt({uid: item.uniqueId, cost: null, unit: null})
                }
                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Glove) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfGlove({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfGlove({uid: item.uniqueId, cost: null, unit: null})
                }
                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Boots) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfBoots({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfBoots({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Weapon) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfWeapon({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfWeapon({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Ring) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfRing({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfRing({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Amulet) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfAmulet({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfAmulet({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }

        for (const item of Jewels) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfJewels({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfJewels({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
            await setProgress(progress + 1/MAX_PROGRESS*100)
            await setProgressLabel(progress+"%")
        }
        for (const item of Flasks) {
            if (stopCalc)
                break

            let res = setQuerryToChrome(item, OnOffCondition, DateCondition)
            console.log(res)
            document.dispatchEvent(new CustomEvent("itemQuery", {
                detail: [res, item.uniqueId]
            }));

            const tempFn = (event) => {
                if (event.detail.length > 0) {
                    console.log("ItemQueryResult", event)
                    console.log("event.detail", event.detail)
                    let amount = [event.detail[1][0].amount, event.detail[1][1].amount, event.detail[1][2].amount ]
                    let currency = [event.detail[1][0].currency, event.detail[1][1].currency, event.detail[1][2].currency]
                    let rid = event.detail[0]
                    setCostOfFlasks({uid: item.uniqueId, cost: amount, unit: currency, rid: rid})
                    console.log(Helmet, amount, currency, rid)
                }else {
                    setCostOfFlasks({uid: item.uniqueId, cost: null, unit: null})
                }

                document.removeEventListener("GetItemPrice", tempFn)
            }
            document.addEventListener("GetItemPrice",tempFn )
            await delay(10000);
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
    const test = (e) =>{
        e.preventDefault()

        console.log(DateCondition);
        console.log(OnOffCondition);
    }
    return (
        <>
            <Card
                className="mb-3 overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
                <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            Search Options
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <form onSubmit={(e) => calcBuildCost(e)}>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3">
                            <RadioGroup defaultValue="date_any">
                                <label> Date Condition </label>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="date_any" id="date_any" onClick={() => setDateCondition(LimitedDate.ANY)}/>
                                    <Label htmlFor="date_any">Any</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="date_week2" id="date_week2" onClick={() => setDateCondition(LimitedDate.WEEK2)}/>
                                    <Label htmlFor="date_week2">~2Week</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="date_month" id="date_month" onClick={() => setDateCondition(LimitedDate.MONTH)}/>
                                    <Label htmlFor="date_month">~Month</Label>
                                </div>
                            </RadioGroup>

                            <RadioGroup defaultValue="onoff_any">
                                <label> Online / Offline </label>

                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="onoff_any" id="onoff_any" onClick={() => setOnOffCondition(OnOffCond.ANY)}/>
                                    <Label htmlFor="onoff_any">Any</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="onoff_online" id="onoff_online" onClick={() => setOnOffCondition(OnOffCond.ONLINE)}/>
                                    <Label htmlFor="onoff_online">Online</Label>
                                </div>
                            </RadioGroup>
                            {
                                canCalc?
                                    <Button>search from poe trade</Button>:
                                    <Button disabled>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>

                            }
                        </div>
                    </form>
                </CardContent>

                {/*    <row className={"px-4  justify-content-center"}>*/}
                {/*        Date Condition*/}
                {/*    </row>*/}
                {/*    <row className={"text-center"}>*/}
                {/*        <col className={"align-text"}>*/}
                {/*            <button className={"mx-2"} onClick={() => {setDateCondition(LimitedDate.ANY)}} disabled={DateCondition == "any" ? true : false}> All </button>*/}
                {/*            <button className={"mx-2"} onClick={() => {setDateCondition(LimitedDate.WEEK2)}} disabled={DateCondition == "2weeks" ? true : false}> ~ 2 Weeks </button>*/}
                {/*            <button className={"mx-2"} onClick={() => {setDateCondition(LimitedDate.MONTH)}} disabled={DateCondition == "1month" ? true : false}> ~ 1 Month </button>*/}
                {/*        </col>*/}
                {/*    </row>*/}
                {/*</col>*/}

                {/*<col className={"justify-content-center"}>*/}
                {/*    <row className={"px-4  justify-content-center"}>*/}
                {/*        Online Condition*/}
                {/*    </row>*/}
                {/*    <row>*/}
                {/*        <col className={"text-center"}>*/}
                {/*            <button className={"mx-2"} onClick={() => {setOnOffCondition(OnOffCond.ANY)}} disabled={OnOffCondition == "any" ? true : false}> All </button>*/}
                {/*            <button onClick={() => {setOnOffCondition(OnOffCond.ONLINE)}} disabled={OnOffCondition == "online" ? true : false}> Online</button>*/}
                {/*        </col>*/}
                {/*    </row>*/}
                {/*</col>*/}
                {/*<col className={"align-self-center text-center"}>*/}
                {/*    /!*<Button className={"py-3 m-1"} onClick={calcBuildCost}> Calculate Cost</Button>*!/*/}
                {/*    {*/}
                {/*        canCalc ?*/}
                {/*            <button className={"py-3 m-1"} onClick={calcBuildCost}> Calculate Cost</button>*/}
                {/*            :*/}
                {/*            <button className={"py-3 m-1"} disabled onClick={stopCalcCost}> Calculating Cost...</button>*/}
                {/*    }*/}
                {/*</col>*/}
            </Card>
        </>
    )

}

export default TradeConditionContainer;