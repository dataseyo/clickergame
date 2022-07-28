import React, {useEffect, useState} from 'react'

const useLocalStorage = (storageKey, fallbackState) => {
    // provide default value of fallback state if value evaluates to null/undefined
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    )

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value))
    }, [value, storageKey])

    return [value, setValue]
}

export default useLocalStorage