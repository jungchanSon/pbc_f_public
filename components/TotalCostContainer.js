import CostStore from "../store/CostStore";
import BuildStore from "../store/BuildStore";
import {useEffect, useState} from "react";

const TotalCostContainer = () => {
    // const {
    //     totalCost,
    // } = CostStore()

    const [minTotal, setMinTotal] = useState({})
    const [maxTotal, setMaxTotal] = useState({})

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

    function countMinMaxCost(item, minCost, maxCost) {
        let min_cost = Math.min(...item.cost)
        let max_cost = Math.max(...item.cost)

        let min_index = item.cost.indexOf(min_cost)
        let max_index = item.cost.indexOf(max_cost)

        let min_unit = item.unit[min_index]
        let max_unit = item.unit[max_index]

        if (minCost[min_unit]) {
            minCost[min_unit] += min_cost
        } else {
            minCost[min_unit] = min_cost
        }

        if (maxCost[max_unit]) {
            maxCost[max_unit] += max_cost
        } else {
            maxCost[max_unit] = max_cost
        }
    }

    useEffect( ()=>{
        let minCost = {}
        let maxCost = {}

        for (const item of Helmet) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Body) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Belt) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Glove) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Boots) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Ring) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Amulet) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Weapon) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        for (const item of Flasks) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }
        for (const item of Jewels) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            countMinMaxCost(item, minCost, maxCost);
        }

        setMinTotal(minCost)
        setMaxTotal(maxCost)
    }, [Helmet,
        Body,
        Belt,
        Glove,
        Boots,
        Ring,
        Amulet,
        Weapon,
        Flasks,
        Jewels,
    ])

    return (
        <>
            <h2> Total Cost</h2>
            <div style={{border: "solid 1px green", borderRadius: "10px"}} className={"p-3 m-3"}>
                <h3> Min Cost</h3>
                {
                    Object.keys(minTotal).map((item, key)=> (
                        <div key={key}>
                            {item != "undefined" ?
                                <div>
                                    {item} : {(minTotal[item].toFixed(1))} <hr/>
                                </div> : null
                            }
                        </div>
                    ))
                }
            </div>

            <div style={{border: "solid 1px red", borderRadius: "10px"}} className={"p-3 m-3"}>
                <h2> Max Cost</h2>
                {
                    Object.keys(maxTotal).map((item, key)=> (
                        <div key={key}>
                            {item != "undefined" ?
                                <div>
                                    {item} : {maxTotal[item].toFixed(1)} <hr/>
                                </div> : null
                            }
                        </div>

                    ))
                }
            </div>
        </>
    )

}

export default TotalCostContainer