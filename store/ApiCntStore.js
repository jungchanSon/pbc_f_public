import { create } from 'zustand';

const ApiCntStore = create((set) => ({
    MaxCnt: null,
    CurrentCnt: -1,

    setCnt: (prop) => set({ MaxCnt: prop }),
    // upCnt: () => set((state) => {CurrentCnt: 2}),
    upCnt: (prop) => set((state) => ({ CurrentCnt: state.CurrentCnt + 1 })),

}))

export default ApiCntStore;