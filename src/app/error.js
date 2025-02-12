"use client"

import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(function() {
        console.error(error)
    }, [error]);
    
    return(
        <>
            <p>Ups, der gik noget galt. Prøv igen</p>
            <button onClick={() => reset()}>Prøv igen</button>
        </>
    )
}

