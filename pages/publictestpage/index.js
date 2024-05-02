import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {Badge, Button, Card, Stack} from "react-bootstrap";
import Link from "next/link";
import {useEffect} from "react";

const How = () => {
    useEffect(() => {
        const req = {
            "query": {
                "stats": [{
                    "type": "and",
                    "filters": [
                        {
                            "id": "explicit.stat_3086156145",
                            "value": {

                            },
                            "disabled": false

                        }
                    ]
                }]
            }
        }

        fetch('https://www.pathofexile.com/api/trade/search/Necropolis', {
            mode:  'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })
            .then(response =>
                response.json()
            )
            .then(data => {
                console.log("2", data)
            })
            .catch(error => {
                console.error("3", error)
            });
    }, [])

    return (
        <div className={styles.container}>

        </div>
    )
}

export default How;