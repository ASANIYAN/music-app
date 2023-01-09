import create from 'zustand';


type Item = {
    artist: string,
    src: string,
    title: string,
    type: string,
    liked: boolean,
}
//define the store
export const useMyStore = create((set, get) => ({
    collection: [] as Item[],
    likes: [] as Item[],
    addCollection: (item: Item) => set((state: any) => ({ collection: [...state.collection, item]})),
    addLikes: (item: Item) => set((state: any) => ({ likes: [...state.likes, item]})),
    removeCollection: (id: number) => set((state: any) => ({ collection: state.collection.filter((item: any) => item.id !== id) })),
    removeLikes: (id: number) => set((state: any) => ({ likes: state.likes.filter((item: any) => item.id !== id) })),
}))