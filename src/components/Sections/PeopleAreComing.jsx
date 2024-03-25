import { useRef } from 'react'
import bg from "../../assets/images/block2/bg.png"
import planet from "../../assets/images/block2/planet 1.png"
import people from "../../assets/images/block2/people 1.png"
import land from "../../assets/images/block2/land 1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

export default function PeopleAreComing() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

    const container = useRef();

    useGSAP(() => {
        gsap.from(".land", {
            scrollTrigger: {
                trigger: '.image-1',
                start: "center center",
                end: "bottom -=170%",
                scrub: 1,
                pin: true
            },
        })
        gsap.from(".people", {
            scrollTrigger: {
                trigger: '.people',
                start: "-=50% center",
                end: "bottom bottom",
                scrub: true,
            },
            scale: 1
        })

        gsap.from(".planet", {
            scrollTrigger: {
                trigger: '.planet',
                start: "center center",
                end: "bottom -=200%",
                scrub: true,
                pin: true
            },
            rotate: 360,
            x: '150%',
            ease: "power.out"
        })

    }, { dependencies: [], scope: container });

    return (<>
        <div ref={container} className='relative section-2 overflow-hidden'>
            <img src={bg} alt="" className='image-1 h-screen' />
            <div className='w-screen flex justify-center absolute top-0'>
                <img src={planet} alt="" className='image-3 planet' />
            </div>
            <div className='w-screen z-10 flex justify-center absolute bottom-0'>
                <img src={people} alt="" className='people scale-50' />
            </div>
            <img src={land} alt="" className='land absolute bottom-0' />
        </div>
    </>
    )
}
