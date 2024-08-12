import { useEffect, useState } from "react";
import { NAV_LINK_LIST } from "../../utils/helper";
import { Link } from "react-router-dom";
import logo from '../../assets/images/png/logo.png';
import Icons from "./Icons";
import Cta from "../custom-ui/Cta";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen && window.innerWidth < 640 ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="bg-black bg-opacity-55 lg:bg-white lg:bg-opacity-5 shadow-nav lg:backdrop-blur-lg py-3 lg:py-0 relative z-30">
            <div className="container max-w-[1240px] flex items-center justify-between">
                <Link onClick={handleClose} to="/">
                    <img className="h-10 w-32 md:h-12 md:w-[154px]" src={logo} alt="logo" width={154} height={48} />
                </Link>
                <div className={`${isOpen ? "left-0" : "-left-full"} flex items-center max-lg:flex-col max-lg:fixed max-lg:items-center max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:top-0 max-lg:bg-black max-lg:justify-center duration-300`}>
                    {NAV_LINK_LIST.map((item, index) => (
                        <Link
                            onClick={handleClose}
                            to={item.url}
                            key={index}
                            className="text-white font-saira text-base z-10 after:duration-500 !leading-156 relative after:absolute after:bg-light-white after:bottom-0 after:left-0 after:h-0 after:w-full hover:after:h-full after:z-0 py-4 lg:py-7 lg:px-4"
                        >
                            <span className="relative z-10">{item.link}</span>
                        </Link>
                    ))}
                    <Cta onClick={handleClose} className='lg:hidden mt-4'>Find More</Cta>
                </div>
                <Cta className="max-lg:hidden mb-1">Find More</Cta>
                <div onClick={handleToggle} className="relative z-50 cursor-pointer lg:hidden">
                    <Icons icon={isOpen ? "nav-cross" : "nav-menu"} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
