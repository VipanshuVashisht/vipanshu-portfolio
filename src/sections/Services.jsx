import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { servicesData } from "../constants"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
    const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth not headaches.`
    const serviceRefs = useRef([]);
    const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px: Using rem keeps breakpoints responsive to user font scaling

    useGSAP(() => {
        serviceRefs.current.forEach((el) => {
            if(!el) return;

            gsap.from(el, {
                y:200,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                duration: 1,
                ease: "circ.out",
            });
        });
    })

    return (
        <section
            id="services"
            className="min-h-screen bg-black rounded-t-4xl"
        >
            <AnimatedHeaderSection
                subTitle="Behind the scene, Beyond the screen"
                title="Service"
                text={text}
                textColor="text-white"
                withScrollTrigger={true}
            />
            {servicesData.map((service, index) => (
                <div
                    ref={(el) => (serviceRefs.current[index] = el)}
                    key={index}
                    className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
                    style={
                        isDesktop
                            ? {
                                // Controls where this sticky card locks relative to the viewport.
                                // 10vh = base offset from top (prevents collision with navbar)
                                // index * 5em = progressively pushes each next card lower,
                                // creating a visible layered / stacked sticky effect.
                                // `em` is used so the offset scales with this card’s font size
                                top: `calc(10vh + ${index * 5}em)`,

                                // Reserves scroll space BELOW this sticky card.
                                // Without this, sticky elements would overlap with no room to scroll.
                                // Cards earlier in the list reserve more space,
                                // cards closer to the end reserve less,
                                // and the last card reserves none.
                                // This ensures smooth handoff when the next card reaches its sticky point.
                                // `rem` is used so spacing is consistent across the page, independent of local font-size changes.
                                marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                            } : { top: 0 }
                    }
                >
                    <div className="flex items-center justify-center gap-4 font-light">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl lg:text-5xl">
                                {service.title}
                            </h2>
                            <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                                {service.description}
                            </p>
                            <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                                {service.items.map((item, itemIndex) => (
                                    <div key={`item-${index}-${itemIndex}`}>
                                        <h3 className="flex">
                                            <span className="mr-12 text-lg text-white/30">
                                                0{itemIndex + 1}
                                            </span>
                                            {item.title}
                                        </h3>
                                        {itemIndex < service.items.length - 1 && (
                                            <div className="w-full h-px my-2 bg-white/30" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Services