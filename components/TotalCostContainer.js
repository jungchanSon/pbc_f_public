import CostStore from "../store/CostStore";
import BuildStore from "../store/BuildStore";
import {useEffect, useState} from "react";
import handler from "../pages/api/hello";
import {log} from "next/dist/server/typescript/utils";

const TotalCostContainer = () => {
    // const {
    //     totalCost,
    // } = CostStore()

    const [total, setTotal] = useState({})

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

    useEffect( ()=>{
        let temp = {}

        for (const item of Helmet) {
            if(item.cost == 0) {
                continue
            }
            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }
        }

        for (const item of Body) {
            if(item.cost == 0) {
                continue
            }
            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }
        }

        for (const item of Belt) {
            if(item.cost == 0) {
                continue
            }
            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }

        }

        for (const item of Glove) {
            if(item.cost == 0) {
                continue
            }
            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }

        }

        for (const item of Boots) {
            if(item.cost == 0) {
                continue
            }

            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }

        }

        for (const item of Ring) {
            if(item.cost == 0) {
                continue
            }

            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }

        }

        for (const item of Amulet) {
            if(item.cost == 0) {
                continue
            }

            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }

        }

        for (const item of Weapon) {
            if(item.cost == 0) {
                continue
            }

            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }

        }

        for (const item of Flasks) {
            if(item.cost == 0) {
                continue
            }

            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }
        }
        for (const item of Jewels) {
            if(item.cost == 0) {
                continue
            }
            const cost = item.cost
            const unit = item.unit

            if (temp[unit]) {
                temp[unit] += cost
            } else {
                temp[unit] = cost
            }
        }

        setTotal(temp)
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
            <h1> total cost</h1>
            {
                Object.keys(total).map((item, key)=> (
                    <div key={key}>
                        {item != "undefined" ?
                            <div>
                                {item} : {total[item]} <hr/>
                            </div> : null
                        }
                    </div>

                ))
            }
        </>
    )

}

export default TotalCostContainer