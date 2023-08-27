import React, { useEffect, useRef, useState } from 'react';
import useVerticalPosition from '../../hooks/useVerticalPosition';
import Link from 'next/link'
import { gsap } from 'gsap';


const NavDesktop = () => {

    const scrollY = useVerticalPosition()


    useEffect(() => {
        if (scrollY > window.innerHeight - 200) {
            console.log('maak menu kleiner')
        } else {
            console.log('maak menu GROTER !')
        }
    }, [scrollY])

    return (
        <nav>
            <p>Navigatie Desktop</p>
        </nav>
    )
}
export default NavDesktop
