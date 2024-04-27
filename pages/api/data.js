// pages/api/proxy.js
// import fetch from 'node-fetch';

export default async function handler(req, res) {

    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const apiUrl = 'https://www.pathofexile.com/api/trade/search/Necropolis';

    console.log("[req] ", userIp)

    const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Forwarded-For': userIp,
            'X-Client-IP': userIp,
        },
        body: JSON.stringify(req.body),
    });
    if (!apiResponse.ok) {
        return res.status(apiResponse.status).json({ error: 'Failed to fetch data from the external API' });
    }

    const data = await apiResponse.json();
    res.status(200).json(data);
}
