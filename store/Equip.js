import { create } from 'zustand';

const JewelStore = create((set) => ({
    Equip: null,

    setEquip: (prop) => set({ Equip: prop }),

}))

export default JewelStore;