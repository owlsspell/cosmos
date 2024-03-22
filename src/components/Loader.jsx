import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { MotionPathPlugin } from "gsap/all";
import Path from "../assets/images/loader/bg.svg?react";
import Circle from "../assets/images/loader/circle.svg?react";

export default function Loader() {
    gsap.registerPlugin(MotionPathPlugin)

    const container = useRef();
    const circles = ["circle1", "circle2", "circle3"]

    useGSAP(() => {
        circles.map((item, index) => {
            gsap.to(("#" + item), {
                duration: 3,
                delay: -(index + 1 * 5),
                repeat: -1,
                ease: "linear",
                motionPath: {
                    path: "#path" + (index + 1),
                    align: "#path" + (index + 1),
                    alignOrigin: [0.4, 0.6],
                    autoRotate: true,
                    end: 0.51,
                },

            })

        })
        gsap.to(".loader-0", {
            delay: 1,
            opacity: 0
        })
        gsap.to(".loader-1", { x: "-=100%", duration: 1.9, delay: 1, })
        gsap.to(".loader-2", { x: "-=100%", duration: 2, delay: 1, })
    }, { scope: container })
    return (
        <div ref={container}>
            <div className="fixed z-40 bg-blue-950 loader-0">
                <div className="w-screen h-screen flex items-center justify-center">
                    <Path className="max-h-40 w-auto m-auto" />
                </div>
                {circles.map(item => <Circle key={item} className="circle max-h-4" id={item} />
                )}
            </div>
            <div className="loader-1 fixed z-30 w-[calc(100%_+_30%)] h-screen bg-sky-900 rounded-tr-full rounded-br-full"></div>
            <div className="loader-2 fixed z-20 w-[calc(100%_+_50%)] h-screen bg-gradient-to-r bg-sky-700 to-indigo-600 rounded-tr-full rounded-br-full"></div>
        </div>
    )
}
