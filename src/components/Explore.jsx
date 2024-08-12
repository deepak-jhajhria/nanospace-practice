import nanospace from '../assets/images/webp/explore-monospace.webp'
import girl from '../assets/images/webp/explore-girl.webp'
import pet from '../assets/images/webp/explore-pet.webp'
import { EXPLORE_DATA_LIST } from '../utils/helper'

const Explore = () => {

    return (
        <section className="bg-explore bg-cover bg-no-repeat bg-center bg-off-black relative overflow-hidden mb-20">
            <span className="bg-explore-gradient w-full flex h-[204px] absolute top-0 left-0 rotate-180 z-10">
            </span>
            <div className="container max-w-[1180px] relative z-20 pt-16 sm:pt-20 md:pt-32 lg:py-[176px]">
                <div className="p-6 md:p-[50px] bg-explore-card rounded-[10px] flex flex-col bg-white bg-opacity-5 max-w-[672px] mx-auto lg:!mr-0 backdrop-blur-xl xl:backdrop-blur-[5px] relative overflow-hidden">
                    <span className='bg-white-gray flex w-[156px] h-14 rounded-full absolute top-16 left-20 blur-[90px] -z-10'></span>
                    <img className="h-14 w-48 md:h-[73px] md:w-[234px]" src={nanospace} alt="explore-nanospace" />
                    <h2 className='font-orbitron font-bold text-white text-xl sm:text-custom-2xl lg:text-custom-4xl !leading-120 mt-6'>Explore NANOSPACE</h2>
                    <p className="font-saira mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl !leading-150 text-white">Find best in class heart-pounding idle RPG experience</p>
                    <p className="font-saira mt-1.5 sm:mt-2.5 text-base sm:text-lg lg:text-xl !leading-150 text-white-gray font-semibold">Adorable, Collectible Anime-Inspired Character</p>
                    {EXPLORE_DATA_LIST.map((item, index) => (
                        <div key={index} className='mt-3 sm:mt-4 flex items-start gap-2.5 xl:pr-16'>
                            <span className='block size-4 min-w-4 rounded-full bg-white-gray mt-1.5 bg-opacity-20 after:absolute relative after:size-[11px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white-gray after:rounded-full'></span>
                            <p className='text-white-gray text-sm sm:text-base font-saira'>{item}</p>
                        </div>
                    ))}
                </div>
                <img src={pet} className='size-[258px] absolute right-0 xl:-right-14 top-16 max-lg:hidden' alt="explore-pet" />
            </div>
            <img className='lg:absolute top-0 left-0 xl:left-10 max-w-[880px] mx-auto w-full max-lg:translate-y-[15%] -mt-16 sm:-mt-20 md:-mt-28 lg:mt-0 z-10' src={girl} alt="explore-girl" />
            <span className='bg-blue flex w-[235px] h-[380px] rounded-full absolute top-80 left-44 blur-[250px] z-0 max-lg:hidden'></span>
        </section>
    )
}

export default Explore