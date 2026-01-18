import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Icon } from "@iconify/react"
gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
    const text = `Technologies I use to build
    scalable, modern applications
    that deliver exceptional results.`
    
    const techStack = [
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "React.js", icon: "logos:react" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express.js", icon: "logos:express" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "HTML5", icon: "logos:html-5" },
        { name: "CSS3", icon: "logos:css-3" },
        { name: "Redux Toolkit", icon: "logos:redux" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "GitHub", icon: "logos:github-icon" },
    ]

    const iconsRef = useRef([])

    useGSAP(() => {
        iconsRef.current.forEach((el, index) => {
            if (!el) return

            gsap.from(el, {
                opacity: 0,
                scale: 0.5,
                y: 50,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                duration: 0.6,
                delay: index * 0.05,
                ease: "back.out(1.7)",
            })
        })
    })

    return (
        <section
            id="tech-stack"
            className="min-h-screen rounded-t-4xl"
        >
            <AnimatedHeaderSection
                subTitle="Tools of the trade"
                title="Tech Stack"
                text={text}
                textColor="text-black"
                withScrollTrigger={true}
            />
            <div className="px-10 pb-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            ref={(el) => (iconsRef.current[index] = el)}
                            className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
                        >
                            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-black/5 border border-black/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black/10 group-hover:border-black/20 group-hover:scale-110">
                                <Icon
                                    icon={tech.icon}
                                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                                />
                            </div>
                            <p className="text-sm md:text-base font-light tracking-wider text-black/60 group-hover:text-black transition-colors duration-300 text-center">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
