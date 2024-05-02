import handler from "./setQuerry";

const toTradePage = (item) => {
    const res = handler(item)
    window.open(res, '_blank')
}

export default toTradePage;