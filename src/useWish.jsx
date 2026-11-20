import { createContext, useContext, useState } from 'react'

const WishContext = createContext(null)

export function WishProvider({ children }) {
    const  [wishIds, setWishIds] = useState([])

    function toggleWish(id) {
        let next

        if (wishIds.includes(id)) {
            next = wishIds.filter(x => x !== id)
        } else {
            next = [...wishIds, id]
        }

        setWishIds(next)
    }

    return <WishContext value = {{wishIds, toggleWish}}>{ children }</WishContext>
}

export function useWish() {
    return useContext(WishContext)
}