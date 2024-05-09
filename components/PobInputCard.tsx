'use client';
import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";
import {Button} from "./ui/button";
import { Loader2 } from "lucide-react"
import {Input} from "./ui/input";
import axios from "axios";
import {useState} from "react";
import JewelStore from "../store/JewelStore";
import BuildStore from "../store/BuildStore";
import {useToast} from "./ui/use-toast";

const PobInputCard = () => {
    const {setJewel } = JewelStore();
    const [btnDisable, setBtnDisable] = useState(false)
    const { toast } = useToast()
    const { setBuild, removeAll} = BuildStore()

    const {
        addAmulet,
        addBoots,
        addBelt,
        addBody,
        addGlove,
        addHelmet,
        addJewels,
        addRing,
        addWeapon,
        addFlasks,
    } = BuildStore()

    const url = process.env.NEXT_PUBLIC_POBCODE_REQ_URL

    const pobCodeSubmit = (e: any) => {
        e.preventDefault()
        setBtnDisable(true)
        const pobCode = e.target[0].value
        let data = new FormData()
        data.append('pobCode', pobCode)

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: url,
            data : data
        }

        axios.request(axiosConfig).then((response) => {
            setBtnDisable(false)
            setJewel(response.data)
            setBuild(response.data)
            removeAll()

            response.data.map((responseItem:any, key:any) => {
                let item = {...responseItem, cost: 0, unit: "" }
                let optionById = item.optionsById;

                if (item.allresponse > 0) {
                    item.checkAllresponse = true
                    item.selectedOpts = optionById.map((opt, key) => (
                        opt != null ?
                            (opt == "explicit.stat_3372524247" ||
                            opt == "explicit.stat_4220027924" ||
                            opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                    ))
                } else {
                    item.checkAllresponse = false
                    item.selectedOpts = optionById.map((opt, key) => (
                        opt != null ? 1 : 0
                    ))
                }
                if (item.itemType === "Jewel") {
                    addJewels(item)
                } else if (item.itemType === "Weapon" || item.itemType === "Shield" || item.itemType === "Buckler") {
                    addWeapon(item)
                } else if (item.itemType === "Helmet") {
                    addHelmet(item)
                } else if (item.itemType === "Body") {
                    addBody(item)
                } else if (item.itemType === "Belt") {
                    addBelt(item)
                } else if (item.itemType === "Glove") {
                    addGlove(item)
                } else if (item.itemType === "Boot") {
                    addBoots(item)
                } else if (item.itemType === "Amulet") {
                    addAmulet(item)
                } else if (item.itemType === "Ring") {
                    addRing(item)
                } else if (item.itemType === "Flask") {
                    addFlasks(item)
                }
            })
            setBtnDisable(false)
        }).catch( e => {
            setBtnDisable(false)
            console.log(e)
            toast({title: "Please check if the code is correct", description:"Please check if the code is correct"})
        })
    }
    return(
        <Card
            className="mb-3 overflow-hidden" x-chunk="dashboard-05-chunk-4"
        >
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        Pob Code
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <form onSubmit={(e) => pobCodeSubmit(e)}>
                    <Input/>
                    {
                        btnDisable == false ?
                            <Button type={"submit"}>Submit</Button>
                            :
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                    }

                </form>
            </CardContent>
        </Card>
    )
}

export default PobInputCard;