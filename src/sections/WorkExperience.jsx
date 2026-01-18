import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { workExperience } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
    const text = `Building real-world solutions
    that scale from concept to production
    with modern tech stacks.`;

    const timelineRef = useRef(null);
    const timelineLineRef = useRef(null);
    const companyRefs = useRef([]);
    const bulletRefs = useRef([]);

    useGSAP(() => {
        // Animate timeline line drawing
        if (timelineLineRef.current) {
            gsap.fromTo(
                timelineLineRef.current,
                {
                    scaleY: 0,
                    transformOrigin: "top",
                },
                {
                    scaleY: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 40%",
                        end: "bottom 20%",
                        scrub: 1,
                    },
                }
            );
        }

        // Animate company cards sliding in from alternating sides
        companyRefs.current.forEach((el, index) => {
            if (!el) return;

            const isEven = index % 2 === 0;
            const xOffset = isEven ? -150 : 150;

            gsap.fromTo(
                el,
                {
                    x: xOffset,
                    opacity: 0,
                }, 
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

        // Animate bullet points with stagger
        bulletRefs.current.forEach((bulletArray, companyIndex) => {
            if (!bulletArray || bulletArray.length === 0) return;

            bulletArray.forEach((positionArray, positionIndex) => {
                if (!positionArray || positionArray.length === 0) return;

                positionArray.forEach((bulletEl, bulletIndex) => {
                    if (!bulletEl) return;

                    gsap.fromTo(bulletEl, {
                        x: -30,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: bulletIndex * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: bulletEl,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play reverse play reverse",
                        },
                    });
                });
            });
        });
    });

    return (
        <section id="experience" className="min-h-screen bg-black rounded-t-4xl overflow-x-hidden">
            <AnimatedHeaderSection
                subTitle="From code to impact, Building the future"
                title="Experience"
                text={text}
                textColor="text-white"
                withScrollTrigger={true}
            />

            <div className="relative py-16 px-10 lg:px-20">
                {/* Timeline line */}
                <div
                    ref={timelineRef}
                    className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-white/20 via-white/60 to-white/20 hidden md:block"
                    style={{ transform: "translateX(-50%)" }}
                >
                    <div
                        ref={timelineLineRef}
                        className="absolute top-0 left-0 w-full h-full bg-white/60 origin-top"
                    />
                </div>

                {/* Experience cards */}
                <div className="relative space-y-12 md:space-y-20">
                    {workExperience.map((experience, companyIndex) => (
                        <div
                            key={experience.id}
                            ref={(el) => (companyRefs.current[companyIndex] = el)}
                            className={`relative flex flex-col md:flex-row items-start gap-8 ${companyIndex % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-1/2 top-4 w-4 h-4 bg-white rounded-full border-4 border-black z-10 hidden md:block transform -translate-x-1/2" />

                            {/* Company info card */}
                            <div
                                className={`w-full md:w-5/12 md:sticky top-20 ${companyIndex % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                            >
                                <div>
                                    <h3
                                        data-company-name
                                        className="text-3xl md:text-4xl font-light text-white mb-2 transition-all duration-300 hover:text-white/80"
                                    >
                                        {experience.company}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/60 mb-6">
                                        {experience.location}
                                    </p>
                                </div>
                            </div>

                            {/* Experience positions */}
                            <div className="w-full md:w-5/12 space-y-6">
                                {experience.positions.map((position, positionIndex) => (
                                    <div
                                        key={positionIndex}
                                        data-company-card
                                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10"
                                    >
                                        {/* Position title and period */}
                                        <div className="mb-4">
                                            <h4 className="text-xl md:text-2xl font-medium text-white mb-2">
                                                {position.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-white/50 uppercase tracking-wider">
                                                {position.period}
                                            </p>
                                        </div>

                                        {/* Achievements */}
                                        {position.achievements.length > 0 && (
                                            <ul className="space-y-3">
                                                {position.achievements.map((achievement, achievementIndex) => (
                                                    <li
                                                        key={achievementIndex}
                                                        ref={(el) => {
                                                            if (!bulletRefs.current[companyIndex]) {
                                                                bulletRefs.current[companyIndex] = [];
                                                            }
                                                            if (!bulletRefs.current[companyIndex][positionIndex]) {
                                                                bulletRefs.current[companyIndex][positionIndex] = [];
                                                            }
                                                            bulletRefs.current[companyIndex][positionIndex][achievementIndex] = el;
                                                        }}
                                                        className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed"
                                                    >
                                                        <span className="text-white/40 mt-2 shrink-0">•</span>
                                                        <span className="flex-1">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
