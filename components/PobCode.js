import Form from 'react-bootstrap/Form';
import {Button, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import JewelStore from "../store/Jewel";
import {wait} from "next/dist/lib/wait";
import BuildStore from "../store/BuildStore";
import {log} from "next/dist/server/typescript/utils";
import styles from "../styles/Home.module.css";
import CostStore from "../store/CostStore";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import handler from "../pages/api/setQuerry";

const PobCode = () => {
    const [pobCode, setPobCode] = useState("")
    const { Jewel, setJewel } = JewelStore();
    const [btnDisable, setBtnDisable] = useState(false)
    const {
        Amulet,
        Boots,
        Belt,
        Body,
        Glove,
        Helmet,
        Jewels,
        Ring,
        Ring2,
        SubWeapon,
        Weapon,
        Flasks,
        Build,
        setJewels,
        setBuild,
        } = BuildStore()

    const {
        removeAll,
    } = BuildStore();

    const {
        addAmulet,
        addBoots,
        addBelt,
        addBody,
        addGlove,
        addHelmet,
        addJewels,
        addRing,
        addRing2,
        addSubWeapon,
        addWeapon,
        addFlasks,
        addBuild,
    } = BuildStore()
    const {
        removeTotalCost,
    } = CostStore()
    const handleSubmitPobCode = (e) => {
        e.preventDefault()
        setBtnDisable(true)
        removeAll()
        removeTotalCost()

        let data = new FormData()
        data.append('pobCode', pobCode)

        let axiosConfig = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.NEXT_PUBLIC_POBCODE_REQ_URL,
            data : data
        }

        axios.request(axiosConfig).then( res => {
            setBtnDisable(false)
            setJewel(res.data)
            setBuild(res.data)

            res.data.map((resItem, key) => {
                let item = {...resItem, cost: 0, unit: "" }

                if (item.itemType === "Jewel") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addJewels(item)
                } else if (item.itemType === "Weapon" || item.itemType === "Shield" || item.itemType === "Buckler") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addWeapon(item)
                } else if (item.itemType === "Helmet") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addHelmet(item)
                    // setCostOfHelmet(handler(item))
                } else if (item.itemType === "Body") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }

                    addBody(item)
                } else if (item.itemType === "Belt") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addBelt(item)
                } else if (item.itemType === "Glove") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addGlove(item)
                } else if (item.itemType === "Boot") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addBoots(item)
                } else if (item.itemType === "Amulet") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addAmulet(item)
                } else if (item.itemType === "Ring") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addRing(item)
                } else if (item.itemType === "Flask") {
                    let optionById = item.optionsById;
                    if (item.allRes > 0) {
                        item.checkAllRes = true
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ?
                                (opt == "explicit.stat_3372524247" ||
                                opt == "explicit.stat_4220027924" ||
                                opt == "explicit.stat_1671376347" ? -1 : 1 ) : 0
                        ))
                    } else {
                        item.checkAllRes = false
                        item.selectedOpts = optionById.map((opt, key) => (
                            opt != null ? 1 : 0
                        ))
                    }
                    addFlasks(item)
                }
            })
        })
    }

    function handleInputPobCode(e) {
        e.preventDefault()

        setPobCode(e.target.value)
    }

    const testBtn = (e) => {
        e.preventDefault()
        Jewel.forEach( async (item) => {
        })

        const item = Jewel[0]

        const url = "/api/trade/search/Standard"
        const data = "{\n" +
            "    \"query\": {" +
            "        \"name\": \"The Pariah\"\n" +
            "    }\n" +
            "}   "
        const d = {
            query: {
                name: "The Pariah"
            }
        }
        axios.post(url, d, {
            headers: { "Content-Type": `application/json`}
        }).then( r => {
        })
    }

    const testCost = (e) => {
        e.preventDefault();

        setJewels(10)
        // Jewels.map((item, key) => ({...item}))
        // Jewels.map((item, key) => {
        //     item.cost = 10
        //     item.unit = "Divine"
        // })
    }
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <Form onKeyDown={(e)=>{
            if (e.code=="Enter") {
                e.preventDefault()
                if(!btnDisable){
                    console.log(e)
                    handleSubmitPobCode(e)
                }
            }
        }} onSubmit={handleSubmitPobCode}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" disabled={btnDisable}>
                <Form.Label><h2>PobCode</h2></Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleInputPobCode}
                              className={styles.textarea} placeholder={"Input Pob Code"}
                            />
                <Button type={"submit"} disabled={btnDisable}>Submit</Button>
                {
                    btnDisable == true ?
                        <Spinner animation="border" />
                        : null
                }
            </Form.Group>
        </Form>
    );
}

export default PobCode;