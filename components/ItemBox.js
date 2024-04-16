import {Card, Form, InputGroup, ListGroup, Stack} from "react-bootstrap";
import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";
import axios from "axios";
import ApiCntStore from "../store/ApiCntStore";
import InputGroupText from "react-bootstrap/InputGroupText";
import OptionContainer from "./TradeConditionContainer";

const ItemBox = ({info, id, seleted}) => {
    const {upCnt, CurrentCnt, MaxCnt} = ApiCntStore();
    const [checkedOptions, setCheckedOptions] = useState([])
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("")
    const name = info.name
    const options = info.options
    const optionById = info.optionsById
    const optionByValue = info.optionsByValue

    let checkIndex = []
    useEffect(() => {
        if (id == CurrentCnt){
            handleTestApi()
            setTimeout(upCnt, 5000)
        }
    }, [MaxCnt, CurrentCnt])


    useEffect(() => {
        optionById.forEach((item, key) => {
            if (item != null) {
                checkIndex.push(key)
            }
        })

        setCheckedOptions(checkIndex)
    }, [optionById])

    const handleClickCheck = (e) => {
        const index = parseInt(e.target.id);
        var check = e.target.checked

        if (check == true) {
            setCheckedOptions([...checkedOptions, index])
        } else {
            setCheckedOptions(checkedOptions.filter(c => c !== index))
        }
    }

    const handleTestApi = () => {
        var reqFilter = []

        checkedOptions.forEach((indexOfOption) => {
            var filter = {
                id: optionById[indexOfOption],
                value: {
                    min: optionByValue[indexOfOption][0],
                }
            }
            reqFilter.push(filter)
        })

        const reqForm = {
            query: {
                // name: "The Pariah",
                stats: [{
                    type: "and",
                    filters: reqFilter
                }]
            },
            sort: {
                "price": "asc"
            }
        }

        const url = "/api/trade/search/Affliction"

        let url2 = "/api/trade/fetch/RESULT_LINES_HERE?query=ID_HERE";
        let resultId = "";
        let resultLine = "";
        axios.post(url, reqForm, {
            headers: { "Content-Type": `application/json`}
        }).then( r => {
            resultId = r.data.id
            resultLine = r.data.result[0]
            url2 = "/api/trade/fetch/"+resultLine+"?query="+resultId
            axios.get(url2).then(r => {
                setAmount(r.data.result[0].listing.price.amount)
                setCurrency(r.data.result[0].listing.price.currency)
            })
        })
    }

    const handleClickOption = ({id, key}) => {

        testOptionClick2(id, key)
    }
    return (
        <Card border="primary" bg="dark" text="white" style={{width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <hr/>
            <Stack gap={1} className="px-2 align-items-center mx-auto">
                {options ? options.map((item, key) => (
                    {seleted} !== 1 ?
                        <div key={key} className="mb-3" onClick={() =>handleClickOption(id, key)}>
                            {item}
                        </div> :
                        <div key={key} className="mb-3 bg-info" onClick={handleClickOption}>
                            {item}
                        </div>
                )) : null}
            </Stack>
            <hr/>
            <Card.Body>
                Cost: {info.cost} {info.unit}
            </Card.Body>
            <button onClick={handleTestApi}>test api</button>
        </Card>
    );
}

export default ItemBox