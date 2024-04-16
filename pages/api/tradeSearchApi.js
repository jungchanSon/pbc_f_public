import axios from "axios";

const tradeSearchApi = () => {
    const LEAGUE = "Affliction"
    const TRADEURL = "/api/trade/search/"
    const resultLine = ""
    const resultId = ""
    const fetchItemURL = "https://www.pathofexile.com/api/trade/fetch/"+resultLine+"?query="+resultId

    var reqFilter = []


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

    axios.get(fetchItemURL).then(r => {
        r.data.result[0].listing.price.amount
        r.data.result[0].listing.price.currency
    })
}

export default tradeSearchApi;