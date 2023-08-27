import React, { useState, useEffect } from 'react'

const useScrollY = () => {
    const [verticalPosition, setVerticalPosition] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setVerticalPosition(window.scrollY);
        }
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, []);
    return verticalPosition;
}
export default useScrollY;