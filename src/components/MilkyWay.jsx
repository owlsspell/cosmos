import milky_way from '../assets/images/milky_way.jpg'
import mountain_1 from '../assets/images/mountain_1.png'
import scroll from '../assets/images/scroll.svg'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function MilkyWay() {
    gsap.registerPlugin(useGSAP);

    const container = useRef();

    useGSAP(() => {
        gsap.from(".mountain", { scale: 1.8, yPercent: -25, duration: 2, delay: 1 });
        gsap.from(".way", { scale: 2, xPercent: 30, yPercent: -60, duration: 1.8, delay: 1 });
        gsap.from(".mainTitle", { opacity: 0, translateY: -150, duration: 0.8, delay: 1 });

        gsap.timeline()
            .from(".subTitle", { opacity: 0, translateY: -150, duration: 1.2, delay: 1 })
            .to(".text", { opacity: 1, duration: 1 })
            .to(".scrollBtn", { opacity: 1, duration: 0.3 })
            .to(".scrollBtn", { y: -20, repeat: -1, yoyo: true, duration: 0.5, ease: "circ" });
    }, { dependencies: [], scope: container });

    return (
        <div className='relative min-h-screen w-auto overflow-hidden' ref={container}>
            <img className='absolute way object-cover h-screen w-full' src={milky_way} alt="" />
            <img className="mountain absolute top-0 object-cover h-screen w-full" src={mountain_1} alt='' />
            <div className='flex items-center flex-col mt-20 mx-32 gap-4 z-10 relative h-screen text-white'>
                <h3 className="text-xl subTitle">ACROSS THE MILKY WAY</h3>
                <h1 className="text-5xl mb-2 font-semibold mainTitle">STARRY NIGHT</h1>
                <p className='font-thin text opacity-0'>Lorem ipsum dolor sit amet consectetur. Integer tempor amet diam laoreet. Amet volutpat ac lacus platea fermentum. Velit mauris orci ut sed ornare. Platea lectus fringilla elementum blandit lacinia dignissim etiam tellus morbi.Lorem ipsum dolor sit amet consectetur. Integer tempor amet diam laoreet. Amet volutpat ac lacus platea fermentum. Velit mauris orci ut sed ornare. Platea lectus fringilla elementum blandit lacinia dignissim etiam tellus morbi.</p>
            </div>
            <img className='absolute left-1/2 bottom-24 h-24 scrollBtn opacity-0' src={scroll} alt="" />
        </div>
    )
}
