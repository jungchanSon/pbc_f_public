import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "./ui/card";
import {Button} from "./ui/button";
import {File, ListFilter, Loader2} from "lucide-react"
import {ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck} from "lucide-react";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu";
import {Separator} from "./ui/separator";
import {Pagination, PaginationContent, PaginationItem} from "./ui/pagination";
import {Input} from "./ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "./ui/table";
import {Badge} from "./ui/badge";
import {useEffect, useState} from "react";
import BuildStore from "../store/BuildStore";

const SumaryCard = () => {
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

    const itemSet = new Set()
    const [itemList, setItemList] = useState<any>([])
    useEffect( ()=>{
        for (const item of Helmet) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            
            itemSet.add(item)

            setItemList([...itemSet])
            
        }

        for (const item of Body) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Belt) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Glove) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Boots) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Ring) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Amulet) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Weapon) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }

        for (const item of Flasks) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }
        for (const item of Jewels) {
            if(item.cost==null||item.cost == 0) {
                continue
            }
            if (item in itemList){
                continue
            }
            itemSet.add(item)
            setItemList([...itemSet])
            

        }


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
        <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
                <CardTitle>Summary</CardTitle>
                <CardDescription>
                    Prices of each item in the build
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className="hidden sm:table-cell">
                                Type
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            itemList ? itemList.map((item, key) =>  (
                                <TableRow key={key}>
                                    <TableCell>
                                        <div className="font-medium">{item.name}</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {item.cost[0]}{" "} {item.unit[0]}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            {item.itemType}
                                        </Badge>
                                    </TableCell>
                                </TableRow>

                            )):null

                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default SumaryCard;