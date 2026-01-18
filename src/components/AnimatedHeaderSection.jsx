import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";

const AnimatedHeaderSection = ({ 
    subTitle, 
    title, 
    text, 
    textColor,
    withScrollTrigger = false,
}) => {
    const contextRef = useRef(null);
    const headRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: withScrollTrigger
                ? { trigger: contextRef.current }
                : undefined
        });
        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out",
        });
        tl.from(headRef.current, {
            opacity: 0,
            y: "200",
            duration: 1,
            ease: "circ.out",
        }, "<+0.2");
    }, [])

    return (
        <div ref={contextRef}>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                <div
                    ref={headRef}
                    className="flex flex-col justify-center gap-12 pt-16 sm:gap-10"
                >
                    <p className={`text-sm md:text-base lg:text-lg font-medium tracking-[0.2rem] uppercase px-10 ${textColor}`}>
                        {subTitle}
                    </p>
                    <div className="px-10">
                        <h1 className={`flex flex-col flex-wrap gap-12 ${textColor} uppercase leading-none banner-text-responsive sm:gap-16 md:block`}>
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`relative px-10 ${textColor}`}>
                <div className="absolute inset-x-0 border-t-2" />
                <div className="py-12 sm:py-16 text-end">
                    <AnimatedTextLines
                        text={text}
                        className={`font-light uppercase value-text-responsive ${textColor}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default AnimatedHeaderSection