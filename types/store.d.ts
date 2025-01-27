export type Store = {
    bears: number
    increasePopulation: () => void
    removeAllBears: () => void
}

export type PersistStore = {
    persistBears: number
    increasePersistPopulation: () => void
}