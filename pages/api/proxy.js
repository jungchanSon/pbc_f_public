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
    console.log("[req] to poe trade")
    try {
        const response = await axios.post('https://www.pathofexile.com/api/trade/search/Necropolis', req.body, {
            headers: { "Content-Type": `application/json`},
            proxy: proxyConfig
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
