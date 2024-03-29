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
                trigger: '.bg',
                start: "center center",
                end: "bottom -=70%",
                scrub: 1,
                pin: true,
            },
            ease: 'power.out',
            scale: 1
        })
        gsap.from(".people", {
            scrollTrigger: {
                trigger: '.people',
                start: "-=20% center",
                end: "center -=70%",
                scrub: 1,
            },
            ease: 'power.out',
            scale: 1
        })

        gsap.from(".planet", {
            scrollTrigger: {
                trigger: '.planet',
                start: "center center",
                end: "bottom -=100%",
                scrub: true,
                pin: true,
            },
            rotate: 250,
            x: '150%',
            ease: "power.out"
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: '.text-1',
                start: "top center",
                end: "bottom bottom",
            }
        })
            .from(".text-1", { opacity: 0, translateY: -50, duration: 1 })
            .from(".text-2", { opacity: 0, translateY: -50 })
            .from(".text-3", { opacity: 0, translateY: -50 })
    }, { dependencies: [], scope: container });

    return (
        <div ref={container} className='relative overflow-hidden'>
            <div className='absolute z-20 flex justify-end flex-col h-full w-full text-white'>
                <div className='container w-full mx-auto mb-60'>
                    <h2 className='text-7xl font-bold mb-4 text-1'>to the <br />
                        unknown</h2>
                    <div className='flex justify-between '>
                        <p className='w-1/3 text-2'>and back</p>
                        <p className='w-1/3 pt-3 text-right text-3'>Make a pipe dream come true</p>
                    </div>
                </div>
            </div>
            <img src={bg} alt="" className='bg h-screen w-full' />
            <div className='w-screen flex justify-center absolute top-0'>
                <img src={planet} alt="" className='planet' />
            </div>
            <div className='w-screen z-10 flex justify-center absolute bottom-0'>
                <img src={people} alt="" className='people scale-50' />
            </div>
            <img src={land} alt="" className='land absolute bottom-0 w-full' />

        </div>

    )
}
