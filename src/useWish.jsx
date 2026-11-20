import { createContext, useContext, useState } from 'react'

const WishContext = createContext(null)

export function WishProvider({ children }) {
    const  [wishIds, setWishIds] = 
    useState( JSON.parse(localStorage.getItem('wishIds')) || [])

    function toggleWish(id) {
        let next

        if (wishIds.includes(id)) {
            next = wishIds.filter(x => x !== id)
        } else {
            next = [...wishIds, id]
        }

        setWishIds(next)
        localStorage.setItem('wishIds', JSON.stringify(next))
    }

    return <WishContext value = {{wishIds, toggleWish}}>{ children }</WishContext>
}

export function useWish() {
    return useContext(WishContext)
}