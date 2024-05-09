import { create } from 'zustand';
const LimitedDate = {
    ANY: 'any',
    WEEK2: "2weeks",
    MONTH: "1month",
}

const OnOffCond = {
    ANY: "any",
    ONLINE: "online",
}

const TradeConditionStore = create((set) => ({
    DateCondition: LimitedDate.ANY,
    OnOffCondition: OnOffCond.ANY,

    setDateCondition: (prop) => set({ DateCondition: prop }),
    setOnOffCondition: (prop) => set({ OnOffCondition: prop }),

    resetDateCondition: () => set({DateCondition: LimitedDate.ANY}),
    resetOnOffCondition: () => set({OnOffCondition: OnOffCond.ANY}),
}))

export default TradeConditionStore;