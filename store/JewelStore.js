import { create } from 'zustand';

const JewelStore = create((set) => ({
    Jewel: null,
    setJewel: (prop) => set({ Jewel: prop }),
}))

export default JewelStore;