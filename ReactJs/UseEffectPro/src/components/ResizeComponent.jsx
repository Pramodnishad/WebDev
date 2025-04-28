import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        console.log("Event listner added")
        window.addEventListener('resize', handleResize)
        return () => {
            console.log("Event listner removed")
            window.removeEventListener('resize',handleResize)
        }
    }, [])
    return (
        <div>
            <h1>Windows{windowWidth}px</h1>
        </div>
    )
}

export default ResizeComponent