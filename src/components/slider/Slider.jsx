import React from 'react'
import { Slide } from 'react-slideshow-image'
import RepoMap from '../Profile/RepoMap'

const prorietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    indicators: true 
}

const Slideshow= ()=> {
    return (
        <div className="containerSlide">
            <Slide {...prorietes}>
                <div className="eachSlide">
                    <RepoMap />
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;