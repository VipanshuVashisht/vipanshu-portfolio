import { useEffect, useRef, useState } from 'react'
import { socials } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const tl = useRef(null);
    const hamburgerTl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true);

    useGSAP(() => {
        gsap.set(navRef.current, { xPercent: 100 });
        gsap.set([linksRef.current, contactRef.current], {
            autoAlpha: 0, // opacity = 0 + visibility = hidden
            x: -20,
        });

        tl.current = gsap.timeline({ paused: true })
            .to(navRef.current, {
                xPercent: 0,
                duration: 1,
                ease: "power3.out",
            })
            .to(linksRef.current, {
                autoAlpha: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
            }, "<")
            .to(contactRef.current, {
                autoAlpha: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
            }, "<+0.2");

        hamburgerTl.current = gsap.timeline({ paused: true })
            .to(topLineRef.current, {
                rotate: 45,
                y: 2.8,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(bottomLineRef.current, {
                rotate: -45,
                y: -2.8,
                duration: 0.3,
                ease: "power2.inOut",
            }, "<");
    }, []);

    // Show the burger menu when: 1) The user scrolls up 2) OR the user is near the top of the page
    // Hide the burger menu when: The user scrolls down
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // currentScrollY <= lastScrollY means: The user is scrolling up OR not scrolling at all
            // currentScrollY < 10 means The user is near the top of the page
            setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
            lastScrollY = currentScrollY;
        }
        window.addEventListener("scroll", handleScroll, {
            passive: true,
            // Passive scroll listener allows the browser to perform scrolling immediately
            // without waiting for JavaScript execution, improving performance and smoothness
        });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        if (isOpen) {
            tl.current.reverse();
            hamburgerTl.current.reverse();
        } else {
            tl.current.play();
            hamburgerTl.current.play();
        }
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav
                ref={navRef}
                className="fixed z-50 flex flex-col justify-between w-full h-full
            px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
            >
                <div className="flex flex-col text-5xl gap-y-2">
                    {["home", "tech stack", "experience", "services","about", "projects", "contact"].map(
                        (section, index) => (
                            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                                <Link
                                    className="transition-all duration-300 cursor-pointer hover:text-white"
                                    to={`${section}`}
                                    smooth
                                    offset={0}
                                    duration={2000}
                                >
                                    {section}
                                </Link>
                            </div>
                        )
                    )}
                </div>
                <div
                    ref={contactRef}
                    className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
                >
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">E-mail</p>
                        <p className="text-xl tracking-widest lowercase text-pretty">vipanshu.dev@gmail.com</p>
                    </div>
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">Social Media</p>
                        <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300 cursor-pointer"
                                >
                                    {"| "}
                                    {social.name}
                                    {" |"}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <div
                className="fixed z-50 flex flex-col items-center justify-center gap-1
                transition-all duration-300 bg-black rounded-full cursor-pointer
                w-10 h-10 md:w-14 md:h-14 top-4 right-3 md:right-5"
                onClick={toggleMenu}
                style={
                    showBurger
                        ? { clipPath: "circle(50% at 50% 50%)" }
                        : { clipPath: "circle(0% at 50% 50%)" }
                }
            >
                <span
                    ref={topLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                />
                <span
                    ref={bottomLineRef}
                    className="block w-8 h-0.5 bg-white rounded-full origin-center"
                />
            </div>
        </>
    )
}

export default Navbar