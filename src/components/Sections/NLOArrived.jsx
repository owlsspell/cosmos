
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import bg from "../../assets/images/block3/bg.png"
import cloud from "../../assets/images/block3/cloud.svg"
import nlo from "../../assets/images/block3/nlo.svg"
import light from "../../assets/images/block3/light.svg"
import boy from "../../assets/images/block3/boy.png"
import land from "../../assets/images/block3/land.png"

export default function NLOArrived() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

    const container = useRef();

    useGSAP(() => {

        gsap.to(".nlo", {
            translateY: -5,
            repeat: -1,
            yoyo: true,
            yoyoEase: "roughEase"
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.bg',
                markers: true,
                start: "center center",
                end: "bottom -=70%",
                scrub: 1,
                pin: true,
            },
        })
            .from(".cloud, .cloud", {
                ease: 'power.out',
                x: (index) => index === 1 ? '-150%' : '150%'
            })
            .from(".nlo", {
                translateX: "-250%", duration: 1.5, ease: "back",
            })
            .from(".light", { opacity: 0 })
            .to(".boy", {
                translateY: -300,
            })
            .to(".boy", {
                opacity: 0
            })
            .to(".light", { opacity: 0 })
            .to(".nlo", {
                translateX: "250%",
            })
            .from(".text-1", {
                opacity: 0, translateY: -50, duration: 1.5
            })
            .from(".uppercase", {
                opacity: 0, translateY: -50, duration: 1
            })

    }, { dependencies: [], scope: container });

    return (
        <div ref={container} className='relative overflow-hidden'>
            <div className='bg' style={{ backgroundImage: `url(${bg})` }}>
                <img src={land} alt="" className='absolute bottom-0' />

                <div className='w-screen h-screen flex justify-center '>
                    <img src={boy} alt="" className='boy absolute bottom-20' />
                </div>
                <div className='flex justify-center '>
                    <img src={nlo} alt="" className='z-10 nlo absolute bottom-80' />
                    <img src={light} alt="" className='light absolute bottom-0' />

                </div>

                <img src={cloud} alt="" className='cloud absolute top-0 left-1/4' />
                <img src={cloud} alt="" className='cloud w-60 z-20  absolute top-1/3 left-20' />

                <div className='absolute z-30 top-0 flex justify-end flex-col h-full w-full'>
                    <div className='max-w-2xl w-full mx-auto mb-60 z-20 px-10'>
                        <p className='text-white uppercase'>we are not alone</p>
                        <h2 className='text-7xl font-bold my-4 text-1'>believe its true</h2>

                    </div>
                </div>

            </div>

        </div>
    )
}
