import BuildStore from "../../store/BuildStore";
import axios from "axios";

const handler = (item, onoffStatus, limitedDate) => {
  const LEAGUE = "Necropolis"
  const tradeUrl = "/poetrade/api/trade/search/"+LEAGUE

  const options = item.optionsById
  const optionValue = item.optionsByValue
  const checkedOptions = item.selectedOpts
  const allRes = item.allRes
  const itemType = item.itemType
  const name = item.name
  const rarity = item.rarity

  let reqFilter = []
  let resultId = "";
  let resultLine = "";
  const status = onoffStatus
  let reqItemType
  switch (itemType) {
    case 'Helmet':
      reqItemType = "armour.helmet"
      break
    case 'Body':
      reqItemType = "armour.chest"
      break
    case 'Boot':
      reqItemType = "armour.boots"
      break
    case 'Belt':
      reqItemType = "accessory.belt"
      break
    case 'Ring':
      reqItemType = "accessory.ring"
      break
    case 'Weapon':
      reqItemType = "weapon"
      break
    case 'Glove':
      reqItemType = "armour.gloves"
      break
    case 'Jewel':
      reqItemType = "jewel"
      break
    case 'Flask':
      reqItemType = "flask"
      break
    case 'Amulet':
      reqItemType = "accessory.amulet"
      break
    case 'Shield':
      reqItemType = "armour.shield"
      break
    case 'Quiver':
      reqItemType = "armour.quiver"
      break
  }
  const needToMinMax = (item) => {
    if (item == "explicit.stat_1085446536") {
      return true
    }
    if (item == "enchant.stat_3086156145") {
      return true

    }

  }
  options.map((item, key) => {
    if (checkedOptions[key] == 0) {
    } else if (needToMinMax(item)) {
      let filter = {
        id: item,
        value: {
          min: optionValue[key][0],
          max: optionValue[key][0],
        }
      }
      if (checkedOptions[key] == -1 || checkedOptions[key] == 0) {
        filter.disabled = true
      }
      reqFilter.push(filter)

    } else {
      let filter = {
        id: item,
        value: {
          min: optionValue[key][0],
        }
      }
      if (checkedOptions[key] == -1 || checkedOptions[key] == 0) {
        filter.disabled = true
      }
      reqFilter.push(filter)
    }
  })

  //All res
  if (allRes > 0){
    reqFilter.push({
      id: "pseudo.pseudo_total_elemental_resistance",
      value: {
        min: allRes
      },
    })
  }

  let reqForm = {
    query: {
      filters: {
        type_filters: {
          filters: {
            category: {
              option: reqItemType,
            }
          }
        }
      },
      stats: [{
        type: "and",
        filters: reqFilter
      }],
      status: status
    },
    sort: {
      "price": "asc"
    }
  }

  //Limited Date
  if (limitedDate != "any") {
    reqForm.query.filters.trade_filters = {
      filters: {
        indexed: {
          option: limitedDate
        }
      }
    };
  }

  if (rarity == "UNIQUE" || rarity == "RELIC") {
    reqForm.query.name = name

  }
  return new Promise((resolve, reject) => {

    let amount
    let currency


    // fetch("https://www.pathofexile.com/api/trade/search/Necropolis", {
    //   method: 'POST',
    //   body: JSON.stringify(reqForm),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // }).then((Response) => {
    //   console.log('reponse');
    //   console.log(Response)
    //   if (Response.ok) {
    //     Response.json().then(r => {
    //       if (r.result.length > 0) {
    //         resultId = r.id
    //         resultLine = r.result[0]
    //         let url2 = "/poetrade/api/trade/fetch/" + resultLine + "?query=" + resultId
    //         axios.get(url2).then(result => {
    //           amount = result.data.result[0].listing.price.amount
    //           currency = result.data.result[0].listing.price.currency
    //         })
    //       }
    //     })
    //   }
    // })

    // axios.post("/petrade/api/trade/search/Necropolis", reqForm, {
    //   headers: { "Content-Type": `application/json`}
    // }).then( r => {
    //   if (r.data.result.length > 0 ) {
    //     resultId = r.data.id
    //     resultLine = r.data.result[0]
    //     let url2 = "/poetrade/api/trade/fetch/"+resultLine+"?query="+resultId
    //     axios.get(url2).then(r => {
    //
    //       amount = r.data.result[0].listing.price.amount
    //       currency = r.data.result[0].listing.price.currency
    //     })
    //   }
    // })
    //
    // axios.post("/poetrade/api/trade/search/Necropolis", reqForm, {
    //   axios.post("/api/data", reqForm, {
    //   headers: { "Content-Type": `application/json` }
    // }).then( r => {
    //   resultId = r.data.id
    //   if (r.data.result.length > 0 ) {
    //         resultId = r.data.id
    //         resultLine = r.data.result[0]
    //         let url2 = "/poetrade/api/trade/fetch/"+resultLine+"?query="+resultId
    //         axios.get(url2).then(r => {
    //           amount = r.data.result[0].listing.price.amount
    //           currency = r.data.result[0].listing.price.currency
    //         })
    //       }
    // })


    fetch('/api/proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqForm ),
    })
        .then((Response) => {
          console.log('reponse');
          console.log(Response)
          if (Response.ok) {
            Response.json().then(r => {
              if (r.result.length > 0) {
                resultId = r.id
                resultLine = r.result[0]
                let url2 = "/poetrade/api/trade/fetch/" + resultLine + "?query=" + resultId
                axios.get(url2).then(result => {
                  amount = result.data.result[0].listing.price.amount
                  currency = result.data.result[0].listing.price.currency
                })
              }
            })
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    setTimeout(() => {
      resolve({amount, currency, resultId})
    }, 1000 * 3)
  })
}

export default handler;