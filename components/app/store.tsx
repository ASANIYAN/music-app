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
    albumImg: string,
    title: string,
    fullTitle: string,
    setAlbumImg: (value: string) => void,
    setFullTitle: (value: string) => void,
    setTitle: (value: string) => void,
    addCollection: (item : Item) => void,
    removeCollection: (id: number) => void,
    addLikes: (item : Item) => void,
    removeLikes: (id: number) => void,
};
//define the store
export const useMyStore = create<ItemState>((set, get) => ({
    albumImg: '',
    setAlbumImg: (value: string) => set(state => ({...state, albumImg: value})),
    fullTitle: '',
    setFullTitle: (value: string) => set(state => ({...state, fullTitle: value})),
    title: '',
    setTitle: (value: string) => set(state => ({...state, title: value})),
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