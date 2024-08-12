import { Link } from "react-router-dom"
import NavBar from "./common/NavBar"
import { HERO_SOCAL_LINK_LIST } from "../utils/helper"

const Hero = () => {

    return (
        <header className="h-[80vh] lg:h-[810px] bg-black relative overflow-hidden after:bg-hero after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-0">
            <video autoPlay muted playsInline loop className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="https://t3475808.p.clickup-attachments.com/t3475808/2e6ec7ca-e88c-4b27-ab6a-5eac2e8ccfb3/1920X886%20Banner.mp4?open=true" />
            </video>
            <NavBar />
            <div className="max-w-[850px] flex flex-col justify-center mx-auto container z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <h1 className="font-orbitron font-bold text-white text-3xl sm:text-custom-4xl lg:text-custom-5xl !leading-120 text-center">Save NANOSPACE World from Enemies</h1>
                <p className="font-saira mt-2 sm:mt-4 text-center text-base sm:text-lg lg:text-xl !leading-150 text-white">Unleash ever - existing excitement with adorable girls armed with destructive gunfire.</p>
                <div className="mt-6 sm:mt-8 lg:mt-11 lg:pt-0.5 flex items-center gap-2 md:gap-4 justify-center">
                    {HERO_SOCAL_LINK_LIST.map((item, index) => (
                        <Link key={index} to={item.url} target="_blank" aria-label="join over community">
                            <img className="max-w-24 sm:max-w-[118px] w-full rounded-md object-contain duration-300 hover:scale-105" src={item.image} alt="logo" />
                        </Link>
                    ))}
                </div>
            </div>
            <span className="bg-black-gradient w-full flex h-20 lg:h-[204px] absolute -bottom-5 left-0 z-20">
            </span>
        </header>
    )
}

export default Hero