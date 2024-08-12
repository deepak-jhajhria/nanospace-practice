const Icons = ({ icon, className = '', ...props }) => {
    const iconsList = {
        'right-arrow': (
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_36)">
                    <path d="M7.3641 8.5L1 2.6664L2.81795 1L11 8.5L2.81795 16L1 14.3336L7.3641 8.5Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_1_36" x="0" y="0" width="14" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1" dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_36" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape" />
                    </filter>
                </defs>
            </svg>
        ),
        'nav-menu': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_159_609)">
                    <path d="M1.66884 3.66104C0.970399 3.77354 0.328212 4.35479 0.075087 5.09072C-0.0327255 5.40947 -0.0233505 6.05166 0.0891495 6.38916C0.576649 7.8001 2.29227 8.27822 3.45477 7.32666C4.20477 6.7126 4.40165 5.5501 3.90477 4.65947C3.62352 4.15791 3.0329 3.7501 2.45634 3.65635C2.14227 3.60479 1.99227 3.60479 1.66884 3.66104Z" fill="#FFFFFF" />
                    <path d="M7.23281 4.17201C6.77813 4.26576 6.36094 4.60326 6.14531 5.05795C6.04219 5.27826 6.02344 5.38607 6.02344 5.71888C6.02344 6.07513 6.04219 6.15482 6.17813 6.43138C6.35156 6.78763 6.5625 6.99388 6.9375 7.16732L7.19531 7.2892L14.8594 7.30326C20.5078 7.31263 22.5891 7.30326 22.7812 7.26576C23.5078 7.11107 24 6.49232 24 5.71888C24 5.08138 23.6906 4.58451 23.1188 4.30326L22.8047 4.14857L15.1172 4.14388C10.8891 4.1392 7.34063 4.15326 7.23281 4.17201Z" fill="#FFFFFF" />
                    <path d="M1.64536 9.94239C0.937549 10.0783 0.328174 10.6361 0.0750488 11.3721C-0.0233887 11.6674 -0.0233887 12.333 0.0750488 12.6283C0.417236 13.6361 1.37817 14.2314 2.39536 14.0768C3.45005 13.9127 4.17661 13.0643 4.17661 12.0002C4.17661 10.6455 2.98599 9.67989 1.64536 9.94239Z" fill="#FFFFFF" />
                    <path d="M7.20469 10.4581C6.75469 10.5659 6.35156 10.8987 6.14531 11.3393C6.04219 11.5597 6.02344 11.6675 6.02344 12.0003C6.02344 12.3331 6.04219 12.4409 6.14531 12.6612C6.30469 12.9987 6.59531 13.2893 6.93281 13.4487L7.19531 13.5706L14.9016 13.5847C23.3156 13.5987 22.8656 13.6081 23.2969 13.3362C24.2344 12.7456 24.2344 11.255 23.2969 10.6643C22.8656 10.3925 23.3156 10.4065 15.0047 10.4112C10.7531 10.4159 7.30313 10.4347 7.20469 10.4581Z" fill="#FFFFFF" />
                    <path d="M1.56102 16.2424C0.857899 16.4346 0.323524 16.9268 0.0891495 17.6158C-0.0233505 17.9486 -0.0327255 18.5955 0.075087 18.9096C0.417274 19.9127 1.37352 20.5033 2.40009 20.3533C3.20165 20.2315 3.83446 19.6877 4.10165 18.8955C4.20946 18.5674 4.20009 17.958 4.0829 17.6158C3.71727 16.5611 2.61102 15.9611 1.56102 16.2424Z" fill="#FFFFFF" />
                    <path d="M7.09245 16.7766C5.7237 17.25 5.62057 19.1156 6.93307 19.7297L7.19557 19.8516H15.0003H22.8049L23.119 19.6969C24.4221 19.0547 24.2487 17.1234 22.8518 16.7531C22.6596 16.7016 21.2206 16.6875 14.9768 16.6875C7.7487 16.6922 7.32213 16.6969 7.09245 16.7766Z" fill="#FFFFFF" />
                </g>
                <defs>
                    <clipPath id="clip0_159_609">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        'nav-cross': (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_162_297)">
                    <path d="M14.8284 9.17162L9.17157 14.8285M9.17157 9.17162L14.8284 14.8285M19.0711 19.0711C15.1658 22.9764 8.83418 22.9764 4.92893 19.0711C1.02369 15.1659 1.02369 8.83422 4.92893 4.92898C8.83418 1.02373 15.1658 1.02373 19.0711 4.92898C22.9763 8.83422 22.9763 15.1659 19.0711 19.0711Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_162_297">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
    }
    return icon && iconsList[icon]
}
export default Icons
