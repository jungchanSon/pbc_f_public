import styles from '../../styles/Home.module.css'

const setRarity = (rarity) => {
    // NORMAL, MAGIC, RARE, UNIQUE, RELIC
    if (rarity === "NORMAL") {
        return styles.normal

    } else if (rarity === "MAGIC"){

        return styles.magic
    } else if (rarity === "RARE"){

        return styles.rare
    } else if (rarity === "UNIQUE"){

        return styles.unique
    } else if (rarity === "RELIC"){
        return styles.relic

    }
    return styles.rare
}

export {setRarity}