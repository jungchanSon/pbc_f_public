import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card";
import {Button} from "./ui/button";
import { Loader2 } from "lucide-react"
import {ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {Separator} from "./ui/separator";
import {Pagination, PaginationContent, PaginationItem} from "./ui/pagination";
import {Input} from "./ui/input";
import {useEffect, useState} from "react";
import BuildStore from "../store/BuildStore";

const TotalCostCard = () => {
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
    return(
        <Card
            className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
        >
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        Total Cost
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className={"text-lg"}>
                    Min Cost
                </div>
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
            </CardContent>
            <CardContent className="p-6 text-sm">
                <div className={"text-lg"}>
                    Max Cost
                </div>
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
            </CardContent>
        </Card>
    )
}

export default TotalCostCard;