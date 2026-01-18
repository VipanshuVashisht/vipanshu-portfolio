import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    const isLargeTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1365 })
    const text = `I transform ambitious ideas into market-ready software,
    engineering the advantage that separates 
    market leaders from the competition.`;

    return (
        <section id="home" className="flex flex-col justify-end h-screen">
            <AnimatedHeaderSection 
                subTitle="Software developer"
                title="Vipanshu Vashisht"
                text={text}
                textColor="text-black"
            />
            <figure
                className="absolute inset-0 -z-50 w-full h-full"
            >
                <Canvas
                    shadows
                    camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
                >
                    <ambientLight intensity={0.5} />
                    <Float speed={0.5}>
                        <Planet scale={
                            isMobile ? 0.45 :
                                isTablet ? 0.65 :
                                    isLargeTablet ? 0.8 : 1
                        } />
                    </Float>
                    <Environment resolution={256}>
                        <group rotation={[-Math.PI / 3, 4, 1]}>
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[0, 5, -9]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[0, 3, 1]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[-5, -1, -1]}
                                scale={10}
                            />
                            <Lightformer
                                form={"circle"}
                                intensity={2}
                                position={[10, 1, 0]}
                                scale={16}
                            />
                        </group>
                    </Environment>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero