export default (req, res) => {
    const options = {
        url: 'http://www.pathofexile.com/api/trade/search/Necropolis',
        method: req.method,
        headers: req.headers,
        body: JSON.stringify(req.body),
    };

    fetch(options.url, options)
        .then(apiRes => apiRes.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json({ error: error.message }));
};