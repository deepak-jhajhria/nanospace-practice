import NavBar from "./common/NavBar"

const Hero = () => {
    return (
        <header className="bg-hero bg-no-repeat bg-cover bg-center h-[810px] bg-black relative">
            <NavBar />
            <div className="max-w-[850px] flex flex-col justify-center mx-auto mt-20 md:mt-28 lg:mt-36 xl:mt-44 lg:pt-1.5 container">
                <h1 className="font-orbitron font-bold text-white text-3xl sm:text-custom-4xl lg:text-custom-5xl !leading-120 text-center">Save NANOSPACE World from Enemies</h1>
                <p className="font-saira mt-2 sm:mt-4 text-center text-base sm:text-lg lg:text-xl !leading-150 text-white">Unleash ever - existing excitement with adorable girls armed with destructive gunfire.</p>
            </div>
            <span className="bg-black-gradient w-full flex h-[204px] absolute bottom-0 left-0">
            </span>
        </header>
    )
}

export default Hero