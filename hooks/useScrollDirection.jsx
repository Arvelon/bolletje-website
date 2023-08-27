import React, { useState, useEffect } from 'react'

const useScrollY = () => {
    const [scrollPosition, setScrollPosition] = useState()

    useEffect(() => {
        var lastScrollTop = 0;
        const onScroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setScrollPosition('down');
            } else {
                setScrollPosition('up');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, []);
    return scrollPosition;
}
export default useScrollY;