import { create } from 'zustand';

const CostStore = create((set) => ({
    Chaos: 0,
    Exalted: 0,
    Divine: 0,
    Mirror: 0,
    totalCost: {},

    removeTotalCost: () => set({totalCost: {}}),
    removeChaos: () => set({Chaos: 0}),
    removeExalted: () => set({Exalted: 0}),
    removeDivine: () => set({Divine: 0}),
    removeMirror: () => set({Mirror: 0}),


    setTotalCost: (prop) => set({ totalCost: prop }),
    setChaos: (prop) => set({ Chaos: prop }),

    setExalted: (prop) => set({ Exalted: prop }),
    setDivine: (prop) => set({ Divine: prop }),
    setMirror: (prop) => set({ Mirror: prop }),

    addTotalCost: (prop) => set((state) => ({
        totalCost: state.totalCost.hasOwnProperty(prop.currency)
            ? addCost(prop.amount, prop.currency)
            : addCurrency(prop.amount, prop.currency)
    })),

    addChaos: (prop) => set((state) => ({Chaos: state.Chaos + prop})),
    addExalted: (prop) => set((state) => ({Exalted: state.Exalted + prop})),
    addDivine: (prop) => set((state) => ({Divine: state.Divine + prop})),
    addMirror: (prop) => set((state) => ({Mirror: state.Mirror + prop})),

    discountChaos: (prop) => set((state) => ({Chaos: state.Chaos - prop})),
    discountExalted: (prop) => set((state) => ({Exalted: state.Exalted - prop})),
    discountDivine: (prop) => set((state) => ({Divine: state.Divine - prop})),
    discountMirror: (prop) => set((state) => ({Mirror: state.Mirror - prop})),

}))

const addCost = (amount, currency) => {


}

const addCurrency = (amount, currency) => {
    const { totalCost } = CostStore()

    totalCost[currency] = amount
    return totalCost
}
export default CostStore;