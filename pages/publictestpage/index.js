import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {Badge, Button, Card, Stack} from "react-bootstrap";
import Link from "next/link";
import {useEffect} from "react";
import jsonp from "jsonp";
import useSWR from 'swr';

const fetcher = url => new Promise((resolve, reject) => {
    jsonp(url, {
        param: `{"query":{"status":{"option":"any"},"name":"Headhunter","type":"Leather Belt","stats":[{"type":"and","filters":[{"id":"implicit.stat_3299347043","disabled":false,"value":{"min":35}}],"disabled":false}]},"sort":{"price":"asc"}}`

    }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
    });
});

const How = () => {
    const { data, error } = useSWR('https://www.pathofexile.com/api/trade/search/Necropolis', fetcher);
    console.log(data)
    console.log(error)
    useEffect(() => {

        //
        // const req = {
        //     "query": {
        //         "stats": [{
        //             "type": "and",
        //             "filters": [
        //                 {
        //                     "id": "explicit.stat_3086156145",
        //                     "value": {
        //
        //                     },
        //                     "disabled": false
        //
        //                 }
        //             ]
        //         }]
        //     }
        // }
        //
        // fetch('https://www.pathofexile.com/api/trade/search/Necropolis', {
        //     mode:  'no-cors',
        //     // credentials: "include",
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: req
        // })
        //     .then(response =>
        //         response.json()
        //     )
        //     .then(data => {
        //         console.log("2", data)
        //     })
        //     .catch(error => {
        //         console.error("3", error)
        //     });
    }, [])

    return (
        <div className={styles.container}>

        </div>
    )
}

export default How;