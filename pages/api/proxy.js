// pages/api/proxy.js
import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default async function handler(req, res) {
    const PHOST = process.env.NEXT_PUBLIC_PHOST;
    const PPORT = process.env.NEXT_PUBLIC_PPORT;
    const PUSERNAME = process.env.NEXT_PUBLIC_PUSERNAME;
    const PPASSWORD = process.env.NEXT_PUBLIC_PPASSWORD;

    const proxyConfig = {
        host: PHOST,
        port: PPORT,
        auth: {
            username: PUSERNAME,
            password: PPASSWORD
        }
    };
    const reqForm = {
        query: {
            name: "The Pariah",
            stats: [{
                type: "and",
                filters: []
            }]
        },
        sort: {
            "price": "asc"
        }
    }
    console.log("[req] to poe trade", req.body)
    try {
        axios.post('https://www.pathofexile.com/api/trade/search/Necropolis', reqForm, {
            headers: { "Content-Type": `application/json`},
            // proxy: proxyConfig
        }).then( r => {
            console.log(r)
            res.status(200).json(r.data);
        }).catch( e => {
            res.status(500).json({ message: 'Internal Server Error', error: e.message });
        })

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
        console.log(error.message. error.body)
    }
}
