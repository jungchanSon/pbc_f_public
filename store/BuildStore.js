import { create } from 'zustand';

const BuildStore = create((set) => ({
    Build : [],
    Weapon : [],
    SubWeapon : [],
    Helmet : [],
    Body : [],
    Belt : [],
    Glove : [],
    Boots : [],
    Amulet : [],
    Ring : [],
    Ring2 : [],
    Jewels : [],
    Flasks : [],
    CurrentCnt: -1,

    setBuild: (prop) => set({Build: prop}),
    setWeapon : (prop) => set({Weapon : prop}),
    setSubWeapon :(prop) => set({SubWeapon : prop}),
    setHelmet : (prop) => set({Helmet : prop}),
    setBody : (prop) => set({Body : prop}),
    setBelt : (prop) => set({Belt : prop}),
    setGlove : (prop) => set({Glove : prop}),
    setBoots : (prop) => set({Boots : prop}),
    setAmulet : (prop) => set({Amulet : prop}),
    setRing : (prop) => set({Ring : prop}),
    setRing2 : (prop) => set({Ring2 : prop}),
    setJewels : (prop) => set({Jewels : prop}),
    setFlasks : (prop) => set({Flasks : prop}),



    addBuild: (prop) => set((state) => ({Build: [...state.Build, prop] })),
    addWeapon : (prop) => set((state) => ({Weapon : [...state.Weapon , prop] })),
    addSubWeapon : (prop) => set((state) => ({SubWeapon : [...state.SubWeapon , prop] })),
    addHelmet : (prop) => set((state) => ({Helmet : [...state.Helmet , prop] })),
    addBody : (prop) => set((state) => ({Body : [...state.Body , prop] })),
    addBelt : (prop) => set((state) => ({Belt : [...state.Belt , prop] })),
    addGlove : (prop) => set((state) => ({Glove : [...state.Glove , prop] })),
    addBoots : (prop) => set((state) => ({Boots : [...state.Boots , prop] })),
    addAmulet : (prop) => set((state) => ({Amulet : [...state.Amulet , prop] })),
    addRing : (prop) => set((state) => ({Ring : [...state.Ring , prop] })),
    addRing2 : (prop) => set((state) => ({Ring2 : [...state.Ring2 , prop] })),
    addJewels : (prop) => set((state) => ({Jewels : [...state.Jewels , prop] })),
    addFlasks : (prop) => set((state) => ({Flasks : [...state.Flasks , prop] })),

    setCostOfBuild: (prop) => set((state) => ({Build : [...state.Build.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfWeapon : (prop) => set((state) => ({Weapon : [...state.Weapon.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfSubWeapon : (prop) => set((state) => ({Weapon : [...state.Weapon.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfHelmet : (prop) => set((state) => ({Helmet : [...state.Helmet.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfBody : (prop) => set((state) => ({Body : [...state.Body.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfBelt : (prop) => set((state) => ({Belt : [...state.Belt.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfGlove : (prop) => set((state) => ({Glove : [...state.Glove.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfBoots : (prop) => set((state) => ({Boots : [...state.Boots.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfAmulet : (prop) => set((state) => ({Amulet : [...state.Amulet.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfRing : (prop) => set((state) => ({Ring : [...state.Ring.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfRing2 : (prop) => set((state) => ({Ring : [...state.Ring.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfJewels : (prop) => set((state) => ({Jewels : [...state.Jewels.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),
    setCostOfFlasks : (prop) => set((state) => ({Flasks : [...state.Flasks.map((item) => (
            item.uniqueId === prop.uid ? {...item, cost: prop.cost, unit: prop.unit, temp:prop} : item
        ))] })),

    setCostUnitOfBuild: (prop) => set((state) => ({Build: [...state.Build, prop] })),
    setCostUnitOfWeapon : (prop) => set((state) => ({Weapon : [...state.Weapon , prop] })),
    setCostUnitOfSubWeapon : (prop) => set((state) => ({SubWeapon : [...state.SubWeapon , prop] })),
    setCostUnitOfHelmet : (prop) => set((state) => ({Helmet : [...state.Helmet , prop] })),
    setCostUnitOfBody : (prop) => set((state) => ({Body : [...state.Body , prop] })),
    setCostUnitOfBelt : (prop) => set((state) => ({Belt : [...state.Belt , prop] })),
    setCostUnitOfGlove : (prop) => set((state) => ({Glove : [...state.Glove , prop] })),
    setCostUnitOfBoots : (prop) => set((state) => ({Boots : [...state.Boots , prop] })),
    setCostUnitOfAmulet : (prop) => set((state) => ({Amulet : [...state.Amulet , prop] })),
    setCostUnitOfRing : (prop) => set((state) => ({Ring : [...state.Ring , prop] })),
    setCostUnitOfRing2 : (prop) => set((state) => ({Ring2 : [...state.Ring2 , prop] })),
    setCostUnitOfJewels : (prop) => set((state) => ({Jewels : [...state.Jewels , prop] })),
    setCostUnitOfFlasks : (prop) => set((state) => ({Flasks : [...state.Flasks , prop] })),

    removeBuild : () => set({Build: null}),
    removeWeapon : () => set({Weapon : null}),
    removeSubWeapon : () => set({SubWeapon : null}),
    removeHelmet : () => set({Helmet : null}),
    removeBody : () => set({Body : null}),
    removeBelt : () => set({Belt : null}),
    removeGlove : () => set({Glove : null}),
    removeBoots : () => set({Boots : null}),
    removeAmulet : () => set({Amulet : null}),
    removeRing : () => set({Ring : null}),
    removeRing2 : () => set({Ring2 : null}),
    removeJewels : () => set({Jewels : null}),
    removeFlasks : () => set({Flasks : null}),

    testH : () => set ( (state) => ({
        Helmet: [...state.Helmet.map((item, key) => (
            {...item, cost: 10, unit: "div"}
        ))]
    })),
    testOptionClick : (key) => set ( (state) => ({
        Jewels: [...state.Jewels.map((item, itemKey) => (
            key == itemKey ? (item.hasOwnProperty("click") ? {...item, click: !item.click} : {...item, click: true}) : {...item}
        ))]
    })),

    testOptionClick2 : (id, key) => set ( (state) => ({
        Jewels: [...state.Jewels.map((item, itemKey) => (
            a()
        ))]
    })),

    clickHelmetOpt:  (itemKey, temp) => set ( (state) => ({
        Helmet: [...state.Helmet.map((item, key) => (
            key == itemKey ? {...item, selectedOpts: item.selectedOpts.map(((i, k) => (
                    k === optionKey ? i * -1 : i
                )))} : item
        ))]
    })),

    removeAll : () => set({
            Build: [],
            Weapon : [],
            SubWeapon : [],
            Helmet : [],
            Body : [],
            Belt : [],
            Glove : [],
            Boots : [],
            Amulet : [],
            Ring : [],
            Ring2 : [],
            Jewels : [],
            Flasks : [],
    }),
    setCnt: (prop) => set({ MaxCnt: prop }),
    upCnt: (prop) => set((state) => ({ CurrentCnt: state.CurrentCnt + 1 })),

}))
const a = () => {
    return []

}
export default BuildStore;