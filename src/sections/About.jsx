import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const text = `Passionate about clean architecture
    I build scalable, high-performance solutions 
    from prototype to production`
    const aboutText = `Full-stack developer building modern web applications using TypeScript, React, and Next.js from responsive user interfaces to well-structured Node.js backends. I focus on clean code, performance, and learning through real-world projects.
    
    When I'm not coding:
    ⚡️ Experimenting with TypeScript-first features and tooling
    🛠️ Building and refining full-stack projects end-to-end
    📚 Learning backend architecture, system design, and best practices
    🚀 Exploring how applications scale from development to production`;

    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });

        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current }
        })
    })

    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle="Code with purpose, Build to scale"
                title="About"
                text={text}
                textColor="text-white"
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-center gap-16 px-10 pb-16 
            text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img ref={imgRef} src="images/profile-pic.jpg" alt="profile-picture" className="grayscale w-md rounded-3xl" />
                <AnimatedTextLines text={aboutText} className="w-full" />
            </div>
        </section>
    )
}

export default About