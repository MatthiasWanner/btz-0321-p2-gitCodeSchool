import React from 'react'
import './Banner.css'
import "tailwindcss/tailwind.css"
import logo from '../../img/logo.svg'

function Banner(){
    const bannerClasses = 'flex flex-col items-center h-screen w-screen text-center';
    const titleContainerClasses = 'flex justify-center items-center h-1/3 w-full';
    const homeTitleClasses = 'text-white text-4xl';
    const spanClasses = 'text-gold-dark';
    const logoContainerClasses = 'flex flex-col items-center justify-center w-full h-2/3';
    const imgClasses = 'w-2/3 max-h-1/2'

    return(
        <header className={`banner ${bannerClasses}`}>
            <div className={titleContainerClasses}>
                <h2 className={homeTitleClasses}>Bienvenue sur <span className={spanClasses}>GitCodeSchool</span></h2>    
            </div>
            <div className={logoContainerClasses}>
                <img className={imgClasses} src={logo} alt="Git Code School logo" />
            </div>
            <div>

            </div>
        </header>
    )
}

export default Banner