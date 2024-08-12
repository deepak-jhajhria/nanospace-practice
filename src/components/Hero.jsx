import { Link } from "react-router-dom"
import NavBar from "./common/NavBar"
import { HERO_SOCAL_LINK_LIST } from "../utils/helper"

const Hero = () => {

    return (
        <header className="bg-hero bg-no-repeat bg-cover bg-center h-[470px] sm:h-[640px] lg:h-[810px] bg-black relative overflow-hidden">
            <NavBar />
            <div className="max-w-[850px] flex flex-col justify-center mx-auto mt-20 md:mt-28 lg:mt-36 xl:mt-44 lg:pt-1.5 container">
                <h1 className="font-orbitron font-bold text-white text-3xl sm:text-custom-4xl lg:text-custom-5xl !leading-120 text-center">Save NANOSPACE World from Enemies</h1>
                <p className="font-saira mt-2 sm:mt-4 text-center text-base sm:text-lg lg:text-xl !leading-150 text-white">Unleash ever - existing excitement with adorable girls armed with destructive gunfire.</p>
                <div className="mt-6 sm:mt-8 lg:mt-11 lg:pt-0.5 flex items-center gap-2 md:gap-4 justify-center">
                    {HERO_SOCAL_LINK_LIST.map((item, index) => (
                        <Link key={index} to={item.url} target="_blank" aria-label="join over community">
                            <img className="max-w-20 sm:max-w-[118px] w-full rounded-md object-contain" src={item.image} alt="logo" />
                        </Link>
                    ))}
                </div>
            </div>
            <span className="bg-black-gradient w-full flex h-20 lg:h-[204px] absolute -bottom-5 left-0 z-0">
            </span>
        </header>
    )
}

export default Hero