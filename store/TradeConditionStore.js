import { create } from 'zustand';
import {LimitedDate, OnOffCond} from "../types/TradeConditionType";

const TradeConditionStore = create((set) => ({
    DateCondition: LimitedDate.ANY,
    OnOffCondition: OnOffCond.ANY,

    setDateCondition: (prop) => set({ DateCondition: prop }),
    setOnOffCondition: (prop) => set({ OnOffCondition: prop }),

    resetDateCondition: () => set({DateCondition: LimitedDate.ANY}),
    resetOnOffCondition: () => set({OnOffCondition: OnOffCond.ANY}),
}))

export default TradeConditionStore;