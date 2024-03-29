import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import astronaut from "../../assets/images/block4/astronaut.svg"
import ellipse from "../../assets/images/block4/Ellipse.svg"
import moon from "../../assets/images/block4/moon.svg"

export default function Astronaut() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

    const container = useRef();

    useGSAP(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: '.bg',
                markers: true,
                start: "top top",
                end: "+=250%",
                scrub: 1,
                pin: true,

            },
        }).fromTo(".ellipse, .astronaut", {
            scale: (index) => index === 0 ? 11 : 2
        }, {
            scale: 1,
            translateX: (index) => index === 0 ? 0 : 250
        })

    }, { dependencies: [], scope: container });

    return (
        <div ref={container} className='overflow-hidden '>
            <div className='bg relative h-screen w-screen overflow-hidden'>
                <img className='ellipse absolute w-1/3 right-0 bottom-0' src={ellipse} alt='' />
                <div className='flex justify-end items-end w-full h-full overflow-hidden relative z-10 '>
                    <img className='astronaut h-full absolute right-48 bottom-[-40px] z-10 scale-[1]' src={astronaut} alt='' />
                </div>
            </div>
        </div>
    )
}
