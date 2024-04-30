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
            <h2> total cost</h2>
            <h2> Min Cost</h2>
            {
                Object.keys(minTotal).map((item, key)=> (
                    <div key={key}>
                        {item != "undefined" ?
                            <div>
                                {item} : {minTotal[item]} <hr/>
                            </div> : null
                        }
                    </div>

                ))
            }

            <h2> Max Cost</h2>
            {
                Object.keys(maxTotal).map((item, key)=> (
                    <div key={key}>
                        {item != "undefined" ?
                            <div>
                                {item} : {maxTotal[item]} <hr/>
                            </div> : null
                        }
                    </div>

                ))
            }
        </>
    )

}

export default TotalCostContainer