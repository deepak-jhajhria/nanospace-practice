import Icons from "../common/Icons"

const Cta = ({ children, className, ...props }) => {
    return (
        <button {...props} className={`py-1.5 px-4 !pr-3 rounded-full flex items-center gap-1.5 text-white group duration-300 bg-blue text-shadow text-base sm:text-lg !leading-156 font-saira font-medium hover:shadow-common-btn ${className}`}>{children}
            <span className="mt-1 group-hover:translate-x-1 duration-300"><Icons icon="right-arrow" /></span>
        </button>
    )
}

export default Cta