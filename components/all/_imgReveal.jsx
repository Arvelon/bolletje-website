import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const ImgReveal = ({ img }) => {

    let { gClipPath } = useRef(null)
    const imgRoute = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"

    useEffect(() => {
        gsap.to(gClipPath, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", ease: "power4.inOut", transition: 2, duration: 1.2
        })
        gsap.to(gClipPath, {
            scale: "1", duration: 2.5, ease: "power4.inOut", duration: 1.6, ease: "power4.inOut"
        })
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className=" mx-auto relative my-20 grid stack overflow-hidden">
                <img ref={el => gClipPath = el} src={imgRoute} alt="" className='clip-path-reveal-img transform scale-125 w-96' />
            </div>
        </div>
    )
}

export default ImgReveal