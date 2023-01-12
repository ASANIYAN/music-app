import create from 'zustand';


type Item = {
    artist: string,
    src: string,
    title: string,
    type: string,
    liked: boolean,
    id: string
}

type ItemState = {
    collection: Item[],
    likes: Item[],
    addCollection: (item : Item) => void,
    removeCollection: (id: number) => void,
    addLikes: (item : Item) => void,
    removeLikes: (id: number) => void,
};
//define the store
export const useMyStore = create<ItemState>((set, get) => ({
    collection: [],
    likes: [],
    addCollection: (item: Item) => {
        set((state) => 
        ({ collection: 
            [...state.collection, { ...item } ]
        }))
    },
    addLikes: (item: Item) => { 
        set((state) => 
        ({ likes: 
            [...state.likes, {...item} ]
        }))
    },
    removeCollection: (id: number) => set((state: any) => ({ collection: state.collection.filter((item: any) => item.id !== id) })),
    removeLikes: (id: number) => set((state: any) => ({ likes: state.likes.filter((item: any) => item.id !== id) })),
}))